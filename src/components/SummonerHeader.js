import React, { PropTypes } from 'react';
import { Map } from 'immutable';
import { SCALE } from '../utils';

export const SummonerHeader = ({ data: summoner }) => {
  const profileIcon = summoner.get('profileIcon', Map());
  const imgUrl = profileIcon.get('imageUrl');
  const summonerName = summoner.get('name');
  const level = summoner.get('level');
  return (
    <div className="border bg-black mb4 rounded"
      style={styles}>
      <div className="p2 flex flex-center">
        <img className="mr1" src={imgUrl} />
        <div className="ml2 mr1 p1 white">
          <h1 className="m0 h1">{summonerName}</h1>
          <h2 className="m0 h2">level: {level}</h2>
        </div>
      </div>
    </div>
  );
};

SummonerHeader.propTypes = {
  data: PropTypes.instanceOf(Map).isRequired,
};

const styles = {
  boxShadow: `0 0 ${SCALE(2)} ${SCALE(0)} black`,
};

export default SummonerHeader;
