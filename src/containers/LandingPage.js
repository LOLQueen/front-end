import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

@connect(mapReduxStateToProps)
export default class LandingPage extends Component {
  state = {
    region: 'na',
    summoner: '',
  };

  render() {
    const { region, summoner } = this.state;
    return (
      <form>
        <input
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
        <Link to={`/${region}/summoners/${summoner}`}>
          Search
        </Link>
      </form>
    );
  }

  updateSelection(event) {
    this.setState({region: event.target.value});
  }

  updateSummonerName(event) {
    this.setState({summoner: event.target.value});
  }
}

function mapReduxStateToProps() {
  return {};
}
