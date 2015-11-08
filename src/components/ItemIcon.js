import React, { PropTypes } from 'react';
import { Map } from 'immutable';

const ItemIcon = ({ data: item }) => {
  if (! item) return <span />;
  return (
    <img style={style}
      src={item.get('imageUrl')}
      title={`${item.get('name')} - ${item.get('description')}`}
    />
  );
};

ItemIcon.propTypes = {
  data: PropTypes.instanceOf(Map),
};

const style = {
  boxShadow: '0 0 0.125rem white',
};

export default ItemIcon;
