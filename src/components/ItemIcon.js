import React, { PropTypes } from 'react';
import { Map } from 'immutable';

const ItemIcon = ({ data: item }) => {
  if (! item) return <span />;
  return (
    <img src={item.get('imageUrl')}
      title={`${item.get('name')} - ${item.get('description')}`}
    />
  );
};

ItemIcon.propTypes = {
  data: PropTypes.instanceOf(Map),
};

export default ItemIcon;
