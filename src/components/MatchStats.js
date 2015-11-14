import React, { PropTypes } from 'react';
import { Map } from 'immutable';

function threshholdColor(KDA) {
  if (KDA >= 5) {
    return 'green';
  } else if (KDA >= 2) {
    return 'teal';
  }
  return 'gray';
}

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
    <div className="white h5">
      <div className="h4">
        <span>{kills} /</span>
        <span> {deaths} </span>
        <span>/ {assists}</span>
      </div>
      <div>
        KDA: <span className={`bold ${threshholdColor(KDA)}`}>{KDA}</span>
      </div>
      <div title={totalCSTitle}>
        CS: <span className="bold">{totalCS}</span>
      </div>
    </div>
  );
};

MatchStats.propTypes = {
  data: PropTypes.instanceOf(Map).isRequired,
};

export default MatchStats;
