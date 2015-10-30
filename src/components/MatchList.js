import React, { Component, PropTypes } from 'react';
import {List} from 'immutable';
import Match from './Match';

export default class MatchList extends Component {
  static propTypes = {
    matches: PropTypes.instanceOf(List).isRequired,
  };

  render() {
    const { matches } = this.props;
    const jsxMatches = matches.map((match, index) => (
      <Match key={index} data={match}/>
    ));

    return (
      <div className="container">
        {jsxMatches}
      </div>
    );
  }
}
