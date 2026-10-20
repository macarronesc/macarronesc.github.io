# Soundless — Citizen-science infrastructure for noise and sleep research

**My role:** Lead software developer · **Context:** Research with residents of Tarragona, Spain

[Explore the Soundless organization](https://github.com/Soundless-URV) · [IEEE ICDCSW 2025 paper](https://doi.org/10.1109/ICDCSW63273.2025.00054)

Soundless connects a mobile application, Fitbit data and cloud analysis to study **associations between environmental noise and sleep**. The software brings acoustic and wearable measurements into a shared timeline that researchers and participants can inspect.

I led software development across the Android application, integrations, data ingestion and analysis workflow.

## What I built

- **Android collection:** a Kotlin application for recording nighttime acoustic measurements and managing the participant workflow.
- **Wearable integration:** Fitbit API access to align available sleep and heart-rate measurements with acoustic observations.
- **Cloud pipeline:** Firebase/GCP services for authentication, ingestion, storage and processing, with BigQuery/Python analysis.
- **Event analysis:** Z-score-based detection and time-window comparisons to explore how noise events align with physiological measurements.

The engineering challenge was coordinating data from different devices and sampling schedules while keeping the workflow useful outside a controlled lab.

## From cloud analysis to participant-controlled execution

Follow-up research explored running existing serverless functions directly on smartphones. The aim was to make analysis more accessible and reproducible: participants could inspect and run code on their own devices instead of depending exclusively on remotely generated results.

I co-authored *Bringing Serverless Functions Closer To Citizen Science Mobile Applications*, **IEEE ICDCSW 2025**. The prototype evaluation showed that existing cloud-based functions could execute on smartphones without source-code changes in the evaluated setup.

## Responsible interpretation

Observed correlations between noise and wearable measurements do not, on their own, establish clinical causation. Device calibration, wearable estimates, participant context and study design all affect interpretation. This project is research infrastructure, not a medical diagnostic system.

**Stack:** Kotlin · Android · Fitbit API · Firebase · GCP · BigQuery · Python · Serverless · Edge computing
