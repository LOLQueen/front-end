import React, { PropTypes } from 'react';
import { Map } from 'immutable';

export default function MatchStats({ data: stats }) {
  const kills = stats.get('championsKilled', 0);
  const assists = stats.get('assists', 0);
  const deaths = stats.get('numDeaths', 0);
  const KDA = ((kills + assists) / (deaths || 1)).toFixed(2);

  return (
    <div>
        <span title={kills}>{kills} /</span>
        <span title={deaths}> {deaths} /</span>
        <span title={assists}> {assists}</span> <br/>
        <span>KDA of <b>{KDA}</b></span>
    </div>
  );
}

MatchStats.propTypes = {
  data: PropTypes.instanceOf(Map).isRequired,
};
