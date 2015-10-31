import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

@connect(mapReduxStateToProps)
export default class LandingPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  /*
   *  Placing the state inside redux state causes a
   *  huge performance drain.
   */
  state = {
    region: 'na',
    summonerName: '',
  };

  render() {
    const { region } = this.state;
    return (
      <form onSubmit={::this.transitionToSummonerPage}>
        <input
          type="text"
          placeholder="Summoner Name"
          onChange={::this.updateSummonerName}
        />
        <select value={region} onChange={::this.updateRegion}>
          <option value="na">North America</option>
          <option value="euw">Europe West</option>
          <option value="eue">Europe East</option>
          <option value="kr">Korea</option>
          <option value="ch">China</option>
        </select>
        <button type="submit">Search</button>
      </form>
    );
  }

  updateRegion(event) {
    event.preventDefault();
    this.setState({ region: event.target.value });
  }

  updateSummonerName(event) {
    event.preventDefault();
    this.setState({ summonerName: event.target.value });
  }

  transitionToSummonerPage(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const { region, summonerName } = this.state;
    dispatch(pushState(null, `/${region}/summoners/${summonerName}`));
  }
}

function mapReduxStateToProps() {
  return {};
}
