// http://www.atlasoftheuniverse.com/startype.html


export const info = {
  // https://en.wikipedia.org/wiki/Stellar_classification
  classifications: {
    'O': {
      'Color': 'Blue',
      'Aprox surface temp': 'over 25,000 K',
      'Average mass':0,
      'Average radius':   15,
      'Average Luminocity': 1400000,
      'Characteristics': 'Singly ionized helium lines (H I) either in emission or absorption. Strong UV continuum.'
    },
    'B': {
      'Color': 'Blue',
      'Aprox surface temp': '11,000 - 25,000 K',
      'Average mass':8,
      'Average radius': 7,
      'Average Luminocity': 20000,
      'Characteristics': 'Neutral helium lines (H II) in absorption.'
    },
    'A': {
      'Color': 'Blue',
      'Aprox surface temp': '7,500 - 11,000 K',
      'Average mass': 3.2,
      'Average radius': 2.5,
      'Average Luminocity': 80,
      'Characteristics': 'Hydrogen (H) lines strongest for A0 stars, decreasing for other A\'s.'
    },
    'F': {
      'Color': 'Blue to White',
      'Aprox surface temp': '6,000 - 7,500 K',
      'Average mass': 1.7,
      'Average radius': 1.3,
      'Average Luminocity': 6,
      'Characteristics': 'Ca II absorption. Metallic lines become noticeable.'
    },
    'G': {
      'Color': 'White to Yellow',
      'Aprox surface temp': '5,000 - 6,000 K',
      'Average mass': 1.1,
      'Average radius': 1.1,
      'Average Luminocity': 1.2,
      'Characteristics': 'Absorption lines of neutral metallic atoms and ions (e.g. once-ionized calcium).'
    },
    'K': {
      'Color': 'Orange to Red',
      'Aprox surface temp': '3,500 - 5,000 K',
      'Average mass': 0.8,
      'Average radius': 0.9,
      'Average Luminocity': 0.4,
      'Characteristics': 'Metallic lines, some blue continuum.'
    },
    'M': {
      'Color': 'Red',
      'Aprox surface temp': 'under 3,500 K',
      'Average mass': 0.3,
      'Average radius': 0.4,
      'Average Luminocity': 0.04,
      'Characteristics': 'Some molecular bands of titanium oxide.'
    }
  }
};





export function summarize(state, request){
  //var chance = new Chance( state.seed + request._id);

  var containerId = request._id.split('.').slice(0,-1).join('.');
  var summary = {
    _id: request._id,
    containerId: containerId,
    type: 'star',
    name: request.name,
    info: request.info
  };
  _.keys(info.classifications[summary.info.classification]).forEach(function(name){
    summary.info[name] = info.classifications[summary.info.classification][name];
  });
  state.db[summary._id] = summary;

  return state;
}