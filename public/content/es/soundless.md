# Soundless — Ciencia ciudadana para investigar ruido y sueño

**Mi papel:** Desarrollador principal · **Contexto:** Investigación con residentes de Tarragona

[Explorar la organización Soundless](https://github.com/Soundless-URV) · [Artículo IEEE ICDCSW 2025](https://doi.org/10.1109/ICDCSW63273.2025.00054)

Soundless conecta una aplicación móvil, datos de Fitbit y análisis cloud para estudiar **asociaciones entre ruido ambiental y sueño**. El software reúne mediciones acústicas y de wearables en una línea temporal que investigadores y participantes pueden inspeccionar.

Lideré el desarrollo de la aplicación Android, las integraciones, la ingesta y el flujo de análisis.

## Qué desarrollé

- **Recogida en Android:** aplicación Kotlin para registrar mediciones acústicas nocturnas y gestionar el flujo del participante.
- **Integración con wearables:** acceso a Fitbit para alinear las mediciones disponibles de sueño y frecuencia cardíaca con observaciones acústicas.
- **Pipeline cloud:** servicios Firebase/GCP para autenticación, ingesta, almacenamiento y procesamiento, con análisis en BigQuery/Python.
- **Análisis de eventos:** detección basada en Z-scores y comparación de ventanas temporales para explorar coincidencias entre ruido y mediciones fisiológicas.

El reto de ingeniería fue coordinar dispositivos y frecuencias de muestreo diferentes manteniendo un flujo útil fuera de un laboratorio controlado.

## Del análisis cloud a la ejecución controlada por el participante

La investigación posterior exploró ejecutar funciones serverless existentes directamente en smartphones. El objetivo era facilitar el acceso y la reproducibilidad: los participantes podían inspeccionar y ejecutar código en sus propios dispositivos en lugar de depender exclusivamente de resultados remotos.

Soy coautor de *Bringing Serverless Functions Closer To Citizen Science Mobile Applications*, **IEEE ICDCSW 2025**. La evaluación del prototipo mostró que, en la configuración estudiada, se podían ejecutar funciones cloud en smartphones sin modificar su código fuente.

## Interpretación responsable

Las correlaciones entre ruido y mediciones de wearables no demuestran por sí solas causalidad clínica. La calibración, las estimaciones del dispositivo, el contexto de los participantes y el diseño del estudio afectan a la interpretación. Es infraestructura de investigación, no un sistema diagnóstico.

**Stack:** Kotlin · Android · Fitbit API · Firebase · GCP · BigQuery · Python · Serverless · Edge computing
