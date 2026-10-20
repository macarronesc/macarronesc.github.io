# Invade.io — Build an army. Conquer the map.

**My role:** Game developer · **Status:** Actively developed personal project

[View on Google Play](https://play.google.com/store/apps/details?id=macarronesc.invadeio) · [Explore the repository](https://github.com/macarronesc/invade.io)

Invade.io is a **mobile-first, real-time territorial strategy game** built with Godot 4. Capture bases, send troops across the map and grow an army through a campaign designed around a steady sense of progression.

I develop both the game systems and the mobile experience: combat, enemy decisions, campaign rules, upgrades, local persistence, settings and build workflows.

## The player experience

- **30 campaign levels:** move across continents, learn their rules and face a boss every fifth level.
- **Territorial decisions:** balance recruitment, movement and defense; capturing a base changes the balance of the battlefield.
- **Distinct regional rules:** capitals, factories, fortresses, slower jungle movement and connected sea routes vary the tactical problem.
- **Long-term progression:** army upgrades, player ranks, cosmetic unlocks, medals and an atlas of campaign cities.
- **Replayable modes:** daily challenges with comparable rules and five-region free-conquest expeditions.

## Engineering behind the game

**Combat and balance.** Troops travel in small groups, orders reserve units, and enemy behavior is separated from progression rewards. Balance checks exercise all campaign levels and different upgrade strategies; real-player testing is still needed to validate pacing and retention.

**Mobile lifecycle.** Changing apps saves progress, suspends audio and pauses combat until the player resumes. Settings cover sound, vibration, simulation speed, language, appearance and reduced motion.

**Persistence and recovery.** Versioned local saves preserve progression, with a recovery copy and manually exportable/restorable JSON backups. This is local persistence, not cloud saving.

**Builds and verification.** Headless Godot checks cover gameplay and persistence, alongside Android export validation and an iOS IPA workflow for SideStore testing. A successful build is not a substitute for testing controls, performance and safe areas on a real phone.

## Current scope

The public version includes single-player gameplay and local progression. Cloud saves and online leaderboards are **not integrated**. The iOS workflow produces test builds for SideStore, not App Store or TestFlight releases.

**Stack:** Godot 4 · GDScript · Android · iOS test builds · GitHub Actions
