# Xed
A Soc Med Web App Project.
View live production [here]()

### Prerequesites using Containerization
- [Docker](https://docs.docker.com/engine/install/) OR [Podman](https://podman.io/) & [Podman Compose](https://podman.io/) >= 1.0.6

### Prerequesites without Containerization (Docker or Podman)
- [Bun](https://bun.sh) >= 1.0.7 OR [Pnpm](https://pnpm.io/installation)
  
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
  docker-compose up
  ```
   - Open ``http://localhost:3000``
  
  
- Setup project with Bun
  - Install packages
  ```
  bun install
  ```
  - Run the project
   ```
   bun --bun run dev
   ```
   - Open ``http://localhost:3000``
 

# Available Commands

|     Bun Command      |          Description          |
| -------------------- | ----------------------------- |
| bun --bun run dev    | Starts a development instance |
| bun run build        | Generate application build    |
| bun i <package-name> | Install a new package         |

| Docker/Podman Command |          Description          |
| --------------------- | ----------------------------- |
| docker-compose up     | Starts a development instance |
| bun run build         | Generate application build    |
| bun i <package-name>  | Install a new package         |
 
### Useful Commands for Debugging
Run bash inside container
```
docker-compose run -it app bash
```
Execute bash inside container
```
docker-compose exec -it app bash
```

# Backend Services
- [Amazon Cognito]():
- [AWS AppSync GraphQL]():
- [Amazon DynamoDB]():
