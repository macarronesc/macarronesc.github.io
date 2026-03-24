# PyRun Cloud

**PyRun Cloud** is a comprehensive full-stack SaaS platform I architected to eliminate the operational friction between researchers and cloud infrastructure. It provides an intuitive, web-based IDE where users can write code, configure environments, and dynamically deploy distributed workloads across AWS and IBM Cloud—all without interacting with a terminal or managing raw servers.

### The Problem

Our research group at URV engineers powerful computational frameworks: Lithops for serverless parallel computing, Dask for scalable analytics, and Dataplug for cloud-optimized data access. However, each tool demands significant DevOps expertise: configuring IAM credentials, provisioning clusters, managing complex dependency trees, and monitoring execution. This created an operational wall between these tools and the domain scientists who needed them most.

### How PyRun Solves It

Through a streamlined web interface, users simply:
1. **Develop**: Write or upload code within a familiar, high-performance editor environment.
2. **Define**: Specify dependencies via an `environment.yml` or standard Dockerfile; the platform autonomously compiles the necessary runtimes.
3. **Deploy**: Launch workloads on cloud infrastructure with a single click. PyRun provisions the compute resources, securely injects credentials, and orchestrates execution.
4. **Observe**: Monitor telemetry via real-time dashboards detailing CPU usage, memory consumption, network I/O, and fine-grained task execution timelines.

### Platform Architecture

I led the end-to-end development across the entire stack:

- **Frontend**: A React-based Single Page Application (SPA) deployed on AWS Amplify, featuring a robust code editor, workspace virtualization, job monitoring, and administrative dashboards.
- **Identity & Access**: Managed via AWS Cognito, ensuring secure user authentication and strict role-based access control (RBAC).
- **Data Persistence**: AWS DynamoDB handles user profiles, workspace configurations, and execution metadata.
- **CI/CD Pipeline**: AWS CodeBuild and CodePipeline drive automated, ephemeral runtime compilation from user-defined environments.
- **AI Integration**: Recent iterations introduce MCP servers, agentic AI workflows, and deeply integrated GitHub Copilot capabilities for context-aware, AI-assisted development directly within the platform.

### Traction

- **50+ active researchers** utilizing the platform daily for high-performance computing tasks.
- **99.98% SLA** uptime maintained across all production clusters.
- **Multi-Cloud Evolution**: Fully integrated with AWS and IBM Cloud, with active development for GCP and Azure support.

### Technologies
`React` · `TypeScript` · `Python` · `AWS (Amplify, Cognito, DynamoDB, CodeBuild, EC2)` · `Kubernetes` · `Docker` · `Lithops` · `Dask`

> 🌐 *Visit [pyrun.cloud](https://pyrun.cloud) for more information.*
