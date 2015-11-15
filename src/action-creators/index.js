import {
  SUMMONER_SELECT,
  SUMMONER_REQUEST,
  SUMMONER_RESPONSE,
  SUMMONER_INVALIDATE,
  MATCHES_REQUEST,
  MATCHES_RESPONSE,
  MATCHES_INVALIDATE,
} from '../constants/actions';

import { head, values, merge } from 'ramda';
import { fetchFromAPI, makeKey } from '../utils/index';

function createSimpleAC(ACTION) {
  return (region, name) => ({
    type: ACTION,
    payload: makeKey({ region, name }),
  });
}

function createResponseAC(ACTION) {
  return response => {
    const action = {
      type: ACTION,
      payload: response,
    };
    return (response instanceof Error)
      ? merge(action, { error: true })
      : action;
  };
}

const summonerResponse = createResponseAC(SUMMONER_RESPONSE);
const matchesResponse = createResponseAC(MATCHES_RESPONSE);

const matchesRequest = createSimpleAC(MATCHES_REQUEST);
const summonerRequest = createSimpleAC(SUMMONER_REQUEST);
export const summonerInvalidate = createSimpleAC(SUMMONER_INVALIDATE);
export const matchesInvalidate = createSimpleAC(MATCHES_INVALIDATE);
export const summonerSelect = createSimpleAC(SUMMONER_SELECT);

function shouldFetch(entity) {
  if (!entity) return true;
  if (entity.get('isFetching')) return false;
  return entity.get('didInvalidate');
}

function shouldFetchSummoner(state, region, name) {
  const key = makeKey({ region, name });
  const summoner = state.main.getIn(['summoners', key], null);
  return shouldFetch(summoner);
}

export function fetchSummonerIfNeeded(region, name) {
  return async (dispatch, getState) => {
    if (shouldFetchSummoner(getState(), region, name)) {
      dispatch(fetchSummoner(region, name));
    }
  };
}

function fetchSummoner(region, name) {
  return async (dispatch) => {
    const resource = `${region}/summoners?names=${name}`;
    dispatch(summonerRequest(region, name));
    try {
      const payload = await fetchFromAPI(resource);
      const summoner = head(values(payload));
      const key = makeKey({ region, name });
      dispatch(summonerResponse({ summoner, key }));
      dispatch(fetchMatches(region, summoner));
    } catch (ex) {
      dispatch(summonerResponse(ex));
    }
  };
}

function fetchMatches(region, { name, id }) {
  return async (dispatch) => {
    const resource = `${region}/summoners/${id}/matches`;
    dispatch(matchesRequest(region, name));
    try {
      const matches = await fetchFromAPI(resource);
      const key = makeKey({ region, name });
      dispatch(matchesResponse({ key, matches }));
    } catch (ex) {
      dispatch(matchesResponse(ex));
    }
  };
}

function shouldFetchMatches(state, region, name) {
  const key = makeKey({ region, name });
  const matches = state.main.getIn(['summoners', key, 'matches'], null);
  return shouldFetch(matches);
}

export function fetchMatchesIfNeeded(region, summoner) {
  return async (dispatch, getState) => {
    if (shouldFetchMatches(getState(), region, summoner)) {
      dispatch(fetchMatches(region, summoner));
    }
  };
}
