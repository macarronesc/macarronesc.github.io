# Lithops — Multi-Cloud Serverless Computing

**Lithops** is an open-source Python framework designed to transparently execute scale-out workloads across thousands of parallel cloud functions—without modifying a single line of the user's logic. As a core contributor, I played a pivotal role in expanding its orchestration semantics from commercial cloud providers to HPC (High-Performance Computing) and Kubernetes environments.

### The Lithops Paradigm

While cloud platforms offer massive elasticity, the operational complexity of orchestrating containers, serverless functions, and object storage creates a steep barrier for data scientists and researchers. Lithops abstracts this friction entirely through a simple, Pythonic Map-Reduce API:

```python
import lithops

def my_function(x):
    return x ** 2

fexec = lithops.FunctionExecutor()
fexec.map(my_function, range(1000))
results = fexec.get_result()
```

This code executes transparently on **AWS Lambda, GCP Cloud Run, IBM Code Engine, Azure Functions, Kubernetes**, or even on-premise supercomputers—with absolutely zero provider-specific boilerplate. Lithops handles the underlying packaging, deployment, auto-scaling, and result aggregation.

### My Contributions

#### Kubernetes Backend (Work Queue Architecture)
I designed and implemented a highly efficient Kubernetes compute backend based on a **work queue pattern**. Replacing the legacy one-pod-per-invocation model, this optimized system:
- Ingests streaming tasks and dynamically dispatches them to a persistent pool of worker pods.
- Elastically scales the worker pool based on real-time metric demands.
- Reduces pod creation overhead by 10x, dramatically accelerating cold-start performance and resource utilization.

#### HPC Integration — MareNostrum 5
My most significant research contribution involved engineering Lithops' deployment architecture on the **MareNostrum 5 supercomputer** at the Barcelona Supercomputing Center (BSC). This integration:
- Unlocked event-driven, serverless execution semantics directly on HPC nodes.
- Eliminated legacy CPU wastage inherent to traditional batch-system queuing.
- Achieved benchmarks where FLOPS and I/O bandwidth significantly exceeded top-tier commercial cloud providers.

This research was published at **IEEE 2024**: *"Enhancing HPC with Serverless Computing: Lithops on MareNostrum5"*.

#### Dask CloudProvider Integration
I authored a new compute backend for the **Dask CloudProvider** ecosystem, seamlessly integrating Dask's distributed analytical graphs with IBM Cloud Code Engine's self-managed Kubernetes infrastructure. This solution demonstrated superior provisioning speed and cost efficiency compared to commercial alternatives like Coiled.

### Technologies
`Python` · `Kubernetes` · `AWS Lambda` · `GCP Cloud Run` · `IBM Code Engine` · `Docker` · `Dask`
