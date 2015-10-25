import React from 'react';
import {Map, List} from 'immutable';

export default function(match) {
  const info = match.get('info', Map());
  const didWin = info.get('didWin', false);
  const queueType = info.get('queueType');
  const occurredAt = info.get('occurredAt');

  const champion = match.get('champion', Map());
  const spells = match.get('spells', List());
  const stats = match.get('stats', Map());
  const items = match.get('items', List());
  const trinket = match.get('trinket', null);

  const kills = stats.get('championsKilled', 0);
  const assists = stats.get('assists', 0);
  const deaths = stats.get('numDeaths', 0);
  const KDA = String((kills + assists) / (deaths || 1)).slice(0, 3);

  const creepsKilled = stats.get('minionsKilled', 0);
  const neutralCreepsKilled = stats.get('neutralMinionsKilled', 0);

  return (
    <div className="container">
    	<div className="md-col-12">
    	  <div className="overflow-hidden bg-white border rounded">
    	    <div className="p2 bg-silver">
    	      <span title={didWin ? 'Victory' : 'Defeat'}
              style={{float: 'right'}}
              className={ `bold inline-block px1 white rounded ${
                didWin ? 'bg-blue' : 'bg-red'
              }`}
            >
    	      	{didWin ? 'Victory' : 'Defeat'}
    	      </span>
    	      <h3 className="h3 m0">
              {queueType} - {occurredAt}
            </h3>
    	    </div>
    	    <div className="p2">
      			<div className="md-col-2 lg-col-2">
      			    <img title={champion.get('name')}
                  src={champion.get('imageUrl')}
                  className="mb2"
                />
      			    <h2 className="h2 mt0"
                  title={champion.get('name')}
                >
                  {champion.get('name')}
                </h2>
      			</div>
            <div className="md-col-2 lg-col-2 ">
              {
                spells.map((spell) => (
                  <img
                    title={`${spell.get('name')} - ${spell.get('description')}`}
                    src={spell.get('imageUrl')}
                    className="mb2"
                  />
                ))
              }
            </div>
            <div className="md-col-2 lg-col-2 ">
                <span title={kills}> {kills} /</span>
                <span title={deaths}> {deaths} /</span>
                <span title={assists}> {assists} </span> <br/>
                <span>KDA of <b>{KDA}</b></span>
            </div>
            <div className="md-col-2 lg-col-2 ">
                <span title={`Level ${stats.get('level')}`}>
                  Level {stats.get('level')}
                </span>
                <br/>
                <span
                  title={`Creeps ${creepsKilled} + Neutral Monsters${neutralCreepsKilled}`}>
                  CS {creepsKilled + neutralCreepsKilled}
                </span>
            </div>
            <div className="md-col-3 lg-col-3 ">
              {
                items.map(item => item
                  ? (<img
                      title={`${item.get('name')} - ${item.get('description')}`}
                      src={item.get('imageUrl')}
                      className="mb2"
                    />)
                  : null
                )
              }
            </div>
            <div className="md-col-1 lg-col-1 ">
              {
                trinket
                  ? (<img
                      title={
                        `${trinket.get('name')} - ${trinket.get('description')}`
                      }
                      src={trinket.get('imageUrl')}
                      className="mb2"
                    />)
                  : null
              }
            </div>
    	    </div>
    	  </div>
    	</div>
    </div>
  );
}
