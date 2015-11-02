import { createAction as makeAC } from 'redux-actions';
import {
  SUMMONER_REQUEST,
  SUMMONER_RESPONSE,
  SUMMONER_INVALIDATE,
  MATCHES_REQUEST,
  MATCHES_RESPONSE,
  MATCHES_INVALIDATE,
} from '../constants/actions';

import { head, values, merge } from 'ramda';
import { fetchFromAPI, makeKey } from '../utils';

function createRequestAC(ACTION) {
  return (region, name) => ({
    type: ACTION,
    payload: makeKey({ region, name }),
  });
}

function createResponseAC(ACTION) {
  return (response) => {
    const action = {
      type: ACTION,
      payload: response,
    };
    return (response instanceof Error)
      ? merge(action, { error: true })
      : action;
  };
}

const summonerRequest = createRequestAC(SUMMONER_REQUEST);
const summonerResponse = createResponseAC(SUMMONER_RESPONSE);
const matchesRequest = createRequestAC(MATCHES_REQUEST);
const matchesResponse = createResponseAC(MATCHES_RESPONSE);

export const summonerInvalidate = makeAC(SUMMONER_INVALIDATE);
export const matchesInvalidate = makeAC(MATCHES_INVALIDATE);

function shouldFetch(entity) {
  if (!entity) return true;
  if (entity.get('isFetching')) return false;
  return entity.get('didInvalidate');
}

function shouldFetchSummoner(state, region, name) {
  const key = makeKey({ region, name });
  const lookupArray = ['summoners', key];
  const summoner = state.lolqueen.getIn(lookupArray, null);
  return shouldFetch(summoner);
}

export function fetchSummonerIfNeeded(region, name) {
  return async function thunk(dispatch, getState) {
    if (shouldFetchSummoner(getState(), region, name)) {
      dispatch(fetchSummoner(region, name));
    }
  };
}

function fetchSummoner(region, name) {
  return async function thunk(dispatch) {
    const resource = `${region}/summoners?names=${name}`;
    dispatch(summonerRequest(region, name));
    try {
      const payload = await fetchFromAPI(resource);
      const summoner = head(values(payload));
      dispatch(summonerResponse(summoner));
      dispatch(fetchMatches(region, summoner));
    } catch (ex) {
      dispatch(summonerResponse(ex));
    }
  };
}

function shouldFetchMatches(state, region, name) {
  const key = makeKey({ region, name });
  const lookupArray = ['summoners', key, 'matches'];
  const matches = state.lolqueen.getIn(lookupArray, null);
  return shouldFetch(matches);
}

function fetchMatches(region, { name, id }) {
  return async function thunk(dispatch) {
    const resource = `${region}/summoners/${id}/matches`;
    dispatch(matchesRequest(region, name));
    try {
      const matches = await fetchFromAPI(resource);
      dispatch(matchesResponse(matches));
    } catch (ex) {
      dispatch(matchesResponse(ex));
    }
  };
}

export function fetchMatchesIfNeeded(region, summoner) {
  return async function thunk(dispatch, getState) {
    if (shouldFetchMatches(getState(), region, summoner)) {
      dispatch(fetchMatches(region, summoner));
    }
  };
}
