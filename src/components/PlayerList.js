import React, { PropTypes } from 'react';
import { Map, List } from 'immutable';

const PlayerList = ({ data: players }) => {
  const blueTeam = players.get('blue', List());
  const purpleTeam = players.get('purple', List());

  const bluePlayersJSX = blueTeam.map((player, index) => (
    <div key={index}>{player.getIn(['summoner', 'name'], 'N/A')}</div>
  ));
  const purplePlayersJSX = purpleTeam.map((player, index) => (
    <div key={index}>{player.getIn(['summoner', 'name'], 'N/A')}</div>
  ));

  return (
    <div className="flex h6">
      <div>
        {bluePlayersJSX}
      </div>
      <div>
        {purplePlayersJSX}
      </div>
    </div>
  );
};

PlayerList.propTypes = {
  data: PropTypes.instanceOf(Map).isRequired,
};

export default PlayerList;
