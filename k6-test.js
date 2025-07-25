import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10, // 10 usuários virtuais
  duration: '10s', // durante 10 segundos
};

export default function () {
  const res = http.get('https://catfact.ninja/fact');

  check(res, {
    'status é 200': (r) => r.status === 200,
    'resposta contém fato': (r) => JSON.parse(r.body).fact !== undefined,
  });

  sleep(1); // pausa entre as execuções
}