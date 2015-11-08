import React, { PropTypes } from 'react';
import { Map } from 'immutable';
import SCALE from '../utils/scale';

const SpellIcon = ({ data: spell }) => {
  return (
    <img src={spell.get('imageUrl')}
      title={`${spell.get('name')} - ${spell.get('description')}`}
      style={styles}
    />
  );
};

SpellIcon.propTypes = {
  data: PropTypes.instanceOf(Map).isRequired,
};

const styles = {
  boxShadow: `0 0 ${SCALE(-5)} white`,
  width: SCALE(1),
  height: SCALE(1),
};

export default SpellIcon;
