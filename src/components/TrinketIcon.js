import React, { Component, PropTypes } from 'react';
import { Map } from 'immutable';

export default class TrinketIcon extends Component {
  static propTypes = {
    data: PropTypes.instanceOf(Map),
  }

  render() {
    const { data: trinket } = this.props;
    if (! trinket) return null;
    return (
      <img
        title={`${trinket.get('name')} - ${trinket.get('description')}`}
        src={trinket.get('imageUrl')}
        className="mb2"
      />
    );
  }
}
