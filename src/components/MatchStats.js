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

  return (
    <div className="flex flex-center">
      <div className="white h5">
        <div>
          <span className="bold">KDA:</span> {KDA}
        </div>
        <div title={totalCSTitle}>
          <span className="bold">CS:</span> {totalCS}
        </div>
      </div>
      <div className="h4 bold m2 px1 white bg-gray rounded center">
        <span>{kills} /</span>
        <span> {deaths} </span>
        <span>/ {assists}</span>
      </div>
    </div>
  );
};

MatchStats.propTypes = {
  data: PropTypes.instanceOf(Map).isRequired,
};

export default MatchStats;
