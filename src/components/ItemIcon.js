import React, { Component, PropTypes } from 'react';
import { Map } from 'immutable';

export default class ItemIcon extends Component {
  static propTypes = {
    data: PropTypes.instanceOf(Map),
  }

  render() {
    const { data: item } = this.props;
    if (! item) return null;
    return (
      <img
        title={`${item.get('name')} - ${item.get('description')}`}
        src={item.get('imageUrl')}
        className="mb2"
      />
    );
  }
}
