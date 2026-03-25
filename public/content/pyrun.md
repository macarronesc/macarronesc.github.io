# PyRun Cloud — AI-Assisted Serverless Platform

**PyRun Cloud** is a comprehensive, full-stack PaaS (Platform as a Service) I architected from the ground up to eliminate the operational friction between researchers and cloud infrastructure. It provides an intuitive, web-based IDE equipped with Agentic AI, allowing users to write code, automatically compile environments, and dynamically deploy distributed workloads across AWS and IBM Cloud—all without touching a terminal or provisioning a single server.

### The Challenge

Our research group at URV engineers powerful computational frameworks: **Lithops** for serverless parallel computing, **Dask** for scalable analytics, and **Dataplug** for cloud-optimized data access. However, utilizing these tools demands significant DevOps expertise: configuring IAM credentials, provisioning clusters, managing complex dependency trees, and orchestrating containers. This steep learning curve created an operational wall for the domain scientists (biologists, physicists, data analysts) who needed these tools the most.

### The PyRun Solution

PyRun abstracts away the entire cloud infrastructure layer. Through a streamlined web interface, users simply:
1. **Develop**: Write or upload code within a high-performance, VS Code-like virtual workspace.
2. **Define**: Specify dependencies via an `environment.yml` or a standard `Dockerfile`.
3. **Deploy**: Launch workloads with a single click. PyRun autonomously compiles the runtime, securely injects credentials, and orchestrates the distributed execution across thousands of cores.
4. **Observe**: Monitor telemetry via real-time dashboards detailing CPU usage, memory consumption, network I/O, and fine-grained task execution timelines (Gantt charts).

### My Architectural Contributions

I led the end-to-end development of the platform, engineering a highly scalable, event-driven architecture:

* **Agentic AI & MCP Integration**: Engineered a cloud-ready AI environment where **GitHub Copilot** and **OpenCode** agents are pre-configured via Model Context Protocol (MCP) servers. The AI has instant, secure visibility into the user's AWS account, enabling natural-language cloud operations (e.g., *"Deploy this function to Lambda and store results in my S3 bucket"*).
* **Automated CI/CD Runtimes**: Designed a seamless runtime manager using AWS CodeBuild and CodePipeline. It detects changes in user dependency files and automatically compiles ephemeral, ready-to-run Docker images or Conda environments.
* **Data Cockpit**: Developed an interactive data ingestion tool that connects to S3, AWS Open Registry, and Metaspace. It utilizes *Dataplug* to intelligently partition massive datasets (Geospatial COG, Genomics FASTQ, Lidar) on-the-fly for optimal parallel processing.
* **Multi-Cloud Orchestration**: Implemented secure CloudFormation-based IAM linking to execute workloads safely on the user's own AWS infrastructure (Lambda, EC2, Fargate, Batch) and IBM Cloud (Code Engine).
* **Full-Stack Implementation**: Built the frontend SPA using React 19 + Vite, managed state and authentication via AWS Cognito, and utilized DynamoDB for high-throughput execution metadata persistence.

### Real-World Impact & Traction

* **Active Production Use**: Adopted by **50+ active researchers**, drastically reducing infrastructure setup time by 80% and shrinking time-to-execution from hours to minutes.
* **High Availability**: Maintaining a **99.98% SLA** uptime across all production clusters.
* **Advanced Use Cases**: Actively powering extreme data pipelines in production, including geospatial water consumption modeling, CMIP6 climate model analysis, and high-throughput metabolomics annotation.
* **Funded Research**: Partially funded by European initiatives, including NEARDATA 2026 and CLOUDLESS 2026.

### Technologies
`React` · `TypeScript` · `Python` · `Agentic AI (MCP)` · `AWS (Amplify, Cognito, DynamoDB, CodeBuild, CloudFormation)` · `IBM Code Engine` · `Kubernetes` · `Docker` · `Lithops` · `Dask`

> 🌐 *Visit [pyrun.cloud](https://pyrun.cloud) to explore the platform.*