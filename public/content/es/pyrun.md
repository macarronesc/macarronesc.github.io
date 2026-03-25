# PyRun Cloud — Plataforma Serverless Asistida por IA

**PyRun Cloud** es una plataforma integral PaaS (Platform as a Service) full-stack que diseñé y desarrollé desde cero para eliminar la fricción operativa entre los investigadores y la infraestructura cloud. Proporciona un IDE web intuitivo equipado con IA Agéntica, permitiendo a los usuarios escribir código, compilar entornos automáticamente y desplegar cargas de trabajo distribuidas en AWS e IBM Cloud—todo sin tocar una terminal ni aprovisionar servidores manualmente.

### El Problema

Nuestro grupo de investigación en la URV desarrolla frameworks computacionales muy potentes: **Lithops** para computación paralela serverless, **Dask** para analítica escalable, y **Dataplug** para acceso a datos optimizados. Sin embargo, utilizar estas herramientas requiere una profunda experiencia en DevOps: configurar credenciales IAM, aprovisionar clústeres, gestionar árboles de dependencias y orquestar contenedores. Esta curva de aprendizaje creaba un muro operativo para los científicos de dominio (biólogos, físicos, analistas) que más necesitaban estas herramientas.

### La Solución: PyRun

PyRun abstrae por completo la capa de infraestructura cloud. A través de una interfaz web simplificada, los usuarios simplemente:
1. **Desarrollan**: Escriben o suben código en un entorno virtual de alto rendimiento similar a VS Code.
2. **Definen**: Especifican dependencias mediante un `environment.yml` o un `Dockerfile` estándar.
3. **Despliegan**: Lanzan la ejecución con un solo clic. PyRun compila el entorno de forma autónoma, inyecta credenciales de forma segura y orquesta la ejecución distribuida a través de miles de núcleos.
4. **Observan**: Monitorizan la telemetría a través de dashboards en tiempo real que detallan el uso de CPU, memoria, I/O de red y cronogramas de ejecución de tareas (diagramas de Gantt).

### Mis Contribuciones Arquitectónicas

Lideré el desarrollo *end-to-end* de la plataforma, diseñando una arquitectura altamente escalable y orientada a eventos:

* **Integración de IA Agéntica y MCP**: Desarrollé un entorno de IA donde los agentes **GitHub Copilot** y **OpenCode** están preconfigurados mediante servidores MCP (Model Context Protocol). La IA tiene visibilidad instantánea y segura de la cuenta AWS del usuario, permitiendo operaciones cloud en lenguaje natural (ej. *"Despliega esta función en Lambda y guarda los resultados en mi bucket S3"*).
* **Runtimes CI/CD Automatizados**: Diseñé un gestor de entornos utilizando AWS CodeBuild y CodePipeline. Detecta cambios en los archivos de dependencias del usuario y compila automáticamente imágenes Docker o entornos Conda efímeros y listos para ejecutar.
* **Data Cockpit**: Desarrollé una herramienta interactiva de ingesta de datos que se conecta a S3, AWS Open Registry y Metaspace. Utiliza *Dataplug* para particionar inteligentemente conjuntos de datos masivos (Geoespacial COG, Genómica FASTQ, Lidar) al vuelo para un procesamiento paralelo óptimo.
* **Orquestación Multi-Cloud**: Implementé enlaces IAM seguros basados en CloudFormation para ejecutar cargas de trabajo de forma segura en la propia infraestructura AWS del usuario (Lambda, EC2, Fargate, Batch) y en IBM Cloud (Code Engine).
* **Implementación Full-Stack**: Construí el frontend SPA usando React 19 + Vite, gestioné el estado y la autenticación vía AWS Cognito, y utilicé DynamoDB para la persistencia de metadatos de ejecución de alto rendimiento.

### Impacto Real y Tracción

* **Uso Activo en Producción**: Adoptado por **más de 50 investigadores activos**, reduciendo el tiempo de configuración de infraestructura en un 80% y acortando los tiempos de ejecución de horas a minutos.
* **Alta Disponibilidad**: Mantenimiento de un **SLA del 99.98%** en todos los clústeres de producción.
* **Casos de Uso Avanzados**: Impulsando activamente pipelines de datos extremos, incluyendo modelado geoespacial de consumo de agua, análisis de modelos climáticos CMIP6 y anotación de metabolómica de alto rendimiento.
* **Investigación Financiada**: Parcialmente financiado por iniciativas europeas, incluyendo NEARDATA 2026 y CLOUDLESS 2026.

### Tecnologías
`React` · `TypeScript` · `Python` · `IA Agéntica (MCP)` · `AWS (Amplify, Cognito, DynamoDB, CodeBuild, CloudFormation)` · `IBM Code Engine` · `Kubernetes` · `Docker` · `Lithops` · `Dask`

> 🌐 *Visita [pyrun.cloud](https://pyrun.cloud) para explorar la plataforma.*