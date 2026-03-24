# Technical Speaking & Conferences

Knowledge dissemination is a core pillar of my research methodology. I regularly present at premier international technical conferences, demystifying complex distributed systems and cloud architecture concepts into actionable, highly practical insights for the broader engineering community.

### PyConEs 2025 — Seville, Spain

**Talk**: *Multi-Cloud Serverless Parallel Programming in Python*

I presented Lithops as an architectural paradigm shift for developers navigating vendor lock-in, demonstrating how to execute highly parallel Python workloads across diverse cloud providers without adopting proprietary APIs. The session covered:

- The transparent deployment mechanics of standard Python subroutines to AWS Lambda, GCP Cloud Run, IBM Code Engine, and managed Kubernetes.
- A live technical demonstration of elastic scaling: provisioning 1,000 parallel processes from a cold start in under 100 milliseconds.
- High-throughput production use cases, specifically focusing on distributed Monte Carlo simulations and petabyte-scale ETL pipelines.
- The concrete advantages of true multi-cloud abstract portability—writing code once and executing it optimally anywhere.

The audience consisted of senior Python developers, data engineers, and academic researchers seeking to leverage cloud elasticity while mitigating severe DevOps overhead.

### EuroScipy 2025 — Poland

**Talk**: *Processing Cloud-Optimized Data in Python*

This session dissected a prominent bottleneck within high-performance scientific computing: the extreme latency and cost of accessing petabyte-scale research data parked in cloud object storage. I introduced and demonstrated **Dataplug**, a specialized library engineered to enable highly parallel, fine-grained access to unstructured scientific formats without the prohibitive compute costs of pre-processing legacy data into cloud-optimized formats.

Key architectural concepts explored:
- The mechanical benefits of Cloud-Optimized data formats (COG, ZARR, COPC) for highly parallel, distributed compute engines.
- How Dataplug enables dynamic, on-the-fly byte-range partitioning of legacy formats (LIDAR, FASTQGZIP, FASTA, VCF, imzML)—entirely avoiding costly I/O rewrites.
- Live, low-latency processing of massive geospatial and genomic datasets leveraging distributed Dask clusters empowered by Dataplug.
- Comprehensive cost-benefit benchmarking demonstrating a **65–71% reduction** in sheer pre-processing compute costs relative to traditional, legacy data-handling approaches.

This presentation was a featured key session within the *Computational Tools and Scientific Python Infrastructure* track.
