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
  boxShadow: `0 0 ${SCALE(4)} ${SCALE(0)} black`,
  height: SCALE(3),
  width: SCALE(3),
};

export default ChampionIcon;
