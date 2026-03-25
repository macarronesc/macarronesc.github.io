# Soundless — Plataforma de Ciencia Ciudadana para Ruido y Salud

[![GitHub](https://img.shields.io/badge/GitHub-Repositorio-181717?logo=github)](https://github.com/Soundless-URV)

**Soundless** es una innovadora plataforma *open-source* de investigación en ciencia ciudadana diseñada para investigar el impacto fisiológico de la contaminación acústica urbana en la arquitectura del sueño y la salud cardiovascular. Desplegada operativamente en Tarragona, España, esta solución conecta una aplicación móvil Android personalizada con dispositivos *wearables* (Fitbit) para la recopilación continua, sincronización y análisis de telemetría de 50 residentes locales.

Como desarrollador principal y autor de todo el código del proyecto, diseñé y programé el ecosistema de software al completo: desde la aplicación móvil hasta el despliegue distribuido en la nube y el *pipeline* de análisis de datos.

### Contexto Científico y el Problema

La contaminación acústica es un riesgo para la salud gravemente subestimado. La Organización Mundial de la Salud (OMS) advierte que el ruido nocturno excesivo (por encima de 45 dB) se correlaciona directamente con la disrupción del sueño y el estrés cardiovascular. A pesar de esto, la obtención de datos granulares a nivel individual que correlacionen eventos acústicos específicos con respuestas fisiológicas en tiempo real seguía siendo escasa. Soundless se construyó para proporcionar evidencia científica irrefutable a las asociaciones vecinales afectadas.

### Arquitectura de la Plataforma

El sistema se apoya en una arquitectura cliente-servidor robusta y escalable, capaz de procesar miles de horas de grabaciones biométricas y acústicas continuas:

- **Aplicación Móvil (Kotlin/Android)**: Una aplicación nativa que opera continuamente durante las horas de sueño. Muestrea los decibelios del ambiente mediante el micrófono del dispositivo y se integra estrechamente con la **API de Fitbit** para extraer y sincronizar de forma asíncrona la frecuencia cardíaca, su variabilidad (HRV) y las fases del sueño (ligero, profundo, REM, despierto).
- **Backend en la Nube (Google Cloud Platform)**: Una infraestructura impulsada por Firebase para la autenticación segura y Google Cloud Storage para la ingesta masiva de datos de forma cifrada y totalmente anonimizada.
- **Pipeline de Análisis (BigQuery y Python)**: Procesos automatizados en la nube que filtran datos inválidos y agregan los archivos CSV multimodales. Implementé un **algoritmo de dispersión basado en Z-scores** para detectar anomalías, correlacionando picos acústicos repentinos con reacciones fisiológicas inmediatas en ventanas temporales de 10 a 40 segundos.

### Hallazgos Clave e Impacto Real

Tras analizar miles de horas de telemetría a lo largo de dos fases estacionales, la plataforma desveló realidades alarmantes:
- **Límites de la OMS Superados:** El límite legal de seguridad de 45 dB fue superado en el **98% de las noches registradas**, con trenes de mercancías provocando picos de hasta 80 dB.
- **Impacto en la Salud:** En promedio, el algoritmo detectó 12 incidentes de ruido distintos por noche y usuario. En **1 de cada 5 noches**, los usuarios sufrieron despertares abruptos (transicionando de sueño profundo/REM a estar completamente despiertos) desencadenados directamente por el ruido.
- **Modelado de Sensibilidad Personalizada:** La plataforma logró modelar la sensibilidad fisiológica individual al ruido, demostrando que mientras algunos usuarios sufrían alteraciones cardiovasculares a partir de 39 dB, otros presentaban tolerancias mucho mayores.

### Investigación en Edge Computing (IEEE 2025)

Como evolución del proyecto, mi aportación investigadora pivotó hacia la optimización topológica basada en el paradigma *Edge Computing*. Desarrollamos mecanismos para ejecutar el procesamiento analítico masivo (mediante funciones *serverless*) directamente en los smartphones de los usuarios, sin modificar el código fuente subyacente de la nube. Este cambio arquitectónico:
- Garantiza la máxima privacidad de los datos al procesar audio sensible localmente en el dispositivo.
- Empodera a los ciudadanos para auditar, reproducir y verificar de manera independiente los hallazgos científicos de forma nativa en sus teléfonos.
- Valida que las funciones *serverless* tradicionales de la nube pueden ejecutarse de manera eficiente en hardware móvil con recursos limitados.

Esta investigación y los hallazgos empíricos de la plataforma han sido detallados en múltiples publicaciones, incluyendo **IEEE 2025**: *"Bringing Serverless Functions Closer To Citizen Science Mobile Applications"*.

### Tecnologías Aplicadas
`Kotlin` · `Android SDK` · `Fitbit API` · `Google Cloud Platform (GCP)` · `Firebase` · `BigQuery` · `Python` · `Serverless` · `Edge Computing`