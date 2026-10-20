# Lithops — Python paralelo entre cloud y HPC

**Mi papel:** Contribuidor open source · **Enfoque:** Backends de cómputo, colas de trabajo y fiabilidad de ejecución

[Sitio web](https://lithops-cloud.github.io/) · [Repositorio original](https://github.com/lithops-cloud/lithops) · [Mi fork](https://github.com/macarronesc/lithops) · [Lithops-HPC](https://github.com/neardata-eu/lithops-hpc)

Lithops es un framework comunitario para ejecutar cargas paralelas de Python en entornos cloud, contenedores y HPC. Ofrece APIs familiares de Python y gestiona las particularidades de ejecución y almacenamiento de cada backend.

Mi trabajo se centra en los backends de cómputo, la distribución de tareas y la integración fiable con distintos entornos de ejecución.

## Colas de trabajo en Kubernetes

Contribuí un **backend de Kubernetes basado en RabbitMQ** que reparte tareas entre un conjunto de pods trabajadores. Separar la distribución de tareas de la creación de pods por invocación reduce trabajo de planificación repetido y permite reutilizar workers.

- [Backend Kubernetes/RabbitMQ — PR #1170 integrada](https://github.com/lithops-cloud/lithops/pull/1170)
- [Corrección de ejecuciones concurrentes — PR #1392 integrada](https://github.com/lithops-cloud/lithops/pull/1392)

## Llevar Lithops a HPC

Contribuí el **backend de Singularity** y trabajé en Lithops-HPC junto a colaboradores de Cloudlab/URV y Barcelona Supercomputing Center. Los contenedores Singularity y RabbitMQ permiten distribuir cargas paralelas en **MareNostrum 5**, integrándose con el entorno batch del clúster.

- [Backend Singularity — PR #1375 integrada](https://github.com/lithops-cloud/lithops/pull/1375)
- [Cambios en Lithops-HPC — PR #1 integrada](https://github.com/neardata-eu/lithops-hpc/pull/1)
- [Correcciones del primer arranque en Kubernetes y Singularity — PR #1424 integrada](https://github.com/lithops-cloud/lithops/pull/1424)

La investigación evalúa escalabilidad, FLOPS y ancho de banda de lectura/escritura en MareNostrum 5. Los resultados dependen de la carga y del entorno; no implican que HPC supere siempre a cualquier configuración cloud comercial.

**Publicación:** *Enhancing HPC with Serverless Computing: Lithops on MareNostrum5*, IEEE ICNP 2024. [DOI: 10.1109/ICNP61940.2024.10858564](https://doi.org/10.1109/ICNP61940.2024.10858564).

## Trabajo relacionado en infraestructura cloud

Mi trabajo más amplio en plataformas incluye ejecución standalone sobre EC2 y configuración del ciclo de vida de máquinas virtuales. En Dask, desarrollé la **integración con IBM Cloud/Code Engine** y añadí configuración de disco local, registros de contenedores y comandos personalizados.

- [Backend IBM Cloud de Dask — PR #434 integrada](https://github.com/dask/dask-cloudprovider/pull/434)
- [Configuración de disco — PR #440 integrada](https://github.com/dask/dask-cloudprovider/pull/440)
- [Registros y comandos personalizados — PR #450 integrada](https://github.com/dask/dask-cloudprovider/pull/450)

**Stack:** Python · Kubernetes · RabbitMQ · Singularity · Slurm · AWS · IBM Code Engine · Dask
