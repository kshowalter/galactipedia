export const info = {
  // https://en.wikipedia.org/wiki/Stellar_classification
  classifications: {
    'Carbon': {
      category: 'Terrestrial'
    },
    'Coreless': {
      category: 'Terrestrial'
    },
    'Desert': {
      category: 'Terrestrial'
    },
    'Dwarf': {
      category: 'Terrestrial'
    },
    'Ice': {
      category: 'Terrestrial'
    },
    'Iron': {
      category: 'Terrestrial'
    },
    'Lava': {
      category: 'Terrestrial'
    },
    'Mega-Earth': {
      category: 'Terrestrial'
    },
    'Ocean': {
      category: 'Terrestrial'
    },
    'Sub-Earth': {
      category: 'Terrestrial'
    },
    'Super-Earth': {
      category: 'Terrestrial'
    },
    'Gas dwarf': {
      category: 'Gaseous'
    },
    'Helium': {
      category: 'Gaseous'
    },
    'Hot Jupiter': {
      category: 'Gaseous'
    },
    'Hot Neptune': {
      category: 'Gaseous'
    },
    'Ice giant': {
      category: 'Gaseous'
    },
    'Mini-Neptune': {
      category: 'Gaseous'
    },
    'Super-Jupiter': {
      category: 'Gaseous'
    }
  }
};


export function summarize(state, request){
  var chance = new Chance( state.seed + request._id);

  var containerId = request._id.split('.').slice(0,-1).join('.');
  var summary = {
    _id: request._id,
    containerId: containerId,
    type: 'planet',
    name: _.upperFirst(chance.word()),
    info: request.info
  };
  _.keys(info.classifications[summary.info.classification]).forEach(function(name){
    summary.info[name] = info.classifications[summary.info.classification][name];
  });
  state.db[summary._id] = summary;

  return state;
}
