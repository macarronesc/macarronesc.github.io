# Soundless — Citizen Science Noise & Health Platform

**Soundless** is an innovative citizen science research initiative I co-developed to investigate the physiological impact of urban noise pollution on sleep quality and cardiovascular health. Deployed in Tarragona, Spain, the platform bridges a custom mobile application with wearable IoT health devices to continuously harvest real-world telemetry from local residents.

### Research Context

Noise pollution is a severely underestimated environmental health hazard. The WHO estimates that excessive night noise directly correlates with sleep disruption, cardiovascular stress, and long-term health deterioration. Despite this, granular, individual-level data correlating specific noise events with real-time physiological responses remained scarce.

### The Platform Architecture

We architected a robust, multi-component data collection and analytical pipeline:

- **Mobile Application (Kotlin/Android)**: A native application distributed to volunteers that continuously samples and processes ambient decibel levels during sleep hours utilizing the device's microphone edge capabilities.
- **Wearable Integration**: Interfaced tightly with the Fitbit API to synchronously record heart rate, heart rate variability (HRV), and precise sleep stage transitions (light, deep, REM, awake).
- **Cloud Backend**: A scalable infrastructure powered by Firebase and Google Cloud, orchestrating secure user authentication, high-throughput data ingestion, aggregation logic, and comprehensive analysis pipelines.

### Key Findings

The study spanned two seasonal phases (winter and summer) and empirically demonstrated that:
- Audio events breaching specific thresholds consistently triggered measurable sleep architecture disruptions and acute heart rate spikes.
- Individual physiological sensitivity to noise exhibited significant variance—highlighting the necessity of personalized environmental impact models.
- Comparative analysis between noisy and baseline silent nights yielded statistically significant differences across multiple sleep quality metrics.

### Edge Computing Research

A critical follow-up contribution advanced the paradigm of **edge-to-cloud** computation. We engineered and validated mechanisms to execute analytical processing (via serverless functions) directly on the users' smartphones, without modifying the underlying cloud function code. This architectural shift:
- Enforces strict data privacy by processing sensitive audio locally on the device.
- Empowers citizens to independently audit, reproduce, and verify scientific findings.
- Validates that legacy cloud-native serverless functions can execute efficiently on resource-constrained mobile hardware with highly acceptable performance metrics.

This research was published at **IEEE 2025**: *"Bringing Serverless Functions Closer To Citizen Science Mobile Applications"*.

### Technologies
`Kotlin` · `Android SDK` · `Fitbit API` · `Firebase` · `Google Cloud` · `Python` · `Serverless Computing` · `Edge ML`
