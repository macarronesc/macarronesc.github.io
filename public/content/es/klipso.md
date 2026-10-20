# Klipso — Creación de vídeos cortos con IA

**Mi papel:** Creador y desarrollador full-stack · **Estado:** Producto personal en desarrollo activo

[Explorar Klipso](https://klipso.dev)

Klipso transforma vídeos largos de YouTube en clips con subtítulos y reencuadre según el hablante para **TikTok, Instagram Reels y YouTube Shorts**. Reúne selección de momentos, encuadre, renderizado y entrega para reducir el trabajo de edición manual.

Desarrollé el producto completo y continúo mejorando su pipeline de IA, fiabilidad, eficiencia y experiencia de usuario.

## Hitos del producto

| Usuarios | Clips generados | Vídeo generado |
| :--- | :--- | :--- |
| **100+** | **1.000+** | **Más de 14 horas** |

*Hitos comunicados por el creador en octubre de 2026. Los usuarios no equivalen a suscriptores de pago; las horas corresponden a vídeo generado, no al material de origen procesado.*

## Cómo funciona

```text
Vídeo → Subtítulos / Whisper → Selección de momentos con Gemini
      → Diarización + seguimiento facial
      → Renderizado FFmpeg en una pasada → Cloudflare R2 → Panel del creador
```

- **Transcripción y selección:** reutilización de subtítulos disponibles y Whisper como alternativa. Gemini propone fragmentos destacados a partir de la transcripción.
- **Encuadre según el hablante:** combinación de diarización con PyAnnote y detección facial con MediaPipe para planificar el recorte vertical.
- **Renderizado:** recorte, reescalado opcional, subtítulos y cierre de marca en un único grafo de filtros y una pasada de codificación con FFmpeg. Los subtítulos se dibujan a la resolución final.
- **Entrega:** subida a Cloudflare R2, previsualizaciones y enlaces de descarga firmados desde el panel.

## Qué desarrollé

**Producto y frontend.** Interfaz React/TypeScript, autenticación, envío de vídeos, historial, previsualización, descargas y soporte para siete idiomas. Los trabajos se recuperan al refrescar la página y el progreso refleja estados reales del backend, no porcentajes ficticios.

**Procesamiento e infraestructura.** API serverless en Python sobre Vercel, coordinación de trabajos con Firebase y workers asíncronos con GPU NVIDIA T4 en Kaggle. El diseño separa envío, planificación, procesamiento, entrega y actualización del estado final.

**Créditos y facturación.** Transacciones de Firebase para reservar créditos al enviar un trabajo, liquidarlos tras una entrega correcta y reembolsarlos en las rutas de error. La integración con Stripe permite pagos y suscripciones; la idempotencia protege frente a webhooks repetidos.

**Operación y medición.** Verificación de sesiones, reconciliación periódica, reintentos de webhooks, pruebas de regresión y eventos del embudo en frontend y backend. Los fallos de analítica no determinan el estado de los trabajos ni de los créditos.

## Mejoras de ingeniería medidas

La optimización de octubre de 2026 se centró en eliminar cómputo repetido y mejorar la recuperación ante fallos.

| Área | Antes → después | Utilidad |
| :--- | :--- | :--- |
| Pasadas de codificación por clip vertical | **4 → 1** | Menos trabajo repetido y menos etapas de recodificación |
| Instalación de dependencias del worker | **188,8s → 25,1s** | Evita reinstalar el conjunto PyTorch/CUDA de la imagen GPU |
| Posprocesado de tres clips | **264,2s → 102,6s** | El grafo unificado reduce el tiempo de renderizado |
| Tiempo del worker hasta el webhook final | **548,4s → 276,6s** | Aproximadamente 2× más rápido en la comparación con subtítulos disponibles |
| Tiempo del worker usando Whisper | **548,4s → 347,6s** | Aproximadamente 1,6× más rápido en la ejecución documentada |
| Reconciliación de la cola | **Comprobaciones cada 60 segundos** | Detecta diferencias con el estado real y recupera recursos |

**Alcance de la medición:** comparación del mismo vídeo y opciones —tres clips verticales, reescalado, subtítulos y cierre para usuarios gratuitos— con dos ejecuciones posteriores en producción. La instalación se midió por separado en un entorno T4. Son comparaciones de ingeniería documentadas, no medianas de toda la plataforma ni tiempos de espera garantizados. La cola y la planificación añaden espera; cada tipo de fallo tiene su propio periodo de gracia.

El bitrate pasó de unos 2 a 8 Mbps y los subtítulos se renderizan a 1080×1920. Es un cambio de bitrate y renderizado, no una puntuación medida de «calidad 4×», y aumenta el almacenamiento por segundo de clip.

## Mejorar la experiencia alrededor de la IA

- Conservar el enlace pegado durante el registro y el inicio de sesión.
- Recuperar el seguimiento de un trabajo al refrescar la página.
- Actualizar la verificación del correo sin recargar la aplicación.
- Incorporar diálogos accesibles por teclado, navegación móvil y errores localizados.
- Medir el recorrido desde el registro hasta la entrega, sin atribuir mejoras de engagement que la muestra disponible no permite demostrar.

**Stack:** React · TypeScript · Python · Vercel · Kaggle/T4 · Whisper · Gemini · PyAnnote · MediaPipe · FFmpeg · Firebase · Cloudflare R2 · Stripe · PostHog
