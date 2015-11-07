import React, { Component, PropTypes } from 'react';
import { Map } from 'immutable';
import Match from './Match';

export default class MatchList extends Component {
  static propTypes = {
    matches: PropTypes.instanceOf(Map).isRequired,
  };

  render() {
    const { matches } = this.props;

    const data = matches.get('data', Map());
    const jsxMatches = data.map((match, index) => (
      <Match key={index} data={match}/>
    ));

    return (
      <div className="container">
        {jsxMatches.valueSeq()}
      </div>
    );
  }
}
