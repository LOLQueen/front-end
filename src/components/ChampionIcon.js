import React, { PropTypes } from 'react';
import { Map } from 'immutable';

const ChampionIcon = ({ data: champion }) => {
  return (
    <div>
      <img title={champion.get('name')}
        src={champion.get('imageUrl')}
      />
    </div>
  );
};

ChampionIcon.propTypes = {
  data: PropTypes.instanceOf(Map).isRequired,
};

export default ChampionIcon;
