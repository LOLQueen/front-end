import React, { PropTypes } from 'react';
import { Map } from 'immutable';
import { SCALE } from '../utils';

const ItemIcon = ({ data: item }) => {
  if (! item) return <span />;
  return (
    <img src={item.get('imageUrl')}
      title={`${item.get('name')} - ${item.get('description')}`}
      style={styles}
    />
  );
};

ItemIcon.propTypes = {
  data: PropTypes.instanceOf(Map),
};

const styles = {
  boxShadow: `0 0 ${SCALE(-5)} white`,
  width: SCALE(1),
  height: SCALE(1),
};

export default ItemIcon;
