import React, { PropTypes } from 'react';
import { Map } from 'immutable';
import Match from './Match';

const MatchList = ({ matches }) => {
  const data = matches.get('data', Map());
  const jsxMatches = data.map((match, index) => (
    <Match key={index} data={match}/>
  ));

  return (
    <div className="container">
      {jsxMatches.valueSeq()}
    </div>
  );
};

MatchList.propTypes = {
  matches: PropTypes.instanceOf(Map).isRequired,
};

export default MatchList;
