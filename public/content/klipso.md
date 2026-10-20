# Klipso — AI-powered short-form video creation

**My role:** Creator & full-stack developer · **Status:** Actively developed personal product

[Explore Klipso](https://klipso.dev)

Klipso turns long-form YouTube videos into captioned, speaker-aware clips for **TikTok, Instagram Reels and YouTube Shorts**. It brings highlight selection, reframing, rendering and delivery into one workflow so creators can spend less time assembling edits manually.

I built the product end to end and continue to improve its AI pipeline, reliability, efficiency and user experience.

## Product milestones

| Users | Clips generated | Generated video |
| :--- | :--- | :--- |
| **100+** | **1,000+** | **14+ hours** |

*Creator-reported milestones, October 2026. Users are not a paying-subscriber count; generated video is output duration, not source footage processed.*

## How it works

```text
Video → Captions / Whisper → Gemini highlight selection
      → Speaker diarization + face tracking
      → Single-pass FFmpeg render → Cloudflare R2 → Creator dashboard
```

- **Transcription and selection:** reuse native captions when available, with Whisper as a fallback. Gemini proposes candidate highlights from the transcript.
- **Speaker-aware framing:** combine PyAnnote diarization with MediaPipe face detection to plan the vertical crop around the active speaker.
- **Rendering:** fuse crop, optional upscale, subtitles and branded outro into one FFmpeg filter graph and encoder pass. Subtitles are drawn at the final output resolution.
- **Delivery:** upload clips to Cloudflare R2 and expose previews and signed download links in the dashboard.

## What I built

**Product and frontend.** React/TypeScript interface, authentication, video submission, clip history, previews, downloads and seven-language support. Active jobs can reattach after a refresh, and progress reflects real backend stages rather than a fabricated percentage.

**Processing and infrastructure.** Python serverless API on Vercel, Firebase-backed job coordination and asynchronous NVIDIA T4 workers on Kaggle. The design separates submission, dispatch, processing, delivery and terminal status updates.

**Credits and billing.** Firebase transactions reserve credits at submission, with finalization after successful delivery and refunds on failure paths. Stripe integration supports payments and subscriptions; idempotent handling protects against repeated webhook events.

**Operations and measurement.** Session verification, periodic reconciliation, retryable webhooks, regression tests and frontend/backend funnel events. Observability is best-effort so analytics failures do not determine job or credit state.

## Measured engineering improvements

The October 2026 optimization work targeted repeated computation and failure recovery, not just new features.

| Area | Before → after | Why it matters |
| :--- | :--- | :--- |
| Encoder passes per vertical clip | **4 → 1** | Less repeated work and fewer re-encoding stages |
| Worker dependency installation | **188.8s → 25.1s** | Avoids reinstalling the GPU image's matched PyTorch/CUDA stack |
| Post-processing, three clips | **264.2s → 102.6s** | Fused render graph reduces processing overhead |
| Worker elapsed time to completion webhook | **548.4s → 276.6s** | About 2× faster in the captions-enabled comparison |
| Whisper-fallback worker elapsed time | **548.4s → 347.6s** | About 1.6× faster in the documented fallback run |
| Queue reconciliation | **60-second checks** | Detects divergence from actual worker state and recovers resources |

**Measurement scope:** the pipeline comparison used the same video and options—three vertical clips, upscale, subtitles and a free-user outro—with two post-change production runs. Dependency installation was measured separately on a T4 runtime. These are documented engineering comparisons, not fleet-wide medians or guaranteed user wait times. Queueing and dispatch add to processing time, and failure recovery uses different grace periods for different states.

Output bitrate increased from roughly 2 to 8 Mbps, with subtitles rendered at 1080×1920. That is a bitrate and rendering change—not a measured “4× quality” score—and increases storage per clip-second.

## Improving the experience around the AI

- Preserve a pasted video URL through signup and login.
- Restore active job tracking after a page refresh.
- Make email-verification status update without a full reload.
- Provide keyboard-operable dialogs, mobile navigation and localized errors.
- Instrument the path from signup to clip delivery without claiming an engagement uplift that the available sample cannot establish.

**Stack:** React · TypeScript · Python · Vercel · Kaggle/T4 · Whisper · Gemini · PyAnnote · MediaPipe · FFmpeg · Firebase · Cloudflare R2 · Stripe · PostHog
