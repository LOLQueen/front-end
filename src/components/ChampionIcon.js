import React, { PropTypes } from 'react';
import { Map } from 'immutable';

export default function ChampionIcon({ data: champion }) {
  return (
    <div>
      <img title={champion.get('name')}
        src={champion.get('imageUrl')}
        className="mb2"
      />
    </div>
  );
}

ChampionIcon.propTypes = {
  data: PropTypes.instanceOf(Map).isRequired,
};
