import React, { PropTypes } from 'react';
import { Map } from 'immutable';

import { SCALE } from '../utils';

/**
 *  @function ChampionIcon
 *  @param {Immutable.Map} options
 *  @param {Immutable.Map} options.data - champ data
 *
 *  @description
 *  Most of the styles for this component are done using basscss utility
 *  classes. Wherever not possible, we rely on inline styling. For example,
 *  we can't set the width using basscss utility classes, so we do it using
 *  inline styles. Same with the backgroundColor.
 */

const ChampionIcon = ({ data: champion, level }) => {
  return (
    <div className="relative">
      <span className="absolute top-0 right-0 h6 white"
        style={styles.level}>
        {level}
      </span>
      <img src={champion.get('imageUrl')}
        title={champion.get('name')}
        style={styles.image}
      />
      <span
        className="absolute bottom-0 left-0 h6 white center"
        style={styles.name}>
        {champion.get('name')}
      </span>
    </div>
  );
};

ChampionIcon.propTypes = {
  data: PropTypes.instanceOf(Map).isRequired,
  level: PropTypes.number,
};

const IMAGE_WIDTH = SCALE(3);

const styles = {
  image: {
    height: IMAGE_WIDTH,
    width: IMAGE_WIDTH,
  },
  name: {
    width: IMAGE_WIDTH,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  level: {
    textShadow: '0rem 0rem 0rem black',
    padding: SCALE(-2),
  },
};

export default ChampionIcon;
