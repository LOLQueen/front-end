import React, { PropTypes } from 'react';
import { Map, List } from 'immutable';

const PlayerList = ({ data: players }) => {
  const blueTeam = players.get('blue', List());
  const purpleTeam = players.get('purple', List());

  const bluePlayersJSX = blueTeam.map((player, index) => (
    <div style={styles.playerName} key={index}>{player.getIn(['summoner', 'name'], 'N/A')}</div>
  ));
  const purplePlayersJSX = purpleTeam.map((player, index) => (
    <div style={styles.playerName} key={index}>{player.getIn(['summoner', 'name'], 'N/A')}</div>
  ));

  return (
    <div className="flex h6 white" style={styles.teams}>
      <div className="px1" style={styles.blueTeam}>
        {bluePlayersJSX}
      </div>
      <div className="px1" style={styles.purpleTeam}>
        {purplePlayersJSX}
      </div>
    </div>
  );
};

const styles = {
  playerName: {
    width: '75px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  teams: {
  },
  blueTeam: {
  },
  purpleTeam: {
  },
};

PlayerList.propTypes = {
  data: PropTypes.instanceOf(Map).isRequired,
};

export default PlayerList;
