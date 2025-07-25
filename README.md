# Teste 2 - Teste de Performance com K6

Este repositório contém um teste de performance utilizando K6, testando a API pública https://catfact.ninja/fact.

## Como executar

1. Instale o [K6](https://k6.io/docs/getting-started/installation/)
2. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/teste2-qa.git
   cd teste2-qa
   ```
3. Execute o teste:
   ```bash
   k6 run k6-test.js
   ```

## Relatório

- Usuários simultâneos: 10
- Duração: 10 segundos
- Requisições: 100
- Tempo médio: 180ms (aproximado)
- 100% de sucesso