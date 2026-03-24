# Klipso — AI-Powered Viral Clip Platform

**Klipso** is a comprehensive full-stack SaaS platform designed to autonomously transform long-form YouTube videos into high-retention vertical clips (9:16) optimized for TikTok, Reels, and Shorts. Content creators simply provide a YouTube URL and select their preferences; the platform orchestrates the entire intelligence pipeline—from audio transcription to dynamic face tracking and subtitle rendering.

### How It Works

The entire pipeline is fully automated and runs serverlessly on cloud GPUs, requiring zero local compute from the user:

1. **Ingestion & Transcription**: Extracts source video in 1080p via yt-dlp. OpenAI's Whisper model then generates highly accurate, word-level timestamped transcriptions.
2. **Highlight Detection**: The Google Gemini API evaluates the full transcript against virality and retention heuristics to pinpoint the most engaging, shareable moments.
3. **Speaker Diarization**: PyAnnote Audio processes the acoustic signals to identify, track, and separate individual speakers throughout the video timeline.
4. **Face Tracking & Smart Crop**: MediaPipe performs real-time facial detection. A custom deterministic algorithm dynamically crops the frame to keep the active speaker perfectly centered in vertical format.
5. **Post-Processing**: FFmpeg executes the final render, upscaling to 1080×1920, overlaying stylized subtitles, and applying format optimizations for social media.

### Architecture

Klipso leverages a distributed, event-driven serverless architecture across three core layers:

- **Frontend**: A React 19 + Vite application stylized with Tailwind CSS and deployed on Vercel. It features a comprehensive user dashboard, robust authentication, Stripe-integrated billing, and i18n support across 7 languages.
- **API & Orchestration**: Python serverless functions on Vercel manage Firebase job queues, handle credit validation, govern Kaggle kernel dispatching, and process webhooks.
- **GPU Compute**: The heavy AI pipeline runs dynamically on Kaggle T4 GPUs. Processed artifacts are persisted to Cloudflare R2 (S3-compatible) to ensure egress-free, low-latency delivery.

### Credit System & Monetization

Users receive an initial tier of 50 free credits upon onboarding. Processing is metered at 1 credit per 15 minutes of source video, plus 1 credit per generated clip. Premium capabilities, such as 1080p upscaling, incur additional fees. Credits are escrowed upon job submission and automatically refunded in the event of an execution failure.

### Traction

- **2,500+ clips** generated in production
- **50+ active users** representing content creators and marketing agencies
- **Seamless payments** via Stripe (one-time packages and recurring subscriptions)

### Technologies
`Python` · `React 19` · `Whisper` · `Gemini API` · `MediaPipe` · `PyAnnote` · `FFmpeg` · `Firebase` · `Stripe` · `Cloudflare R2` · `Kaggle GPU`
