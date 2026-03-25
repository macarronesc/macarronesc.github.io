# Klipso — AI-Powered Viral Clip Platform

[![Live in Production](https://img.shields.io/badge/Live-klipso.vercel.app-000000?style=for-the-badge&logo=vercel)](https://klipso.vercel.app/)

**Klipso** is a production-grade, full-stack SaaS platform I architected and developed from the ground up in my spare time. It autonomously transforms long-form YouTube videos into high-retention, vertical clips (9:16) optimized for TikTok, Reels, and Shorts. 

By orchestrating a complex, multi-modal AI pipeline entirely in the cloud, Klipso abstracts away hours of tedious manual video editing, allowing content creators to generate viral assets with a single click.

### The Multi-Modal AI Pipeline

At the core of Klipso is an advanced, distributed inference engine that fuses audio processing, natural language understanding, and computer vision to replicate human editing decisions:

1. **Robust Ingestion:** A custom extraction layer utilizing `yt-dlp` with advanced proxy rotation and IP masking to reliably fetch 1080p source streams while bypassing dynamic bot protections.
2. **Acoustic & Semantic Analysis:** Audio is processed through OpenAI's **Whisper** for word-level timestamped transcription. The output is fed into **Google Gemini**, which acts as a narrative reasoning engine to identify emotional shifts, punchlines, and high-retention "hooks."
3. **Speaker-Aware Face Tracking:** The platform solves the complex problem of dynamic framing by fusing two AI modalities. **PyAnnote Audio** performs speaker diarization (identifying *who* is speaking and *when*), while **MediaPipe** performs spatial face detection. A custom deterministic algorithm maps the active speaker's audio signature to their visual bounding box.
4. **Cinematic Rendering:** Instead of static cuts, the pipeline calculates smooth camera pans using mathematical interpolation. **FFmpeg** executes the final hardware-accelerated render, applying the dynamic crop, upscaling the output to 1080×1920 using Lanczos filtering, and burning in stylized, creator-centric subtitles.

### Cloud-Native Architecture

To support heavy GPU workloads and ensure a seamless user experience, I designed a highly scalable, event-driven serverless architecture:

* **Frontend (React 19 & Vite):** A modern, highly responsive SPA utilizing Tailwind CSS and Framer Motion. It features a complete user dashboard, real-time job polling, and comprehensive internationalization (i18n) across 7 languages.
* **Serverless API (Vercel):** Python-based serverless functions handle API routing, secure JWT authentication via Firebase, and asynchronous webhook processing.
* **Distributed Job Queue:** Firebase Realtime Database acts as the central nervous system, handling atomic task locking, distributed job enqueuing, and real-time state synchronization between the frontend and the remote GPU workers.
* **GPU Compute Cluster:** The heavy AI inference tasks are asynchronously dispatched to a fleet of cloud GPUs (NVIDIA T4s), ensuring high throughput and isolated execution environments.
* **Edge Storage:** Processed artifacts are streamed directly to **Cloudflare R2** (S3-compatible), leveraging zero-egress fees and providing users with low-latency, pre-signed download URLs.

### Engineering Highlights & Monetization

Beyond the AI, I engineered robust business logic to handle production traffic:
* **Atomic Credit System:** Implemented a reliable credit-based economy. Credits are reserved atomically via Firebase transactions upon job submission and only finalized upon successful GPU rendering, guaranteeing users never lose credits to infrastructure faults.
* **Idempotent Payment Webhooks:** Fully integrated with **Stripe** for one-time packages and recurring monthly subscriptions. The backend employs strict idempotency keys to handle Stripe webhooks, preventing race conditions or duplicate credit grants.
* **Fault Tolerance:** Built a self-healing queue system that automatically detects stalled jobs, clears deadlocks, and alerts the support team via integrated Brevo email notifications with sanitized execution logs.

### Real-World Traction

Klipso is not just a proof-of-concept; it is a fully operational business actively used by creators and marketing agencies:
- **2,500+** viral clips successfully generated in production.
- **50+** active, recurring users.
- Generating automated revenue through processed Stripe subscriptions.

### Technologies
`React 19` · `TypeScript` · `Python` · `Serverless` · `OpenAI Whisper` · `Gemini API` · `MediaPipe` · `PyAnnote` · `FFmpeg` · `Firebase` · `Stripe` · `Cloudflare R2`