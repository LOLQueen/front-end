import React, { Component, PropTypes } from 'react';
import { Map } from 'immutable';

export default class SummonerHeader extends Component {
  static propTypes = {
    data: PropTypes.instanceOf(Map).isRequired,
  }

  render() {
    const { data: summoner } = this.props;
    console.log(summoner.toJS());
    // is info the correct key to get info from the summoner obj?
    const profileIcon = summoner.get('profileIcon', Map());
    return (
      <div>
        <img
          src={profileIcon.get('imageUrl')}
        />
        <span>{summoner.get('name')}</span>
        <span>{summoner.get('level')}</span>
      </div>
    );
  }
}
