import React, { PropTypes } from 'react';
import { Map } from 'immutable';

export const TrinketIcon = ({ data: trinket }) => {
  if (! trinket) return <span />;
  return (
    <img
      title={`${trinket.get('name')} - ${trinket.get('description')}`}
      src={trinket.get('imageUrl')}
      className="mb2"
    />
  );
};

TrinketIcon.propTypes = {
  data: PropTypes.instanceOf(Map),
};

export default TrinketIcon;
