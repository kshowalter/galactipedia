import mkLocation from './mkLocation';

import Kstore from 'kstore';

export const typeInfo = {
  // https://en.wikipedia.org/wiki/Orion_Arm#/media/File:Milky_Way_Arms_ssc2008-10.svg
  solDistance: 27200 // light-years
};



/////////////////////////////////////////////////
export default function(state){

  //state = create['universe'](state, 'l');

  var reality = {
    _id: 'l',
    type: 'Universe',
    name: 'Prime Reality',
    contains: []
  };
  state.db[reality._id] = reality;

  var galaxy = {
    _id: 'l.1',
    containerId: 'l',
    type: 'galaxy',
    name: 'Origin',
    info: {},
    contains: [],
    _console: {}
  };
  galaxy._console.chance = new Chance( state.seed + galaxy._id);
  state.db[reality._id].contains.push(galaxy._id);
  state.db[galaxy._id] = galaxy;

  for( var i = 2; i <= 42; i++ ){
    var containedItemId = 'l.1.' + i;
    state.db[containedItemId] = mkLocation(state, {
      type: 'system',
      _id: containedItemId
    });

    galaxy.contains.push(containedItemId);

  }

  console.log(state);

  return state;
}
