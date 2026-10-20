# MedGround — Explorar documentos médicos con respuestas fundamentadas

**Mi papel:** Desarrollador · **Estado:** Prototipo público de IA aplicada

[Explorar el repositorio](https://github.com/macarronesc/MedGround)

MedGround permite consultar literatura médica, protocolos clínicos y guías. Combina recuperación documental, respuestas con citas y evaluación automática de calidad para facilitar la inspección de las fuentes y del comportamiento del modelo.

Desarrollé el flujo desde la ingesta hasta la respuesta, la API, la interfaz y las herramientas de evaluación.

## Del documento a una respuesta verificable

```text
PDF / texto → Extracción y fragmentación → Embeddings Gemini → ChromaDB
Pregunta → Recuperación / contexto completo → Respuesta con citas → Evaluación
```

- **Procesamiento documental:** fragmentación de PDF y texto conservando metadatos de archivo y página para las referencias.
- **Recuperación:** búsqueda vectorial y búsqueda híbrida opcional; el modo automático elige entre fragmentos recuperados y contexto completo según el número de tokens.
- **Generación:** separación estructurada de instrucciones, documentos, reglas estáticas y pregunta. El prompt solicita citas de las fuentes.
- **LLM-as-a-judge:** una petición de evaluación independiente puntúa fidelidad y relevancia y señala posibles problemas de fundamentación.
- **Observabilidad:** identificadores de traza y tiempos por fase visibles en la interfaz Streamlit y en los logs.

## Enfoque de ingeniería

El backend utiliza **FastAPI**, rutas protegidas mediante API key y una instancia local persistente de **ChromaDB**. El frontend en **Streamlit** muestra respuestas, referencias y evaluación, en lugar de presentar la salida del modelo como una conclusión sin contexto. Las pruebas cubren procesamiento documental, API y pipeline RAG.

## Alcance y limitaciones

Es un prototipo para investigación y exploración documental, **no una herramienta diagnóstica ni un sistema de apoyo clínico validado**. Las citas y las puntuaciones de otro modelo no garantizan la corrección médica. Las llamadas a Gemini envían contenido a un proveedor externo; una base vectorial local no convierte todo el flujo en offline ni lo hace adecuado para datos identificables de pacientes.

El constructor de contexto se inspira en MCP; no se presenta como una implementación completa de un servidor MCP.

**Stack:** Python · FastAPI · Streamlit · ChromaDB · Gemini · RAG · LLM-as-a-judge
