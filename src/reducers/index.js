import {
  SUMMONER_SELECT,
  SUMMONER_REQUEST,
  SUMMONER_RESPONSE,
  SUMMONER_INVALIDATE,
  MATCHES_REQUEST,
  MATCHES_RESPONSE,
  MATCHES_INVALIDATE,
} from '../constants/actions';

import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import { handleActions } from 'redux-actions';
import { Map, List } from 'immutable';


const main = handleActions({

  [SUMMONER_SELECT]: (state, action) => {
    const key = action.payload;
    return state.set('selected', key);
  },

  [SUMMONER_REQUEST]: (state, action) => {
    const key = action.payload;
    return state.mergeDeep({
      summoners: {
        [key]: {
          isFetching: true,
          didInvalidate: false,
        },
      },
    });
  },

  [SUMMONER_RESPONSE]: (state, action) => {
    if (! action.error) {
      const { summoner, key } = action.payload;
      return state.mergeDeep({
        entities: {
          summoners: {
            [key]: summoner,
          },
        },
        summoners: {
          [key]: {
            isFetching: false,
            didInvalidate: false,
          },
        },
      });
    }
  },

  [SUMMONER_INVALIDATE]: (state, action) => {
    const key = action.payload;
    return state.mergeDeep({
      summoners: {
        [key]: {
          didInvalidate: true,
        },
      },
    });
  },

  [MATCHES_REQUEST]: (state, action) => {
    const key = action.payload;
    return state.mergeDeep({
      summoners: {
        [key]: {
          matches: {
            isFetching: true,
            didInvalidate: false,
          },
        },
      },
    });
  },

  [MATCHES_RESPONSE]: (state, action) => {
    if (! action.error) {
      const { matches, key } = action.payload;
      const s1 = state.mergeDeep({
        entities: {
          matches: matches,
        },
        summoners: {
          [key]: {
            matches: {
              isFetching: false,
              didInvalidate: false,
            },
          },
        },
      });

      /*  Arrays are treated as regular objects by .mergeDeep */
      return s1.setIn(
        ['summoners', key, 'matches', 'ids'], List(Object.keys(matches))
      );
    }
  },

  [MATCHES_INVALIDATE]: (state, action) => {
    const key = action.payload;
    return state.mergeDeep({
      summoners: {
        [key]: {
          matches: {
            didInvalidate: true,
          },
        },
      },
    });
  },
}, Map());

export default combineReducers({
  router: routerStateReducer,
  main: main,
});
