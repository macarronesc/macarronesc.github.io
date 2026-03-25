# AGNS: Búsqueda Nativa en Grafos Adaptativa

**AGNS** (Adaptive Graph-Native Search) es un nuevo framework de GraphRAG diseñado para resolver el problema de los "costes prohibitivos" en los sistemas de recuperación basados en grafos. Mientras que los estándares de la industria, como Microsoft GraphRAG, dependen de costosos procesos de "Map-Reduce" o navegación agéntica guiada por LLMs, AGNS introduce un **sistema de navegación Zero-LLM** impulsado por algoritmos matemáticos.

El resultado es un sistema que mantiene una latencia constante ($O(1)$) y costes de sub-céntimo independientemente del tamaño del dataset, sin sacrificar la precisión en tareas de razonamiento multihilo (multi-hop).

> 📄 **Estado Académico:** Paper de investigación enviado a **EMNLP 2026**. Yo arquitecté el framework y soy el autor del 100% del código de la implementación.

### 🚀 El Salto en Rendimiento
Comparativa contra el SOTA (Estado del Arte) industrial actual (Microsoft GraphRAG DRIFT) utilizando un corpus de 1.280 documentos:

| Métrica | AGNS (Ours) | GraphRAG (DRIFT) | Mejora |
| :--- | :--- | :--- | :--- |
| **Coste Operativo** | **€0.01** | €25.28 | **Reducción del 99.9%** |
| **Latencia End-to-End** | **1.42s** | 142.04s | **100x más rápido** |
| **Consumo de Tokens** | **2,291** | 6,441,013 | **~2,800x más eficiente** |
| **Precisión (Stotal)** | **0.798** | 0.657 | **+21.4% superior** |

---

### 🧠 Contribuciones Arquitectónicas Clave

#### 1. Exploración de Grafos Paralela Zero-LLM
La innovación principal de AGNS es trasladar la "inteligencia" del recorrido del grafo del LLM al propio motor de grafos.
*   **Umbral Semántico Dinámico:** En lugar de un radio de búsqueda fijo, AGNS calcula una frontera de expansión basada en la "fuerza de la señal" semántica de la consulta del usuario.
*   **Filtrado de Hubs por Comunidad:** Una función de penalización personalizada ($P_{hub}$) identifica y evita "hubs genéricos" (como la palabra "Sistema") que causan deriva semántica, protegiendo a la vez los "hubs de tópico" vitales para el dominio local.

#### 2. Cadenas de Razonamiento Serializadas (Reasoning Chains)
Los sistemas RAG tradicionales saturan la ventana de contexto con fragmentos de texto inconexos. AGNS agrega los subgrafos recorridos y los serializa en **Cadenas de Razonamiento** (ej., `Entidad A —[predicado]—> Entidad B`).
*   **Densidad Lingüística:** Al proporcionar estructuras causales explícitas, reducimos la carga cognitiva en el mecanismo de atención del LLM.
*   **Compresión de Contexto:** AGNS supera a sus competidores usando solo ~2,000 tokens de contexto, mientras que otros requieren más de 100,000 tokens para alcanzar profundidades de razonamiento similares.

#### 3. Escalabilidad $O(1)$
Al desacoplar la recuperación del tamaño global del grafo, AGNS mantiene una curva de latencia casi plana. Mientras que la latencia de los sistemas tradicionales explotó de 8s a 162s ($O(N)$) al crecer el dataset, AGNS se mantuvo estable en ~1.4s.

---

### 🛠️ Stack Tecnológico
*   **Lógica:** Python, NetworkX (Algoritmos de Grafos).
*   **ML & Embeddings:** PyTorch, Sentence-Transformers.
*   **Base de Datos:** Neo4j (Indexación de Vectores + Grafos).
*   **Evaluación:** LLM-as-a-Judge (Gemini 2.5 Flash Lite), ROUGE-L, Similitud de Coseno.

### 📈 Impacto en Producción
AGNS se encuentra actualmente en producción, permitiendo consultas complejas en tiempo real sobre repositorios técnicos masivos donde el RAG basado en vectores fallaba y el GraphRAG agéntico era financieramente inviable.