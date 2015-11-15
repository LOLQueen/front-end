/**
 *  All _FETCH actions are asynchronous
 *  ALL others are synchronous (for now)
 */

module.exports = makeActions('@@LOLQueen', [
  'SUMMONER_SELECT',
  'SUMMONER_REQUEST',
  'SUMMONER_FETCH',
  'SUMMONER_RESPONSE',
  'SUMMONER_INVALIDATE',
  'MATCHES_REQUEST',
  'MATCHES_FETCH',
  'MATCHES_RESPONSE',
  'MATCHES_INVALIDATE',
]);

function makeActions(namespace, actions) {
  return actions.reduce((map, action) => (
    map[action] = `${namespace}/${action}`, map
  ), {});
}
