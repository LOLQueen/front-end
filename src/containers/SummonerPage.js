import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchSummoner } from '../action-creators/SummonerPage';
import MatchList from '../components/MatchList';

import {Map, List} from 'immutable';

@connect(mapReduxStateToProps)
export default class SummonerPage extends Component {
  static propTypes = {
    region: PropTypes.string.isRequired,
    summonerName: PropTypes.string.isRequired,
    summoner: PropTypes.instanceOf(Map).isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentWillMount() {
    const { dispatch, region, summonerName } = this.props;
    dispatch(fetchSummoner(region, summonerName));
  }

  render() {
    const { summonerName, region, summoner } = this.props;
    return (
      <div>
        <h2> Hi, {summonerName} from {region} </h2>
        <MatchList matches={summoner.get('matches', List())} />
      </div>
    );
  }
}

function mapReduxStateToProps(state) {
  const { region, summonerName } = state.router.params;
  const selected = state.lolqueen.get('selectedSummoner');
  const summoner = state.lolqueen.getIn(['summoners', selected], Map());
  return {
    region: region,
    summonerName: summonerName,
    summoner: summoner,
  };
}
