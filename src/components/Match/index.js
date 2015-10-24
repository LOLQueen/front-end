import React, { Component, PropTypes } from 'react';
import { Map } from 'immutable';
import template from './template';

export default class Match extends Component {
  static propTypes = {
    data: PropTypes.instanceOf(Map).isRequired,
  }

  render() {
    const { data: match } = this.props;
    return (
      <div>
        {template(match)}
      </div>
    );
  }
}
