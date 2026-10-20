import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';

const root = fileURLToPath(new URL('../', import.meta.url));
// Use the existing Vite loader for TypeScript; no extra test runner or fixtures.
const server = await createServer({ root, configFile: false, esbuild: { jsx: 'automatic' }, server: { middlewareMode: true } });

try {
  const { projects, techFilters, timelineOrder, isProjectVisible } = await server.ssrLoadModule('/src/data/projects.ts');
  const { en } = await server.ssrLoadModule('/src/i18n/en.ts');
  const { es } = await server.ssrLoadModule('/src/i18n/es.ts');
  const { ProjectGrid } = await server.ssrLoadModule('/src/components/ProjectGrid.tsx');
  const { LanguageProvider } = await server.ssrLoadModule('/src/i18n/index.tsx');
  const { ThemeProvider } = await server.ssrLoadModule('/src/hooks/useTheme.tsx');

  assert.deepEqual(Object.keys(en).sort(), Object.keys(es).sort(), 'EN/ES translation keys must match');
  const ids = projects.map(project => project.id);
  assert.equal(new Set(ids).size, ids.length, 'Project IDs must be unique');
  assert.deepEqual(ids.slice(0, 2), ['klipso', 'invade'], 'Flagship projects must lead the grid');
  assert.deepEqual([...timelineOrder].sort(), [...ids].sort(), 'Every project must appear once in the timeline');

  const contentIds = projects.map(project => project.contentId ?? project.id).sort();
  for (const [language, strings] of Object.entries({ en, es })) {
    const directory = path.join(root, 'public/content', language === 'en' ? '' : language);
    const actualIds = (await readdir(directory)).filter(name => name.endsWith('.md')).map(name => name.slice(0, -3)).sort();
    assert.deepEqual(actualIds, contentIds, `${language}: detail files must match the project registry`);
    for (const project of projects) {
      const keys = [`${project.id}.role`, `${project.id}.description`, `timeline.${project.id}.date`];
      if (project.stats) keys.push(`${project.id}.evidence`);
      for (const stat of project.stats ?? []) keys.push(`${project.id}.stats.${stat}.value`, `${project.id}.stats.${stat}.label`);
      for (const key of keys) assert.ok(strings[key]?.trim(), `${language}: missing ${key}`);
      assert.ok(project.tech.every(filter => techFilters.includes(filter)), `${project.id}: unknown filter`);

      const filename = path.join(directory, `${project.contentId ?? project.id}.md`);
      const markdown = await readFile(filename, 'utf8');
      assert.match(markdown, /^# .+/m, `${filename}: missing heading`);
      for (const [, target] of markdown.matchAll(/\]\(([^\s)]+)\)/g)) {
        if (target.startsWith('#')) continue;
        if (/^[a-z]+:/i.test(target)) {
          assert.ok(['https:', 'mailto:'].includes(new URL(target).protocol), `${filename}: unsafe link ${target}`);
        } else {
          await access(path.resolve(target.startsWith('/') ? path.join(root, 'public') : directory, decodeURIComponent(target.split(/[?#]/)[0]).replace(/^\//, '')));
        }
      }
    }
  }

  // Check every current filter, including the one-item game-development view.
  for (const filter of [null, ...techFilters]) {
    const expected = projects.filter(project => isProjectVisible(project.id, filter));
    assert.ok(expected.length, `Empty filter: ${filter}`);
    const html = renderToStaticMarkup(React.createElement(LanguageProvider, null,
      React.createElement(ThemeProvider, null, React.createElement(ProjectGrid, { activeFilter: filter, onSelectProject() {} }))));
    const spans = [...html.matchAll(/<article[^>]*class="[^"]*md:col-span-(\d+)/g)].map(match => Number(match[1]));
    assert.equal(spans.length, expected.length, `Missing cards: ${filter}`);
    assert.equal((html.match(/aria-haspopup="dialog"/g) ?? []).length, expected.length, `Missing accessible project buttons: ${filter}`);
    let row = 0;
    for (const span of spans) {
      row += span;
      assert.ok(row <= 12, `Grid gap/overflow in ${filter}`);
      if (row === 12) row = 0;
    }
    assert.equal(row, 0, `Unfilled row in ${filter}`);
  }

  const sourceFiles = (await readdir(path.join(root, 'src'), { recursive: true })).filter(name => /\.tsx?$/.test(name));
  for (const filename of sourceFiles) {
    const source = await readFile(path.join(root, 'src', filename), 'utf8');
    for (const [, key] of source.matchAll(/\bt\('([^']+)'\)/g)) assert.ok(en[key], `${filename}: missing translation ${key}`);
  }
  console.log(`Content check passed: ${projects.length} projects, ${projects.length * 2} detail pages, EN/ES parity and ${techFilters.length + 1} grid/filter views.`);
} finally {
  await server.close();
}
