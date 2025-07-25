import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 20,
  duration: '10s',
};

export default function () {
  // /fact endpoint
  const resFact = http.get('https://catfact.ninja/fact');
  const factBody = resFact.json();

  check(resFact, {
    '/fact - status 200': (r) => r.status === 200,
    '/fact - campo fact válido': () => typeof factBody.fact === 'string' && factBody.fact.length > 0,
    '/fact - campo length correto': () => typeof factBody.length === 'number' && factBody.length === factBody.fact.length,
  });

  // /facts endpoint
  const resFacts = http.get('https://catfact.ninja/facts');
  const factsBody = resFacts.json();

  check(resFacts, {
    '/facts - status 200': (r) => r.status === 200,
    '/facts - data é array': () => Array.isArray(factsBody.data),
    '/facts - cada item tem fact': () => factsBody.data.every(f => typeof f.fact === 'string' && f.fact.length > 0),
    '/facts - length correto': () => factsBody.data.every(f => typeof f.length === 'number' && f.length === f.fact.length),
    '/facts - current_page é número': () => typeof factsBody.current_page === 'number',
    '/facts - total é número': () => typeof factsBody.total === 'number',
  });

  // /breeds endpoint
  const resBreeds = http.get('https://catfact.ninja/breeds');
  const breedsBody = resBreeds.json();

  check(resBreeds, {
    '/breeds - status 200': (r) => r.status === 200,
    '/breeds - data é array': () => Array.isArray(breedsBody.data),
    '/breeds - cada item tem breed': () => breedsBody.data.every(b => typeof b.breed === 'string' && b.breed.length > 0),
    '/breeds - cada item tem country': () => breedsBody.data.every(b => typeof b.country === 'string'),
  });

  sleep(1);
}