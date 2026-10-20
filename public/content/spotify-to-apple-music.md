# Spotify to Apple Music — Take your playlists with you

**My role:** Integration & automation developer · **Status:** Public personal-use project

[Explore the repository](https://github.com/macarronesc/Spotify_to_AppleMusic)

This Python workflow transfers playlists **from Spotify to Apple Music**. It connects playlist extraction, catalog matching, destination playlist updates and Telegram notifications, with a GitHub Actions workflow for repeatable execution.

The music-transfer foundation builds on [therealmarius/Spotify-2-AppleMusic](https://github.com/therealmarius/Spotify-2-AppleMusic), credited in the repository. My work brings the integrations and automation together rather than claiming the entire original implementation.

## How it works

1. Fetch a Spotify playlist through the Spotify API and export tracks to CSV.
2. Search the Apple/iTunes catalog using title, artist and album combinations.
3. Create or locate the destination Apple Music playlist, check existing tracks and add matches.
4. Record unmatched songs for manual review and report transfer status through Telegram.

## Engineering focus

- Coordinate separate services and credentials in a single repeatable workflow.
- Support configurable Apple Music storefronts for regional catalog differences.
- Avoid adding tracks already found in the destination playlist.
- Run through GitHub Actions using repository secrets rather than source-controlled credentials.

## Scope and limitations

The transfer is **one-way**, not bidirectional synchronization. Catalog matching is heuristic and may miss or misidentify songs; unmatched entries need review. Apple Music authentication relies on user-provided web-player credentials, which can expire and must be handled carefully.

The current Actions workflow is **manually triggered**; its weekly schedule is commented out. The project is for personal/educational use and is not affiliated with Spotify or Apple.

**Stack:** Python · Spotify API · Apple Music/iTunes catalog · GitHub Actions · Telegram
