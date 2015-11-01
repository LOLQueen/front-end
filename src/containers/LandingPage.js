import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

/*  http://howtocenterincss.com/ */
const styles = {
  'height': '100%',
  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'center',
  'background-image': 'url("./src/assets/landing.jpg")',
  'background-size': '100% 100%',
};

@connect(mapReduxStateToProps)
export default class LandingPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div style={styles}>
        <form
          onSubmit={::this.transitionToSummonerPage}
        >
          <select ref="region">
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
    const summonerName = React.findDOMNode(this.refs.summonerName).value;
    const region = React.findDOMNode(this.refs.region).value;

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
