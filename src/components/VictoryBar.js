import React, { PropTypes } from 'react';
import { SCALE } from '../utils';

/**
 *  @class VictoryBar
 *  @param {boolean} Victory - If the game was a win.
 *
 *  @description
 *  This component requires that it be placed inside a flex
 *  container with flex-direction: row. Otherwise, the height
 *  will collapse to 0.
 */

const VictoryBar = ({ victory }) => {
  return (
    <div style={{
      ...styles.size,
      ...styles.background[victory],
    }}/>
  );
};

const styles = {
  size: {
    width: SCALE(0),
  },
  background: {
    true: {
      backgroundColor: 'green',
    },
    false: {
      backgroundColor: 'red',
    },
  },
};

VictoryBar.propTypes = {
  didWin: PropTypes.bool.isRequired,
};

export default VictoryBar;
