import React, { PropTypes } from 'react';
import { Map } from 'immutable';

export default function ItemIcon({ data: item }) {
  if (! item) return <span />;
  return (
    <img
      title={`${item.get('name')} - ${item.get('description')}`}
      src={item.get('imageUrl')}
      className="mb2"
    />
  );
}

ItemIcon.propTypes = {
  data: PropTypes.instanceOf(Map),
};
