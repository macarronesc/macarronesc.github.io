# LiteRAG — Graph retrieval without LLM-guided navigation

**My role:** Framework architect & implementation author · **Status:** Research; paper submitted to EMNLP 2026

📄 [Read the paper: LiteRAG: Cost-Efficient Graph-Based Retrieval-Augmented Generation](https://arxiv.org/abs/2609.10239)

LiteRAG explores a practical question: **can graph-based retrieval support multi-hop questions without asking a language model to decide every traversal step?** I designed and implemented a framework that moves graph navigation into algorithms, aiming to reduce retrieval cost while preserving useful relationships in the context sent to an answer model.

“LLM-free” describes the **navigation stage**, not a claim that answer generation, graph construction or evaluation never uses language models.

## My technical contributions

- **Adaptive semantic expansion:** use query relevance to guide the exploration frontier instead of applying a fixed neighborhood size to every query.
- **Community-aware hub filtering:** penalize generic, highly connected hubs that can cause semantic drift while retaining connections useful to the domain.
- **Reasoning-chain serialization:** turn retrieved relationships into compact entity–relation chains rather than sending only disconnected text chunks.
- **Evaluation tooling:** compare cost, latency and answer-quality scores against graph-based baselines.

## Reported research results

The project summary reports the following comparison with **Microsoft GraphRAG DRIFT on a 1,280-document corpus**:

| Metric | LiteRAG | GraphRAG DRIFT |
| :--- | :--- | :--- |
| Reported operational cost | **€0.01** | €25.28 |
| End-to-end latency | **1.42s** | 142.04s |
| Evaluation score, S_total | **0.798** | 0.657 |

The evaluated range of 40–1,280 documents showed a near-flat latency curve for LiteRAG. This is **an observed result over that range**, not a proof of constant-time complexity at arbitrary graph sizes. The cost and score figures belong to the reported experimental setup; they should not be read as universal per-query pricing or accuracy guarantees.

## Why this work matters

Graph retrieval can surface relationships that a simple nearest-neighbor search misses, but LLM-guided exploration can make that context expensive. LiteRAG investigates a different division of responsibility: algorithms select the graph context, while a model can use that context to produce an answer.

**Academic status:** preprint available on arXiv; submitted to EMNLP 2026.

**Stack:** Python · NetworkX · Neo4j · PyTorch · Sentence-Transformers · LLM-based evaluation
