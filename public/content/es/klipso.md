# Klipso — Plataforma de Clips Virales con IA

[![En Producción](https://img.shields.io/badge/Live-klipso.vercel.app-000000?style=for-the-badge&logo=vercel)](https://klipso.vercel.app/)

**Klipso** es una plataforma SaaS *full-stack* de nivel de producción que arquitecté y desarrollé íntegramente de forma independiente. El sistema transforma de manera autónoma vídeos de larga duración de YouTube en clips verticales (9:16) de alta retención, optimizados para TikTok, Reels y Shorts.

Mediante la orquestación de un complejo pipeline de IA multimodal en la nube, Klipso abstrae horas de edición manual, permitiendo a los creadores de contenido generar activos virales con un solo clic.

### El Pipeline de IA Multimodal

El núcleo de Klipso es un motor de inferencia distribuido que fusiona procesamiento de audio, comprensión del lenguaje natural (NLP) y visión computacional para replicar las decisiones de un editor humano:

1.  **Ingesta Robusta:** Capa de extracción personalizada basada en `yt-dlp` con rotación avanzada de proxies y enmascaramiento de IP para obtener flujos de origen en 1080p de forma fiable, evitando protecciones dinámicas de bots.
2.  **Análisis Acústico y Semántico:** El audio se procesa mediante **OpenAI Whisper** para obtener una transcripción con marcas de tiempo a nivel de palabra. El resultado se inyecta en **Google Gemini**, que actúa como un motor de razonamiento narrativo para identificar cambios emocionales, remates y "hooks" de alta retención.
3.  **Tracking Facial con Identificación de Hablante:** La plataforma resuelve el encuadre dinámico fusionando dos modalidades de IA. **PyAnnote Audio** realiza la diarización de hablantes (quién habla y cuándo), mientras que **MediaPipe** ejecuta la detección facial espacial. Un algoritmo determinista propio mapea la firma de audio del hablante activo con su respectivo cuadro delimitador visual.
4.  **Renderizado Cinemático:** En lugar de cortes estáticos, el pipeline calcula movimientos de cámara suaves mediante interpolación matemática. **FFmpeg** ejecuta el renderizado final acelerado por hardware, aplicando el recorte dinámico, reescalando a 1080×1920 mediante filtros Lanczos e integrando subtítulos estilizados.

### Arquitectura Cloud-Native

Para soportar cargas de trabajo intensivas en GPU y garantizar una experiencia de usuario fluida, diseñé una arquitectura *serverless* orientada a eventos y altamente escalable:

*   **Frontend (React 19 & Vite):** Una SPA moderna y responsiva que utiliza Tailwind CSS y Framer Motion. Incluye un panel de control completo, consulta de estado de trabajos en tiempo real e internacionalización (i18n) en 7 idiomas.
*   **API Serverless (Vercel):** Funciones en Python que gestionan el enrutamiento de la API, autenticación segura JWT vía Firebase y procesamiento asíncrono de webhooks.
*   **Cola de Trabajos Distribuida:** Firebase Realtime Database actúa como el sistema nervioso central, gestionando el bloqueo atómico de tareas, el encolamiento distribuido y la sincronización de estado en tiempo real entre el frontend y los workers de GPU.
*   **Cluster de Cómputo GPU:** Las tareas pesadas de inferencia de IA se despachan de forma asíncrona a una flota de GPUs en la nube (NVIDIA T4), garantizando un alto rendimiento y entornos de ejecución aislados.
*   **Almacenamiento en el Edge:** Los activos procesados se transmiten directamente a **Cloudflare R2** (compatible con S3), aprovechando la ausencia de tasas de salida de datos (*zero-egress*) y proporcionando a los usuarios URLs de descarga prefirmadas de baja latencia.

### Ingeniería de Software y Monetización

Más allá de la IA, implementé una lógica de negocio robusta para manejar tráfico real:
*   **Sistema de Créditos Atómico:** Economía basada en créditos con transacciones atómicas de Firebase. Los créditos se reservan al enviar el trabajo y solo se deducen tras un renderizado exitoso, garantizando que el usuario nunca pierda créditos por fallos de infraestructura.
*   **Webhooks de Pago Idempotentes:** Integración total con **Stripe** para paquetes de un solo uso y suscripciones mensuales. El backend emplea claves de idempotencia estrictas para procesar los webhooks de Stripe, evitando condiciones de carrera o duplicidad de créditos.
*   **Tolerancia a Fallos:** Sistema de limpieza automática de colas que detecta trabajos bloqueados, libera *deadlocks* y notifica al equipo de soporte mediante correos integrados de Brevo con logs de ejecución sanitizados.

### Tracción en el Mundo Real

Klipso no es solo una prueba de concepto; es un negocio operativo utilizado activamente por creadores y agencias de marketing:
*   **+2.500 clips** virales generados con éxito en producción.
*   **+50 usuarios** activos y recurrentes.
*   Generando ingresos automatizados a través de suscripciones procesadas por Stripe.

### Tecnologías
`React 19` · `TypeScript` · `Python` · `Serverless` · `OpenAI Whisper` · `Gemini API` · `MediaPipe` · `PyAnnote` · `FFmpeg` · `Firebase` · `Stripe` · `Cloudflare R2`