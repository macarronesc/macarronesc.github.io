# Código abierto — Cambios concretos, herramientas compartidas

**Mi papel:** Contribuidor · **Enfoque:** Backends cloud, compatibilidad, integraciones y fiabilidad

Contribuyo cambios que mejoran herramientas existentes: ampliar un backend, resolver una integración o corregir un problema de compatibilidad. Los enlaces muestran qué propuse y si se integró, sin confundir un fork con una contribución aceptada por el proyecto original.

*Estado comprobado en octubre de 2026. Las PR enlazadas son la referencia y pueden cambiar.*

## Trabajo integrado en los proyectos originales

| Proyecto | Mi aportación | Evidencia |
| :--- | :--- | :--- |
| **Lithops** | Distribución de tareas con Kubernetes/RabbitMQ, backend Singularity y correcciones de ejecución | [#1170](https://github.com/lithops-cloud/lithops/pull/1170), [#1375](https://github.com/lithops-cloud/lithops/pull/1375), [#1424](https://github.com/lithops-cloud/lithops/pull/1424) |
| **Lithops-HPC** | Cambios de soporte para la integración HPC | [#1](https://github.com/neardata-eu/lithops-hpc/pull/1) |
| **Dask CloudProvider** | Soporte IBM Cloud/Code Engine, disco local, registros de contenedores y comandos personalizados | [#434](https://github.com/dask/dask-cloudprovider/pull/434), [#440](https://github.com/dask/dask-cloudprovider/pull/440), [#450](https://github.com/dask/dask-cloudprovider/pull/450) |
| **Ollama** | Soporte de imágenes WebP en la aplicación de escritorio | [#12973](https://github.com/ollama/ollama/pull/12973) |
| **Gemini CLI** | Corrección del error `URL.parse` en versiones de Node.js anteriores a la 22 | [#13698](https://github.com/google-gemini/gemini-cli/pull/13698) |

### Conectar Dask con IBM Code Engine

Este trabajo añade una plataforma de contenedores serverless a las opciones de gestión de clústeres de Dask CloudProvider. Incluye configuración del backend, despliegue de scheduler/workers y mejoras posteriores para imágenes, comandos y almacenamiento local. Es un ejemplo de cómo integrar una herramienta Python consolidada con otro entorno de ejecución.

### Las correcciones pequeñas también importan

Admitir WebP en Ollama y resolver una incompatibilidad de Node.js en Gemini CLI permite que más personas utilicen los flujos existentes. Son cambios concretos que combinan la comprensión de una base de código consolidada con el proceso de revisión del proyecto original.

## Propuestas abiertas

| Proyecto | Cambio propuesto | Estado |
| :--- | :--- | :--- |
| **GitHub MCP Server** | Rechazar toolsets desconocidos cuando la validación estricta está activada — [#2184](https://github.com/github/github-mcp-server/pull/2184) | Abierta; no integrada |
| **Rechunker** | Añadir un ejecutor Lithops para transformar arrays fragmentados — [#152](https://github.com/pangeo-data/rechunker/pull/152) | Abierta; no integrada |

## Otras propuestas y experimentos

- **OpenClaw:** propuse correcciones de una [importación del SDK de plugins publicado](https://github.com/openclaw/openclaw/pull/40064) y de [avisos falsos de identificadores de plugin duplicados](https://github.com/openclaw/openclaw/pull/42192). Ambas PR están cerradas sin merge; son propuestas enviadas, no funcionalidades integradas.
- **MXFaaS:** mi [fork de investigación](https://github.com/macarronesc/mxfaas) incluye experimentos de ancho de banda y lanzamiento en ráfaga sobre el proyecto original de recursos compartidos. Esto no implica autoría del artículo original de ISCA 2023.

**Tecnologías utilizadas en estas aportaciones:** Python · Go · TypeScript · Kubernetes · RabbitMQ · Singularity · IBM Code Engine · Dask · MCP
