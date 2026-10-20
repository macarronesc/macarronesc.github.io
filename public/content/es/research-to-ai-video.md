# Research to AI Video — De NotebookLM a YouTube con revisión humana

**Mi papel:** Desarrollador · **Estado:** Proyecto público de integración en Python

[Explorar el repositorio](https://github.com/macarronesc/research-to-ai-video)

Este proyecto automatiza el trabajo repetitivo de API al publicar un vídeo de NotebookLM: Gemini propone título, descripción y etiquetas; se revisan localmente, se autoriza el canal de destino y se sube el vídeo mediante la API oficial de YouTube.

El objetivo es **automatizar manteniendo el control editorial explícito**, no generar y publicar vídeos sin supervisión.

## El flujo

1. Revisar las fuentes y crear/descargar el vídeo manualmente en NotebookLM.
2. Preparar un manifiesto con información de atribución y licencias.
3. Autorizar el envío del vídeo y las fuentes a Gemini para proponer metadatos, o prepararlos sin Gemini.
4. Revisar el borrador y elegir visibilidad y declaraciones de contenido.
5. Confirmar el canal de YouTube autorizado y la petición exacta antes de subirlo.
6. Recibir, opcionalmente, un aviso genérico por Telegram sin detalles del vídeo.

## Qué desarrollé

- CLI en Python para análisis, subidas revisadas y revocación OAuth.
- Acceso OAuth a YouTube, confirmación del canal y subidas reanudables.
- Valores prudentes: visibilidad privada, sin borrado automático de vídeos locales ni sobrescritura silenciosa de borradores.
- Validación de entradas, comprobaciones de credenciales, permisos restringidos de archivos y consentimiento explícito.
- Pruebas offline con proveedores simulados para validación, consentimiento y gestión de errores.

## Alcance y limitaciones

**La generación y descarga en NotebookLM son manuales.** La edición pública no automatiza su web, no utiliza APIs privadas de NotebookLM, no programa publicaciones ni verifica por sí sola los hechos o derechos de las fuentes. Atribuir una fuente no sustituye disponer de permiso; la retención cloud depende de las condiciones del proveedor.

Es una integración local para Linux, no un servicio alojado ni un proyecto afiliado a Google, YouTube o Telegram.

**Stack:** Python · Flujo NotebookLM · Gemini API · YouTube Data API · OAuth · Telegram
