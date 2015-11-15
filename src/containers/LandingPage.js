import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

/*  http://howtocenterincss.com/ */
const styles = {
  'height': '100%',
  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'center',
  'flexDirection': 'column',
  'backgroundImage': 'url("./src/assets/landing.jpg")',
  'backgroundSize': 'cover',
};


class LandingPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div style={styles}>
        <h1 className="center m0 mb1">LOLQueen</h1>
        <h2 className="center m0 mb2 h4">
          Because why not.
        </h2>
        <form
          className="flex"
          onSubmit={::this.transitionToSummonerPage}
        >
          <select ref="region" className="block field not-round">
            <option value="na">North America</option>
            <option value="euw">Europe West</option>
            <option value="eue">Europe East</option>
            <option value="kr">Korea</option>
            <option value="ch">China</option>
          </select>
          <label>
            <span className="hide">Summoner Name</span>
            <input
              type="text"
              placeholder="Summoner Name"
              ref="summonerName"
              required
              className="block field"
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
    );
  }

  transitionToSummonerPage(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const summonerName = this.refs.summonerName.value;
    const region = this.refs.region.value;

    if (this.isValidSummonerName(summonerName)) {
      dispatch(pushState(null, `/${region}/summoners/${summonerName}`));
    } else {
      alert('Invalid summoner Name!');
    }
  }

  isValidSummonerName(summonerName) {
    return summonerName.length <= 16 && summonerName.length >= 3;
  }

}

function mapReduxStateToProps() {
  return {};
}

export default connect(mapReduxStateToProps)(LandingPage);
