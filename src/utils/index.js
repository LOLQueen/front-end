import fetch from 'isomorphic-fetch';
const SERVER_URL = 'http://localhost:9000';

export async function fetchFromAPI(url) {
  const response = await fetch(`${SERVER_URL}/${url}`);
  throwIfHTTPError(response);
  return response.json();
}

function throwIfHTTPError(response) {
  if (! (response.status >= 200 && response.status < 400)) {
    throw Object.assign(
      new Error(response.statusText),
      { response }
    );
  }
}

export function makeKey(summoner) {
  const { region, name } = summoner;
  return `${region}/${name}`.toLowerCase();
}

export { default as SCALE } from './scale';
