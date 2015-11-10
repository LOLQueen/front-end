import React, { PropTypes } from 'react';
import { Map } from 'immutable';
import { SCALE } from '../utils';

const ChampionIcon = ({ data: champion }) => {
  return (
    <div>
      <img src={champion.get('imageUrl')}
        title={champion.get('name')}
        style={styles}
      />
    </div>
  );
};

ChampionIcon.propTypes = {
  data: PropTypes.instanceOf(Map).isRequired,
};

const styles = {
  height: SCALE(3),
  width: SCALE(3),
};

export default ChampionIcon;
