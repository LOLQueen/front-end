import {
  SELECT_SUMMONER,
  LOAD_SUMMONER,
  LOAD_MATCHES,
} from '../constants/actions';

import fetch from 'isomorphic-fetch';
const SERVER_URL = 'http://localhost:9000';

export function selectSummoner(name) {
  return {
    type: SELECT_SUMMONER,
    payload: name,
  };
}

export function loadSummoner(summoner) {
  return {
    type: LOAD_SUMMONER,
    payload: summoner,
  };
}

export function loadMatches(summoner, matches) {
  return {
    type: LOAD_MATCHES,
    payload: {
      name: summoner.name,
      matches: matches,
    },
  };
}

export function fetchMatches(region, summoner) {
  return async function thunk(dispatch) {
    const url = `${SERVER_URL}/${region}/summoners/${summoner.id}/matches`;
    const response = await fetch(url);
    const matches = await response.json();
    dispatch(loadMatches(summoner, matches));
  };
}

export function fetchSummoner(region, summonerName) {
  return async function thunk(dispatch) {
    const url = `${SERVER_URL}/${region}/summoners?names=${summonerName}`;
    const response = await fetch(url);
    const json = await response.json();
    const id = Object.keys(json)[0];
    const summoner = json[id];
    dispatch(loadSummoner(summoner));
    dispatch(selectSummoner(summoner.name));
    await fetchMatches(region, summoner)(dispatch);
  };
}
