import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';

import { fetchSummonerIfNeeded } from '../action-creators';
import { makeKey } from '../utils';

import MatchList from '../components/MatchList';
import SummonerHeader from '../components/SummonerHeader';

class SummonerPage extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    summoner: PropTypes.instanceOf(Map).isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  componentWillMount() {
    const { dispatch } = this.props;
    const { region, summonerName } = this.props.params;
    dispatch(fetchSummonerIfNeeded(region, summonerName));
  }

  render() {
    const { summoner } = this.props;
    return (
      <div className="p2" style={styles.summonerPage}>
        <div className="container flex flex-column flex-end">
          <div style={{ width: '100%' }}>
            <SummonerHeader data={summoner.get('data')}/>
          </div>
          <div style={styles.matchList}>
            <MatchList matches={summoner.get('matches', List())} />
          </div>
        </div>
      </div>
    );
  }
}

function mapReduxStateToProps(state) {
  const { region, summonerName: name } = state.router.params;
  const { main } = state;
  const key = makeKey({ region, name });

  const matches = main.getIn(['entities', 'matches'], Map());
  const summoner = main.getIn(['summoners', key], Map());
  const matchIds = summoner.getIn(['matches', 'ids'], List());

  return {
    params: state.router.params,
    summoner: summoner.mergeDeep({
      data: main.getIn(['entities', 'summoners', key], Map()),
      matches: {
        data: matches.filter((value, id) => matchIds.includes(id)),
      },
    }),
  };
}

const styles = {
  summonerPage: {
    backgroundImage: `url(${require('../assets/summoner-page.png')})`,
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
  },
  matchList: {
    width: '100%',
  },
};

export default connect(mapReduxStateToProps)(SummonerPage);
