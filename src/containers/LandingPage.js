import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
// import { Link } from 'react-router';

@connect(mapReduxStateToProps)
export default class LandingPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  state = {
    region: 'na',
    summonerName: '',
  };

  render() {
    const { region, summonerName } = this.state;
    return (
      <form onSubmit={::this.transitionToSummonerPage}>
        <input
          value={summonerName}
          type="text"
          placeholder="Summoner Name"
          onChange={::this.updateSummonerName}
        />
        <select value={region} onChange={::this.updateSelection}>
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

  updateSelection(event) {
    this.setState({region: event.target.value});
  }

  updateSummonerName(event) {
    this.setState({summonerName: event.target.value});
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
