import React, { Component, PropTypes } from 'react';
import { Map } from 'immutable';

export default class MatchSummary extends Component {
  static propTypes = {
    data: PropTypes.instanceOf(Map).isRequired,
  }

  render() {
    const { data: match } = this.props;
    const info = match.get('info', Map());

    const queueType = info.get('queueType', '').replace(/_/g, ' ');
    const occurredAt = new Date(info.get('occurredAt')).toISOString();

    return (
      <div className="flex flex-justify bg-silver">
        <div className="m1">
          <div className="center bold h5">QUEUE TYPE</div>
          <div className="center h4">{queueType}</div>
        </div>
        <div className="m1">
          <div className="center bold h5">WHEN</div>
          <div className="center h4">{occurredAt}</div>
        </div>
        <div className="m1">
          <div className="center bold h5">DURATION</div>
          <div className="center h4">{info.get('gameLength') || 'null'}</div>
        </div>
        <div className="m1">
          <div className="center bold h5">RESULT</div>
          <div className="center h4">{info.get('didWin') ? 'Won!' : 'Lost!'}</div>
        </div>
      </div>
    );
  }
}
