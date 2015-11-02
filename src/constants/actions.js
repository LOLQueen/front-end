export const SELECT_SUMMONER = '@@LolQueen/SELECT_SUMMONER';
export const LOAD_SUMMONER = '@@LolQueen/LOAD_SUMMONER';
export const LOAD_MATCHES = '@@LolQueen/LOAD_MATCHES';

function makeActions(namespace, actions) {
  return actions.reduce((map, action) => (
    map[action] = `${namespace}/${action}`, map
  ), {});
}

/**
 *  All _FETCH actions are asynchronous
 *  ALL others are synchronous (for now)
 */

export default makeActions('@@LOLQueen', [
  'SUMMONER_REQUEST',
  'SUMMONER_FETCH',
  'SUMMONER_RESPONSE',
  'SUMMONER_INVALIDATE',
  'MATCHES_REQUEST',
  'MATCHES_FETCH',
  'MATCHES_RESPONSE',
  'MATCHES_INVALIDATE',
]);
