var mapInfo = {
  solDistance: 27200 // light-years
  // https://en.wikipedia.org/wiki/Orion_Arm#/media/File:Milky_Way_Arms_ssc2008-10.svg
};



import mkLocation from './mkLocation';

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
    console: {}
  };
  galaxy.console.chance = new Chance( state.seed + galaxy._id);
  state.db[reality._id].contains.push(galaxy._id);
  state.db[galaxy._id] = galaxy;

  for( var i = 2; i <= 42; i++ ){
    var containedItemId = 'l.1.' + i;
    state = mkLocation['system'].summarize(state, {
      _id: containedItemId
    });
    galaxy.contains.push(containedItemId);

  }

  console.log(state);

  return state;
}
