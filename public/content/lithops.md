# Lithops — Multi-Cloud Serverless Computing

**Lithops** is an open-source Python framework designed to transparently execute scale-out workloads across thousands of parallel cloud functions—without modifying a single line of the user's logic. As a core contributor, I played a pivotal role in expanding its orchestration semantics from commercial cloud providers to High-Performance Computing (HPC) environments and dynamic standalone infrastructures.

### The Serverless Paradigm

While cloud platforms offer massive elasticity, the operational complexity of orchestrating containers, serverless functions, and object storage creates a steep barrier for data scientists and researchers. Lithops abstracts this friction entirely through a simple, Pythonic Map-Reduce API:

```python
import lithops

def my_function(x):
    return x ** 2

fexec = lithops.FunctionExecutor()
fexec.map(my_function, range(1000))
results = fexec.get_result()
```

This code executes transparently on **AWS Lambda, GCP Cloud Run, IBM Code Engine, Azure Functions, Kubernetes**, or even on-premise supercomputers—with absolutely zero provider-specific boilerplate. Lithops autonomously handles the underlying packaging, deployment, auto-scaling, and result aggregation.

### My Core Contributions

#### HPC Serverless Engine (MareNostrum 5 & BSC)
Traditional HPC environments rely on rigid batch-queuing systems that lead to significant CPU wastage and slow time-to-insight. In collaboration with the **Barcelona Supercomputing Center (BSC)**, I architected a novel HPC compute backend for Lithops targeting the **MareNostrum 5** supercomputer. 
- Designed a custom execution engine utilizing **Singularity** containers (to bypass Docker root-privilege restrictions in HPC) coupled with a high-throughput **RabbitMQ work-queue**.
- Unlocked event-driven, serverless execution semantics directly on supercomputer nodes.
- **Results:** Achieved benchmarks where FLOPS and read-write bandwidth significantly outperformed top-tier commercial cloud platforms while eliminating CPU wastage entirely. 
- *Published at **IEEE 2024**: "Enhancing HPC with Serverless Computing: Lithops on MareNostrum5".*

#### Kubernetes Work-Queue Architecture
I designed and implemented a highly efficient Kubernetes compute backend based on a **work-queue pattern** (powered by RabbitMQ). Replacing the legacy one-pod-per-invocation model, this optimized system:
- Ingests streaming tasks and dynamically dispatches them to a persistent, elastic pool of worker pods.
- Radically reduces API server load and pod creation overhead, delivering up to a **7x improvement in cold-start performance**.

#### Dynamic AWS EC2 Standalone Backend
I engineered a completely new, custom compute backend for **Amazon EC2** from scratch. While Lithops traditionally targets FaaS platforms (like AWS Lambda), some workloads require the sustained power of dedicated VMs. 
- This standalone backend dynamically provisions, scales, and dismantles AWS EC2 Virtual Machines on the fly.
- Supports advanced lifecycle modes (`Create`, `Reuse`, and `Consume`), allowing the framework to spin up a fleet of EC2 instances, deploy the workload via SSH, execute it in parallel processes, and automatically tear down the infrastructure to optimize costs.

#### Dask CloudProvider Integration
I authored a new compute backend for the **Dask CloudProvider** ecosystem, seamlessly integrating Dask's distributed analytical graphs with IBM Cloud Code Engine's self-managed Kubernetes infrastructure. This solution demonstrated superior provisioning speed and cost efficiency compared to commercial managed alternatives like Coiled.

### Technologies
`Python` · `AWS EC2/Lambda` · `Kubernetes` · `Singularity` · `RabbitMQ` · `GCP Cloud Run` · `IBM Code Engine` · `Docker` · `Dask`
```