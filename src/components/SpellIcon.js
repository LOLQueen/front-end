import React, { PropTypes } from 'react';
import { Map } from 'immutable';

const SpellIcon = ({ data: spell }) => {
  return (
    <img src={spell.get('imageUrl')}
      title={`${spell.get('name')} - ${spell.get('description')}`}
    />
  );
};

SpellIcon.propTypes = {
  data: PropTypes.instanceOf(Map).isRequired,
};

export default SpellIcon;
