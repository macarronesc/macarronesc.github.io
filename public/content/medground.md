# MedGround — Explore medical documents with grounded answers

**My role:** Developer · **Status:** Public applied-AI prototype

[Explore the repository](https://github.com/macarronesc/MedGround)

MedGround helps researchers ask questions about medical literature, clinical protocols and guidelines. It combines document retrieval with cited answers and an automated quality-evaluation step, making the source context and model behavior easier to inspect.

I developed the document-to-answer workflow, API, interface and evaluation tooling.

## From documents to an inspectable answer

```text
PDF / text → Extraction + chunking → Gemini embeddings → ChromaDB
Question → Retrieval / full context → Gemini answer + citations → Evaluation
```

- **Document processing:** split PDF and text content while preserving filename and page metadata for references.
- **Retrieval:** vector search and optional hybrid retrieval; an automatic mode can choose between retrieved chunks and full-document context based on token count.
- **Answer generation:** structured context separates instructions, reference material, static guidance and the user's question. Answers are prompted to cite their sources.
- **LLM-as-a-judge:** a separate evaluation request scores faithfulness and relevance and reports potential grounding issues.
- **Observability:** trace IDs and timings expose retrieval, generation and evaluation stages in the Streamlit interface and logs.

## Engineering focus

The backend uses **FastAPI**, API-key-protected routes and a local persistent **ChromaDB** store. The **Streamlit** frontend surfaces answers, references and evaluation details rather than presenting model output as an unexplained conclusion. Tests exercise document processing, API behavior and the RAG pipeline.

## Scope and limitations

This is a research/document-exploration prototype, **not a diagnostic tool or a clinically validated decision-support system**. Citations and model-generated scores do not guarantee medical correctness. Gemini API calls send content to an external provider; a local vector store does not make the whole workflow offline or suitable for identifiable patient data.

The structured context builder is MCP-inspired; it is not presented as a complete MCP server implementation.

**Stack:** Python · FastAPI · Streamlit · ChromaDB · Gemini · Retrieval-augmented generation · LLM-as-a-judge
