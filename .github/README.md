# Xed Web
A Social Media Web App Project. View live production [here]()

<!-- BEGIN: Getting Started -->
## Getting Started

### 1. Clone Repository
```
git clone https://github.com/kaizen-dw/xed-web
```

### 2. Choose your setup
Option 1 Prerequesites: Local Environment Setup
- [Bun](https://bun.sh) >= 1.0.14
- [Act](https://github.com/nektos/act) >= 0.2.54

Install and run development server on `http://localhost:3000`
```
bun i && bun dev
```

Option 2 Prerequesites: Containerized Setup
- [Docker](https://docs.docker.com/engine/install) or (alternative) [Podman](https://podman.io) & [Podman Compose](https://podman.io) >= 1.06

Build image and run container
```
docker-compose up # podman-compose up (if your using podman)
```

Option 3 Prerequesites: Nix Shell/Flake Setup
- [Nix Package Manager](https://nixos.org/download)
- (Optional) [Direnv](https://direnv.net/docs/installation.html)

If you have `direnv` installed
```
cd <repo directory>
direnv allow
```
Install and run development server on `http://localhost:3000`
```
bun i && bun dev
```
<!-- END: Getting Started -->

<!-- BEGIN: Test Commands -->
## Test Commands
Test Lint
```
bun lint
```

Test a github action workflow locally
```
act -j <job-name>
```
<!-- END: Test Commands -->
