# Research to AI Video — A reviewed path from NotebookLM to YouTube

**My role:** Developer · **Status:** Public Python integration project

[Explore the repository](https://github.com/macarronesc/research-to-ai-video)

This project handles the repeatable API work around publishing a NotebookLM video: draft a title, description and tags with Gemini, review them locally, authorize the intended channel and upload through the official YouTube Data API.

The useful distinction is **automation with explicit editorial control**, not unattended video generation.

## The workflow

1. Review sources and manually create/download a video in NotebookLM.
2. Prepare a source manifest with attribution and license information.
3. Explicitly approve sending the video and sources to Gemini for metadata drafting, or prepare metadata without Gemini.
4. Review and edit the draft; choose visibility and content disclosures.
5. Confirm the authorized YouTube channel and exact upload request before publishing.
6. Optionally receive a generic Telegram status notification without video details.

## What I built

- A Python CLI for analysis, reviewed uploads and OAuth revocation.
- OAuth-based YouTube access, channel confirmation and resumable uploads.
- Conservative defaults: private visibility, no automatic deletion of local videos and no silent overwriting of drafts.
- Input validation, credential-file checks, restricted file permissions and explicit consent boundaries.
- Offline tests with mocked providers covering validation, consent and failure handling.

## Scope and limitations

**NotebookLM generation and download remain manual.** The public edition does not automate the website, use private NotebookLM APIs, schedule publication or independently verify source facts and rights. Attribution is not a substitute for permission, and cloud-provider retention follows provider terms.

This is a local Linux integration project, not a hosted service or an affiliation with Google, YouTube or Telegram.

**Stack:** Python · NotebookLM workflow · Gemini API · YouTube Data API · OAuth · Telegram
