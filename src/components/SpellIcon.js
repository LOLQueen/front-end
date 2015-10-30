import React, { Component, PropTypes } from 'react';
import { Map } from 'immutable';

export default class SpellIcon extends Component {
  static propTypes = {
    data: PropTypes.instanceOf(Map).isRequired,
  }

  render() {
    const { data: spell } = this.props;
    return (
      <img
        title={`${spell.get('name')} - ${spell.get('description')}`}
        src={spell.get('imageUrl')}
        className="mb2"
      />
    );
  }
}
