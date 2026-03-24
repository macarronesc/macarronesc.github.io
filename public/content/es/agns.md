# Adaptive Graph-Native Search (AGNS)

**AGNS** es un novedoso framework de GraphRAG diseñado para replantear fundamentalmente cómo los sistemas de Retrieval-Augmented Generation interactúan con los grafos de conocimiento. Mientras que arquitecturas de última generación, como Microsoft GraphRAG y LightRAG, dependen en exceso de LLMs para cada etapa de la navegación del grafo, AGNS desacopla completamente el modelo de lenguaje del bucle de recorrido topológico, logrando niveles sin precedentes de eficiencia.

### El Problema

Los sistemas actuales de GraphRAG delegan la exploración del conocimiento de forma integral al LLM—solicitándole constantemente que determine el "siguiente salto". Este paradigma introduce cuellos de botella críticos:
- **Costes Insostenibles por Escalamiento**: La búsqueda global de Microsoft GraphRAG resume exhaustivamente cada red semántica, causando que los costes operativos escalen de forma lineal ($O(N)$) respecto al tamaño del corpus en lugar de la complejidad de la consulta.
- **Latencia Prohibitiva**: Cada salto en la navegación exige un ciclo completo de inferencia hacia la API del LLM, imposibilitando los sistemas en tiempo real.
- **Inversión Ineficiente de Tokens**: Las ventanas de contexto sufren de saturación por inyección de fragmentos dispersos en lugar de información estructurada altamente relevante.

### La Arquitectura de AGNS

Para superar estas severas limitaciones, diseñé un **sistema de navegación de grafos Zero-LLM** erigido sobre tres pilares fundamentales:

1. **Recorrido Algorítmico del Grafo**: AGNS rechaza la exploración puramente guiada por LLM, implementando en su lugar umbrales dinámicos y algoritmos de penalización de *hubs* (nodos superconectados). Utiliza métricas nativas de teoría de grafos y comparaciones de similitud semántica para ejecutar la navegación sin emitir una sola petición al LLM.

2. **Cadenas de Razonamiento Estructuradas**: El subgrafo finalmente recorrido se serializa en densas estructuras lógicas (por ej., *Entidad A → predicado → Entidad B*), exponiendo relaciones de causalidad claras. Esto minimiza enormemente la sobrecarga del mecanismo de atención del modelo y eleva drásticamente la densidad informativa por token contextualizado.

3. **Síntesis LLM de Inferencia Única (Single-Shot)**: Completada la exploración algorítmica profunda, AGNS efectúa exactamente una sola llamada al LLM para la síntesis final de la respuesta a partir de las cadenas causales. Así garantiza un coste rigurosamente constante ($O(1)$) por cada consulta emitida, con total independencia del tamaño escalado de los datos corporativos.

### Resultados (Comparado contra State-of-the-Art)

| Métrica | AGNS | Microsoft GraphRAG | Mejora Relativa |
|---------|------|-------------------|--------|
| **Coste medio por consulta** | €0.01 | €25.28 | **-99% de reducción** |
| **Latencia de recuperación** | ~1s | ~100s | **100x más rápido** |
| **Ventana de Contexto** | ~2,000 tokens | ~128,000 tokens | **64x más ligera** |
| **Precisión Multi-Hop** | SOTA | SOTA | Altamente Comparable |

### Tecnologías
`Python` · `Neo4j` · `PyTorch` · `Sentence Transformers` · `NetworkX`

> 📄 *Investigación académica actualmente en fase de redacción — orientada a un venue top-tier en áreas IR/NLP.*
