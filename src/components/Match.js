import React, { PropTypes } from 'react';
import { Map, List } from 'immutable';

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

  return (
    <div className="mb3 border rounded">
      <div className="flex flex-justify flex-center">
        <ChampionIcon data={champion} />
        <MatchStats data={stats} />
        <div>{spellsJSX}</div>
        <div>{itemsJSX}</div>
        <ItemIcon data={trinket} />
      </div>
    </div>
  );
};

Match.propTypes = {
  data: PropTypes.instanceOf(Map).isRequired,
};

export default Match;
