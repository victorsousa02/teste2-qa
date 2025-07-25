# Teste 2 - Teste de Performance com K6

Este repositório contém um teste de performance utilizando K6, testando a API pública https://catfact.ninja/fact.

## Como executar

1. Instale o [K6](https://k6.io/docs/getting-started/installation/)

### Instalação do K6

- **Windows**
  - Usando Chocolatey:
    ```bash
    choco install k6
    ```
  - Usando scoop:
    ```bash
    scoop install k6
    ```
  - Ou baixe o executável direto: https://github.com/grafana/k6/releases/latest

- **macOS**
  - Usando Homebrew:
    ```bash
    brew install k6
    ```
  - Ou baixe o binário direto: https://github.com/grafana/k6/releases/latest

- **Linux (Ubuntu/Debian)**
  ```bash
  sudo apt update
  sudo apt install -y gnupg software-properties-common
  sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 379CE192D401AB61
  sudo add-apt-repository "deb https://dl.k6.io/deb stable main"
  sudo apt update
  sudo apt install k6
