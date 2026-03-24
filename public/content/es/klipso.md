# Klipso — Plataforma de Clips Virales con IA

**Klipso** es una plataforma SaaS full-stack diseñada para transformar autónomamente vídeos de larga duración de YouTube en clips cortos (formato 9:16) con índices altísimos de retención para TikTok, Reels y Shorts. Los creadores de contenido solo introducen una URL y sus parámetros; Klipso orquesta de forma asíncrona un exhaustivo *pipeline* de inteligencia artificial—desde la transcripción acústica hasta el recorte automatizado (tracking) y renderización de subtítulos.

### Cómo Funciona

El flujo es íntegramente *end-to-end* y opera en GPUs bajo demanda en el cloud, abstrayendo por completo necesidades computacionales pesadas en los dispositivos de los usuarios consumibles:

1. **Ingesta y Transcripción Fonética**: Recupera asíncronamente en calidad 1080p con *yt-dlp*. La tecnología OpenAI Whisper elabora transcripciones precisas, ancladas meticulosamente a nivel de palabra con marcas de tiempo (timestamps).
2. **Identificación de Momentum de Viralización**: La redacción textual se inyecta en la API Google Gemini que evalúa heurísticas complejas de viralidad algorítmica identificando los bloques lógicos idóneos para la difusión social.
3. **Diarización Diálogos (Speaker Diarization)**: La red profunda de procesamiento acústico PyAnnote reconoce, cataloga e independiza de facto múltiples voces a lo largo de la duración de cada bloque procesado.
4. **Tracking Facial (Smart Crop)**: Empleando la arquitectura MediaPipe ejecuta procesamiento y telemetría facial continua; un esquema algorítmico determinista reenfoca y encuadra activamente las facciones hablantes para las normativas 9:16.
5. **Post-Procesamiento Global**: Herramientas integradas en FFmpeg escalan nativamente a 1080×1920 y se sobreponen los estilos y renderizaciones subtituladas, generando listos binarios aptos para producción de redes sociales en formatos ultra portables mp4.

### Arquitectura Serveless Distribuida

Klipso se erige sobre un enfoque nativo sin servidores y dividido en tres capas principales escalables:

- **Frontend Integrado**: Aplicación React 19 junto a Vite y Tailwind CSS desplegada sobre Vercel. Cuenta con acceso en portal de usuario, validaciones, conexión de pagos vía pasarelas de Stripe y portabilidad multinacional en 7 iteraciones de idioma de UI (i18n).
- **Control de Flujos Operativos (Backend)**: Funciones lógicas sobre Vercel en lenguaje Python coordinan las integraciones asíncronas de base de datos Firebase y la activación despachadora de las directrices hacia las granjas de cómputo en Kaggle y pasadores Webhook.
- **Procesamiento de Unidades GPU T4**: Inferencia tensorial instanciada y operada sobre GPUs en Kaggle; los artefactos consumibles y completados se alojan dinámicamente en *buckets* de clase S3 a través del sistema Cloudflare R2 sin cargas económicas de Egress/Data Transfer.

### Sistema Operativo de Transacciones Financieras y Monetización Bancaria

Acreditación introductoria orientada de 50 créditos bonificados de registro inicial. Posteriormente el gasto informático tasará la utilización computacional evaluada en bloques de fuente origen, a una tasación de 1 crédito por 15 minutos en origen, y adicionalmente de 1 crédito en clips computados de retorno para el creador. Optimizaciones HD de resample incurren primas calculadas. Aprovisionamiento seguro garantizado para devolución íntegra durante averías intermitentes y retornos de *callbacks*.

### Tracción e Impacto Cuantitativo

- **Sobrepasados 2.500 renders automáticos**, en funcionamiento
- **Presencia habitual recurrente de más de 50 agencias** y productores influyentes
- **Ingresos autogestionados de flujos con Stripe** (suscripciones *tier*, bonos independientes)

### Tecnologías Destacadas
`Python` · `React 19` · `Whisper` · `Gemini API` · `MediaPipe` · `PyAnnote` · `FFmpeg` · `Firebase` · `Stripe` · `Cloudflare R2` · `Kaggle GPU`
