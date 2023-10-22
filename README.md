# Xed
A Soc Med Web App Project.
View live production [here]()

### Prerequesites using Containerization
- [Docker](https://docs.docker.com/engine/install/) OR [Podman](https://podman.io/) & [Podman Compose](https://podman.io/) >= 1.0.6
- [AWS Amplify CLI](https://docs.amplify.aws/cli/start/install) 

### Prerequesites without Containerization (Docker or Podman)
- [Bun](https://bun.sh) >= 1.0.7 OR [Pnpm](https://pnpm.io/installation)
- [AWS Amplify CLI](https://docs.amplify.aws/cli/start/install)
  
### Getting Started
- Clone Repository
```bash
git clone https://github.com/kaizen-dw/Xed
```

- Download AWS config files here
``https://``
- Paste file in

- Setup project with Docker or Podman (Skip if you're not using this tools)
  - Build and Run Image 
  ```
  docker-compose up --build
  ```
  OR
  ```
  podman-compose up --build
  ```  
   - Open ``http://localhost:3000``
 
  
  
- Setup project with Bun
  - Install packages
  ```
  bun install
  ```
  - Run the project
   ```
   bun dev
   ```
   - Open ``http://localhost:3000``
 
 
### Useful Commands for Debugging
Run bash inside container
```
docker-compose run -it app bash
```
Execute bash inside container
```
docker-compose exec -it app bash
```
