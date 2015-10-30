import React, { Component, PropTypes } from 'react';
import { Map } from 'immutable';

export default class ChampionIcon extends Component {
  static propTypes = {
    data: PropTypes.instanceOf(Map).isRequired,
  }

  render() {
    const { data: champion } = this.props;

    return (
      <div>
        <img title={champion.get('name')}
          src={champion.get('imageUrl')}
          className="mb2"
        />
      </div>
    );
  }
}
