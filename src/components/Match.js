import React, { PropTypes } from 'react';
import { Map, List } from 'immutable';
import { merge } from 'ramda';

import { SCALE } from '../utils';

/*  Components  */
import ItemIcon from './ItemIcon';
import SpellIcon from './SpellIcon';
import ChampionIcon from './ChampionIcon';
import MatchStats from './MatchStats';

const Match = ({ data: match }) => {
  const spells = match.get('spells', List());
  const items = match.get('items', List());
  const trinket = match.get('trinket', null);
  const champion = match.get('champion', null);
  const stats = match.get('stats', null);

  const spellsJSX = spells.map((spell, index) => (
    <SpellIcon key={index} data={spell} />
  ));

  const itemsJSX = items.map((item, index) => (
    <ItemIcon key={index} data={item}/>
  ));

  const didWin = match.getIn(['info', 'didWin'], false);

  return (
    <div className="flex rounded mb1"
      style={styles[didWin]}>
      <ChampionIcon data={champion} />
      <div className="flex flex-justify flex-center flex-grow px3">
        <MatchStats data={stats}/>
        <div className="flex flex-justify flex-grow px3">
          <div> {itemsJSX} </div>
          <ItemIcon data={trinket} />
        </div>
        <div> {spellsJSX} </div>
      </div>
    </div>
  );
};

Match.propTypes = {
  data: PropTypes.instanceOf(Map).isRequired,
};

const base = {
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
};

const styles = {
  true: merge(base, {
    boxShadow: `0 0 ${SCALE(-2)} ${SCALE(-100)} green`,
  }),
  false: merge(base, {
    boxShadow: `0 0 ${SCALE(-2)} ${SCALE(-100)} red`,
  }),
};

export default Match;
