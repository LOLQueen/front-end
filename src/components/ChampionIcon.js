import React, { PropTypes } from 'react';
import { Map } from 'immutable';

const ChampionIcon = ({ data: champion }) => {
  return (
    <div>
      <img title={champion.get('name')}
        src={champion.get('imageUrl')}
        style={styles}
      />
    </div>
  );
};

ChampionIcon.propTypes = {
  data: PropTypes.instanceOf(Map).isRequired,
};

const styles = {
  boxShadow: '0 0 6rem 2rem black',
  height: '6rem',
  width: '6rem',
};

export default ChampionIcon;
