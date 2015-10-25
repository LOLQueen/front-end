import {
  SELECT_SUMMONER,
  LOAD_SUMMONER,
  LOAD_MATCHES,
} from '../constants/actions';

import { combineReducers } from 'redux';
import { routerStateReducer  } from 'redux-router';

import {Map} from 'immutable';

function stateReducer(state = Map(), action) {
  switch (action.type) {
    case SELECT_SUMMONER:
      return state.set('selectedSummoner', action.payload);
    case LOAD_SUMMONER:
      return state.update('summoners', (summoners = Map()) => (
        summoners.merge({
          [action.payload.name]: action.payload,
        })
      ));
    case LOAD_MATCHES:
      return state.mergeIn(['summoners', action.payload.name], {
        matches: action.payload.matches,
      });
    default:
      return state;
  }
}

export default combineReducers({
  router: routerStateReducer,
  lolqueen: stateReducer,
});
