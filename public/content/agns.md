# Adaptive Graph-Native Search (AGNS)

**AGNS** is a novel GraphRAG framework engineered to fundamentally rethink how Retrieval-Augmented Generation systems interact with knowledge graphs. While state-of-the-art systems like Microsoft GraphRAG and LightRAG rely heavily on LLMs for every step of graph navigation, AGNS completely decouples the language model from the traversal loop, delivering extreme efficiency.

### The Problem

Current GraphRAG systems delegate graph exploration entirely to the LLM—constantly prompting it to determine "where to go next." This paradigm introduces several critical bottlenecks:
- **Unsustainable Cost Scaling**: Microsoft GraphRAG's Global Search exhaustively summarizes every community, causing operational costs to scale linearly ($O(N)$) with corpus size rather than query complexity.
- **Prohibitive Latency**: Each navigation step requires a full LLM inference round-trip, rendering real-time responses virtually impossible.
- **Token Inefficiency**: Context windows are frequently saturated with disjointed text chunks rather than structured, semantically relevant information.

### The AGNS Architecture

To address these limitations, I designed a **zero-LLM graph navigation system** built upon three core pillars:

1. **Algorithmic Graph Traversal**: Instead of relying on LLM-driven exploration, AGNS employs dynamic thresholding algorithms and hub penalization. Semantic similarity computations and graph-theoretic metrics guide the traversal process without requiring a single LLM API call.

2. **Reasoning Chains**: The traversed subgraph is serialized into high-density logical structures (e.g., *Entity A → predicate → Entity B*), explicitly providing causal relationships. This significantly minimizes the cognitive load on the LLM's attention mechanism and maximizes the information density per token.

3. **Single-Shot LLM Synthesis**: Following the algorithmic exploration, AGNS executes exactly one LLM call—to synthesize the final answer from the assembled reasoning chains. This ensures the query cost remains constant ($O(1)$) regardless of the underlying corpus scale.

### Results (Benchmarked Against SOTA)

| Metric | AGNS | Microsoft GraphRAG | Improvement |
|--------|------|-------------------|-------------|
| **Cost per query** | €0.01 | €25.28 | **99% reduction** |
| **Retrieval latency** | ~1s | ~100s | **100x faster** |
| **Context window** | ~2,000 tokens | ~128,000 tokens | **64x smaller** |
| **Multi-hop accuracy** | SOTA | SOTA | Comparable |

### Technologies
`Python` · `Neo4j` · `PyTorch` · `Sentence Transformers` · `NetworkX`

> 📄 *Research paper currently in progress — targeting a top-tier IR/NLP venue.*