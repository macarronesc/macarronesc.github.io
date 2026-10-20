# LiteRAG — Recuperación en grafos sin navegación guiada por LLMs

**Mi papel:** Diseño del framework y autor de la implementación · **Estado:** Investigación; artículo enviado a EMNLP 2026

📄 [Leer el artículo: LiteRAG: Cost-Efficient Graph-Based Retrieval-Augmented Generation](https://arxiv.org/abs/2609.10239)

LiteRAG explora una pregunta práctica: **¿puede la recuperación basada en grafos responder a consultas multi-hop sin pedir a un modelo que decida cada paso del recorrido?** Diseñé e implementé un framework que traslada la navegación a algoritmos para reducir el coste de recuperación y conservar relaciones útiles en el contexto enviado al modelo de respuesta.

«Sin LLM» se refiere a la **fase de navegación**, no significa que la generación de respuestas, la construcción del grafo o la evaluación nunca utilicen modelos.

## Mis aportaciones técnicas

- **Expansión semántica adaptativa:** guiar el recorrido por relevancia respecto a la consulta, en lugar de aplicar siempre un vecindario de tamaño fijo.
- **Filtrado de hubs por comunidad:** penalizar nodos genéricos muy conectados que provocan deriva semántica, manteniendo conexiones útiles del dominio.
- **Serialización de cadenas de relaciones:** representar el contexto como cadenas entidad–relación, no solo como fragmentos de texto desconectados.
- **Herramientas de evaluación:** comparar coste, latencia y calidad de respuesta con otros sistemas basados en grafos.

## Resultados de investigación reportados

El resumen del proyecto recoge esta comparación con **Microsoft GraphRAG DRIFT sobre un corpus de 1.280 documentos**:

| Métrica | LiteRAG | GraphRAG DRIFT |
| :--- | :--- | :--- |
| Coste operativo reportado | **0,01 €** | 25,28 € |
| Latencia de extremo a extremo | **1,42s** | 142,04s |
| Puntuación de evaluación, S_total | **0,798** | 0,657 |

En el intervalo evaluado de 40–1.280 documentos, LiteRAG mostró una curva de latencia casi plana. Es **un resultado observado en ese intervalo**, no una demostración de complejidad constante para grafos arbitrarios. Los costes y las puntuaciones pertenecen a esa configuración experimental; no representan precios universales por consulta ni garantías de precisión.

## Por qué es relevante

La recuperación en grafos permite encontrar relaciones que una búsqueda por similitud puede omitir, pero la exploración guiada por LLMs encarece ese contexto. LiteRAG investiga otra distribución de tareas: los algoritmos seleccionan el contexto del grafo y un modelo puede utilizarlo para generar la respuesta.

**Estado académico:** preprint disponible en arXiv; enviado a EMNLP 2026.

**Stack:** Python · NetworkX · Neo4j · PyTorch · Sentence-Transformers · Evaluación mediante LLM
