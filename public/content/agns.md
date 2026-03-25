# AGNS: Adaptive Graph-Native Search

**AGNS** is a next-generation GraphRAG framework designed to solve the "prohibitive cost" problem of current graph-based retrieval systems. While industry standards like Microsoft GraphRAG rely on expensive LLM-driven "Map-Reduce" summarization or agentic "graph-walking," AGNS introduces a **Zero-LLM navigation system** driven by mathematical algorithms.

The result is a system that maintains constant-time ($O(1)$) latency and sub-cent costs regardless of dataset size, without sacrificing multi-hop reasoning accuracy.

> 📄 **Academic Status:** Research paper currently submitted to **EMNLP 2026**. I architected the framework and authored 100% of the implementation code.

### 🚀 The Performance Breakthrough
Compared to the current Industrial SOTA (Microsoft GraphRAG DRIFT) on a 1,280-document corpus:

| Metric | AGNS (Ours) | GraphRAG (DRIFT) | Improvement |
| :--- | :--- | :--- | :--- |
| **Operational Cost** | **€0.01** | €25.28 | **99.9% Reduction** |
| **End-to-End Latency** | **1.42s** | 142.04s | **100x Faster** |
| **Token Footprint** | **2,291** | 6,441,013 | **~2,800x More Efficient** |
| **Accuracy (Stotal)** | **0.798** | 0.657 | **+21.4% Better** |

---

### 🧠 Core Architectural Contributions

#### 1. Zero-LLM Parallel Graph Exploration
The primary innovation of AGNS is moving the "intelligence" of graph traversal from the LLM to the graph engine itself.
*   **Dynamic Semantic Thresholding:** Instead of a fixed search radius, AGNS calculates an expansion frontier based on the semantic "signal strength" of the user's query.
*   **Community-Aware Hub Filtering:** A custom penalty function ($P_{hub}$) identifies and bypasses "generic hubs" (like the word "System") that cause semantic drift, while protecting "topic hubs" vital to the local domain.

#### 2. Serialized Reasoning Chains
Standard RAG systems saturate the context window with disjointed text chunks. AGNS aggregates traversed subgraphs and serializes them into **Reasoning Chains** (e.g., `Entity A —[predicate]—> Entity B`). 
*   **Linguistic Density:** By providing explicit causal structures, we reduce the cognitive load on the LLM's attention mechanism.
*   **Context Compression:** AGNS outperforms competitors using only ~2,000 tokens of context, whereas others require 100k+ tokens to reach similar reasoning depths.

#### 3. $O(1)$ Scalability
By decoupling retrieval from global graph size, AGNS maintains a near-constant latency curve. As the dataset grows from 40 to 1,280 documents, AGNS latency remained flat at ~1.4s, while traditional GraphRAG latency exploded from 8s to 162s ($O(N)$).

---

### 🛠️ Technical Stack
*   **Logic:** Python, NetworkX (Graph Algorithms)
*   **ML & Embeddings:** PyTorch, Sentence-Transformers
*   **Database:** Neo4j (Vector + Graph Indexing)
*   **Evaluation:** LLM-as-a-Judge (Gemini 2.5 Flash Lite), ROUGE-L, Cosine Similarity

### 📈 Production Impact
AGNS is currently in production, enabling real-time, multi-hop queries over massive technical repositories where traditional vector-based RAG failed and agentic GraphRAG was financially non-viable.