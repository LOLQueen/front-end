import React, { PropTypes } from 'react';
import { Map } from 'immutable';

const SpellIcon = ({ data: spell }) => {
  return (
    <img style={styles}
      src={spell.get('imageUrl')}
      title={`${spell.get('name')} - ${spell.get('description')}`}
    />
  );
};

SpellIcon.propTypes = {
  data: PropTypes.instanceOf(Map).isRequired,
};

const styles = {
  boxShadow: '0 0 0.01rem white',
  width: '3rem',
  height: '3rem',
};

export default SpellIcon;
