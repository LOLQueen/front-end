import React, { PropTypes } from 'react';
import { Map } from 'immutable';

export default function SpellIcon({ data: spell }) {
  return (
    <img className="mb2"
      title={`${spell.get('name')} - ${spell.get('description')}`}
      src={spell.get('imageUrl')}
    />
  );
}

SpellIcon.propTypes = {
  data: PropTypes.instanceOf(Map).isRequired,
};
