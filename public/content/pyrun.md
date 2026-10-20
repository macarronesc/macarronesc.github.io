# PyRun Cloud — A workspace for distributed Python

**My role:** End-to-end development lead · **Context:** Cloudlab/URV research platform

[Explore PyRun Cloud](https://pyrun.cloud/)

PyRun Cloud helps researchers move from Python code to a distributed workload without manually assembling every part of the cloud environment. It combines a web workspace, runtime builds, execution controls and observability for **AWS and IBM Cloud**.

I led the platform's end-to-end development, connecting the user-facing workflow to the infrastructure needed to run and inspect real jobs.

## The problem it addresses

Frameworks such as Lithops and Dask simplify parallel programming, but users still need working credentials, compatible environments, deployment configuration and a way to understand failures. PyRun brings these steps into a single workspace, helping domain researchers focus on their analysis rather than repeated infrastructure setup.

## What I built and led

- **Web workspace:** a React/TypeScript environment to prepare code, define dependencies and launch jobs.
- **Runtime automation:** build container or Conda environments from dependency definitions, with AWS CodeBuild/CodePipeline integration.
- **Cloud integration:** connect user-owned AWS infrastructure through IAM/CloudFormation workflows and support IBM Code Engine execution.
- **Execution visibility:** dashboards for resource usage, logs and task timelines so users can inspect a distributed run.
- **Data workflows:** integrate Dataplug-based access to scientific data and object storage, including geospatial and genomic formats.
- **AI-assisted operations:** configure coding agents and MCP integrations to support natural-language interaction with cloud tooling.

## Engineering focus

The central challenge is not only launching compute: it is making runtime construction, credentials, execution metadata and failure diagnosis fit together. Cognito handles authentication, DynamoDB stores execution metadata, and the platform integrates existing distributed-computing tools instead of replacing their programming models.

AI-assisted operations work within configured permissions; they do not remove the need to understand cloud access and costs.

**Stack:** React · TypeScript · Python · AWS Cognito · DynamoDB · CodeBuild · CloudFormation · IBM Code Engine · Docker · Lithops · Dask · MCP
