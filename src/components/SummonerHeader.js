import React, { Component, PropTypes } from 'react';
import { Map } from 'immutable';

export default class SummonerHeader extends Component {
  static propTypes = {
    data: PropTypes.instanceOf(Map).isRequired,
  }

  render() {
    const { data: summoner } = this.props;
    // is info the correct key to get info from the summoner obj?
    const profileIcon = summoner.get('profileIcon', Map());
    const imgUrl = profileIcon.get('imageUrl');
    const summonerName = summoner.get('name');
    const level = summoner.get('level');
    return (
      <div className="container border mb4 mt2 rounded">
        <div className="p2 flex flex-center">
          <img className="mr1" src={imgUrl} />
          <div className="ml2 mr1 p1">
            <h1 className="m0 h1">{summonerName}</h1>
            <h2 className="m0 h2">level: {level}</h2>
          </div>
        </div>
      </div>
    );
  }
}
