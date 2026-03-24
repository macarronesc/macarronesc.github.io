# Lithops — Computación Serverless Multi-Cloud y HPC

**Lithops** es un robusto framework *open-source* en Python diseñado para ejecutar cargas de trabajo masivamente paralelas a través de infraestructuras serverless, lográndolo todo abstractamente sin obligar al usuario a alterar su código original. Como uno de los contribuyentes principales del núcleo, jugué un papel fundamental en la expansión de su semántica de orquestación: llevándolo desde los proveedores cloud comerciales hasta entornos de Computación de Alto Rendimiento (HPC) e infraestructuras dinámicas dedicadas.

### El Paradigma Computacional

A pesar de que el Cloud ofrece una elasticidad inmensa, la complejidad operativa de gestionar contenedores, funciones serverless y almacenamiento de objetos supone una gran barrera para científicos de datos e investigadores. Lithops elimina esta fricción mediante una elegante interfaz Map-Reduce en Python:

```python
import lithops

def mi_funcion(x):
    return x ** 2

fexec = lithops.FunctionExecutor()
fexec.map(mi_funcion, range(1000))
resultados = fexec.get_result()
```

Este código se ejecuta de forma transparente en **AWS Lambda, GCP Cloud Run, IBM Code Engine, Azure Functions, Kubernetes**, o superordenadores locales—sin absolutamente nada de código repetitivo (boilerplate) específico del proveedor. Lithops se encarga del empaquetado, despliegue, autoescalado y agregación de resultados automáticamente.

### Mis Contribuciones Principales

#### Motor Serverless para HPC (MareNostrum 5 y BSC)
Los entornos HPC tradicionales dependen de sistemas de colas por lotes (batch) muy rígidos, lo que provoca un gran desperdicio de CPU y altas latencias. En colaboración con el **Barcelona Supercomputing Center (BSC)**, diseñé la arquitectura de un nuevo backend de computación para Lithops destinado al superordenador **MareNostrum 5**.
- Implementé un motor de ejecución personalizado utilizando contenedores **Singularity** (eludiendo las restricciones de privilegios root de Docker en HPC) combinado con una cola de trabajo de altísimo rendimiento en **RabbitMQ**.
- Habilitó, por primera vez, la semántica de ejecución serverless orientada a eventos directamente en los nodos de un superordenador.
- **Resultados:** En las pruebas de rendimiento, los FLOPS y el ancho de banda de I/O superaron significativamente a las plataformas cloud comerciales de primer nivel, eliminando por completo el desperdicio de CPU.
- *Publicado en **IEEE 2024**: "Enhancing HPC with Serverless Computing: Lithops on MareNostrum5".*

#### Arquitectura Kubernetes mediante Work-Queue
Diseñé e implementé un backend de Kubernetes altamente eficiente basado en un patrón de **cola de trabajo (Work-Queue)** impulsado por RabbitMQ. Reemplazando el modelo tradicional de "un pod por invocación", este sistema:
- Ingiere tareas en streaming y las despacha dinámicamente a un pool elástico y persistente de pods trabajadores (warm-start).
- Reduce radicalmente la carga del API server de K8s y el *overhead* de creación de pods, logrando una **mejora de hasta 7x en tiempos de arranque en frío (cold-starts)**.

#### Backend Dinámico "Standalone" para AWS EC2
Desarrollé desde cero un backend computacional completamente nuevo para **Amazon EC2**. Aunque Lithops se orientaba clásicamente a plataformas FaaS (como AWS Lambda), ciertas cargas analíticas requieren la potencia sostenida de Máquinas Virtuales dedicadas.
- Este backend "standalone" aprovisiona, escala y destruye instancias de AWS EC2 al vuelo.
- Soporta ciclos de vida avanzados (`Create`, `Reuse` y `Consume`), permitiendo al framework levantar una flota de instancias EC2, desplegar la carga vía SSH, ejecutar en procesos paralelos y desmantelar automáticamente la infraestructura para optimizar costes.

#### Integración con Dask CloudProvider
Fui el autor de un nuevo backend para el ecosistema **Dask CloudProvider**, integrando fluidamente los grafos analíticos distribuidos de Dask con la infraestructura serverless de IBM Cloud Code Engine. Esta solución demostró una velocidad de aprovisionamiento y una eficiencia de costes muy superiores en comparación con alternativas comerciales gestionadas como Coiled.

### Tecnologías Aplicadas
`Python` · `AWS EC2/Lambda` · `Kubernetes` · `Singularity` · `RabbitMQ` · `GCP Cloud Run` · `IBM Code Engine` · `Docker` · `Dask`
