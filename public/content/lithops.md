# Lithops — Parallel Python across cloud and HPC

**My role:** Open-source contributor · **Focus:** Compute backends, work queues and execution reliability

[Website](https://lithops-cloud.github.io/) · [Upstream repository](https://github.com/lithops-cloud/lithops) · [My fork](https://github.com/macarronesc/lithops) · [Lithops-HPC](https://github.com/neardata-eu/lithops-hpc)

Lithops is a community-developed framework for running parallel Python workloads across cloud, container and HPC environments. It provides familiar Python APIs while handling backend-specific execution and storage integration.

My work focuses on compute backends, task distribution and reliable integration with different execution environments.

## Kubernetes work queues

I contributed a **RabbitMQ-backed Kubernetes backend** that dispatches tasks to a pool of worker pods. This separates task distribution from creating a new pod for each invocation, reducing repeated scheduling work and making worker reuse practical.

- [Kubernetes/RabbitMQ backend — merged PR #1170](https://github.com/lithops-cloud/lithops/pull/1170)
- [Concurrent-execution fix — merged PR #1392](https://github.com/lithops-cloud/lithops/pull/1392)

## Bringing Lithops to HPC

I contributed the **Singularity backend** and worked on Lithops-HPC with Cloudlab/URV and Barcelona Supercomputing Center collaborators. Singularity containers and RabbitMQ work distribution enable parallel workloads on **MareNostrum 5**, integrated with the cluster's batch environment.

- [Singularity backend — merged PR #1375](https://github.com/lithops-cloud/lithops/pull/1375)
- [Lithops-HPC changes — merged PR #1](https://github.com/neardata-eu/lithops-hpc/pull/1)
- [First-execution fixes for Kubernetes and Singularity — merged PR #1424](https://github.com/lithops-cloud/lithops/pull/1424)

The research evaluates scalability, FLOPS and read/write bandwidth on MareNostrum 5. Results are workload- and environment-specific, not a claim that HPC always outperforms every commercial cloud setup.

**Publication:** *Enhancing HPC with Serverless Computing: Lithops on MareNostrum5*, IEEE ICNP 2024. [DOI: 10.1109/ICNP61940.2024.10858564](https://doi.org/10.1109/ICNP61940.2024.10858564).

## Related cloud infrastructure work

My broader platform work includes EC2 standalone execution and VM lifecycle configuration. In the Dask ecosystem, I authored the **IBM Cloud/Code Engine integration** and followed it with local-disk configuration, registry support and custom-command improvements.

- [Dask IBM Cloud backend — merged PR #434](https://github.com/dask/dask-cloudprovider/pull/434)
- [Disk configuration — merged PR #440](https://github.com/dask/dask-cloudprovider/pull/440)
- [Registry support and custom commands — merged PR #450](https://github.com/dask/dask-cloudprovider/pull/450)

**Stack:** Python · Kubernetes · RabbitMQ · Singularity · Slurm · AWS · IBM Code Engine · Dask
