# Soundless — Citizen Science Noise & Health Platform

[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?logo=github)](https://github.com/Soundless-URV)

**Soundless** is an open-source citizen science research initiative engineered to investigate the physiological impact of urban noise pollution on sleep quality and cardiovascular health. Deployed in Tarragona, Spain, the platform bridges a custom Android application with Fitbit wearable devices to continuously harvest, synchronize, and analyze real-world telemetry from 50 local residents.

As the lead developer for this project, I architected and authored the entire software ecosystem—from the mobile application to the distributed cloud deployment and the data analytics pipeline. 

### The Problem

Noise pollution is a severely underestimated environmental health hazard. The World Health Organization (WHO) warns that excessive nocturnal noise (above 45 dB) directly correlates with sleep disruption and cardiovascular stress. Despite this, granular, individual-level data correlating specific noise events with real-time physiological responses remained scarce. Soundless was built to provide scientific, irrefutable evidence of these health impacts for affected neighborhoods.

### Platform Architecture

The system relies on a robust, highly scalable client-server architecture capable of handling thousands of hours of continuous biometric and acoustic recording:

- **Mobile Application (Kotlin/Android)**: A native edge application running continuously during sleep hours. It utilizes the smartphone's microphone to sample ambient decibels and tightly interfaces with the **Fitbit API** to synchronously fetch heart rate, heart rate variability (HRV), and precise sleep stage transitions (light, deep, REM, awake).
- **Cloud Backend (Google Cloud Platform)**: A scalable infrastructure powered by Firebase for secure user authentication and Google Cloud Storage for encrypted, anonymized data ingestion. 
- **Data Analytics Pipeline (BigQuery & Python)**: Automated cloud pipelines filter invalid data and aggregate the multi-modal CSV datasets. I implemented a **Z-scores dispersion algorithm** to detect anomalies—correlating sudden acoustic spikes with immediate physiological reactions within 10-to-40-second time windows.

### Key Findings & Real-World Impact

After analyzing thousands of hours of telemetry across two seasonal phases (winter and summer), the platform uncovered alarming realities:
- **WHO Limits Breached:** The 45 dB legal safety limit was exceeded on **98% of recorded nights**, with freight trains routinely causing noise spikes up to 80 dB.
- **Health Disruptions:** On average, the algorithm detected 12 distinct noise incidents per night per user. In **1 out of 5 nights**, users suffered abrupt awakenings (transitioning from Deep/REM sleep to fully awake) directly triggered by noise.
- **Personalized Sensitivity Modeling:** The platform successfully modeled individual physiological sensitivity to noise, demonstrating that while some users suffered cardiovascular spikes at 39 dB, others had much higher tolerances.

### Edge Computing Research (IEEE 2025)

A critical follow-up contribution advanced the paradigm of **edge-to-cloud** computation. We engineered mechanisms to execute analytical processing (via serverless functions) directly on the users' smartphones, without modifying the underlying cloud function code. This architectural shift:
- Enforces strict data privacy by processing sensitive audio locally on the device.
- Empowers citizens to independently audit, reproduce, and verify scientific findings natively on their phones.
- Validates that legacy cloud-native serverless functions can execute efficiently on resource-constrained mobile hardware.

This research and the platform's findings have been detailed in multiple publications, including **IEEE 2025**: *"Bringing Serverless Functions Closer To Citizen Science Mobile Applications"*.

### Technologies
`Kotlin` · `Android SDK` · `Fitbit API` · `Google Cloud Platform (GCP)` · `Firebase` · `BigQuery` · `Python` · `Serverless` · `Edge Computing`