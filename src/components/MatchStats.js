import React, { PropTypes } from 'react';
import { Map } from 'immutable';

export const MatchStats = ({ data: stats }) => {
  const kills = stats.get('championsKilled', 0);
  const assists = stats.get('assists', 0);
  const deaths = stats.get('numDeaths', 0);
  const KDA = ((kills + assists) / (deaths || 1)).toFixed(2);
  const minionsKilled = stats.get('minionsKilled', 0);
  const neutralMinionsKilled = stats.get('neutralMinionsKilled', 0);
  const totalCS = minionsKilled + neutralMinionsKilled;
  const totalCSTitle = `${minionsKilled} Minions + ${neutralMinionsKilled} Jungle Creeps`;
  const level = stats.get('level', 0);

  return (
    <div className="white">
      <div>
        <span title={kills}>{kills} /</span>
        <span title={deaths}> {deaths} /</span>
        <span title={assists}> {assists}</span>
      </div>
      <div className="h5">KDA of <b>{KDA}</b></div>
      <div className="h5" title={totalCSTitle}>{totalCS} CS</div>
    </div>
  );
};

MatchStats.propTypes = {
  data: PropTypes.instanceOf(Map).isRequired,
};

export default MatchStats;
