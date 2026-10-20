# PyRun Cloud — Un espacio de trabajo para Python distribuido

**Mi papel:** Líder de desarrollo end-to-end · **Contexto:** Plataforma de investigación de Cloudlab/URV

[Explorar PyRun Cloud](https://pyrun.cloud/)

PyRun Cloud permite a los investigadores pasar de código Python a una carga distribuida sin configurar manualmente cada pieza del entorno cloud. Reúne espacio web, construcción de entornos, controles de ejecución y observabilidad para **AWS e IBM Cloud**.

Lideré el desarrollo completo de la plataforma, conectando el flujo de usuario con la infraestructura necesaria para ejecutar e inspeccionar trabajos reales.

## El problema que aborda

Frameworks como Lithops y Dask simplifican la programación paralela, pero siguen haciendo falta credenciales, entornos compatibles, configuración de despliegue y herramientas para entender los fallos. PyRun reúne esos pasos para que los investigadores se centren en el análisis, no en repetir la preparación de infraestructura.

## Qué desarrollé y lideré

- **Espacio web:** entorno React/TypeScript para preparar código, definir dependencias y lanzar trabajos.
- **Automatización de entornos:** construcción de contenedores o entornos Conda a partir de dependencias, integrada con AWS CodeBuild/CodePipeline.
- **Integración cloud:** conexión con infraestructura AWS del usuario mediante flujos IAM/CloudFormation y ejecución en IBM Code Engine.
- **Visibilidad de ejecución:** paneles de recursos, logs y cronogramas de tareas para inspeccionar ejecuciones distribuidas.
- **Flujos de datos:** acceso mediante Dataplug a almacenamiento de objetos y formatos científicos, incluidos datos geoespaciales y genómicos.
- **Operaciones asistidas por IA:** configuración de agentes de programación e integraciones MCP para interactuar con herramientas cloud en lenguaje natural.

## Enfoque de ingeniería

El reto no es solo lanzar cómputo, sino coordinar construcción de entornos, credenciales, metadatos y diagnóstico de errores. Cognito gestiona la autenticación, DynamoDB almacena metadatos y la plataforma integra herramientas distribuidas existentes sin sustituir su modelo de programación.

Las operaciones asistidas por IA respetan los permisos configurados; no eliminan la necesidad de comprender el acceso y los costes cloud.

**Stack:** React · TypeScript · Python · AWS Cognito · DynamoDB · CodeBuild · CloudFormation · IBM Code Engine · Docker · Lithops · Dask · MCP
