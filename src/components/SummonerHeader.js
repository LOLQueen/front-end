import React, { PropTypes } from 'react';
import { Map } from 'immutable';

export const SummonerHeader = ({ data: summoner }) => {
  const profileIcon = summoner.get('profileIcon', Map());
  const imgUrl = profileIcon.get('imageUrl');
  const summonerName = summoner.get('name');
  const level = summoner.get('level');
  const soloRank = summoner.getIn(['ranks', 'RANKED_SOLO_5x5'], Map());

  const soloRankImageUrl = soloRank.getIn(['tier', 'imageUrl'], null);
  const soloRankName = soloRank.getIn(['tier', 'name'], null);
  const soloRankDivision = soloRank.get('division', null);
  const soloRankLeagueName = soloRank.get('name', null);
  const soloRankLP = soloRank.get('leaguePoints', null);

  const SoloRankIcon = (
    <div className="flex flex-column flex-center mr3">
      <img src={soloRankImageUrl} style={styles.SoloRankIcon}/>
      <span className="white">
        {soloRankName} {soloRankDivision} - {soloRankLP} LP
      </span>
      <span className="white" style={styles.leagueName}> {soloRankLeagueName} </span>
    </div>
  );

  return (
    <div className="border bg-black mb3 rounded">
      <div className="p2 flex flex-justify">
        <div className="flex flex-center">
          <img className="mr1" src={imgUrl} />
          <div className="ml2 mr1 p1 white">
            <h1 className="m0 h1">{summonerName}</h1>
            <h2 className="m0 h2">level: {level}</h2>
          </div>
        </div>
        {
          soloRankImageUrl
            ? SoloRankIcon
            : <span />
        }
      </div>
    </div>
  );
};

SummonerHeader.propTypes = {
  data: PropTypes.instanceOf(Map).isRequired,
};

const styles = {
  SoloRankIcon: {
    width: '6rem',
    height: 'auto',
  },
  leagueName: {
    fontSize: '0.75rem',
  },
};

export default SummonerHeader;
