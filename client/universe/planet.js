export const info = {
  // https://en.wikipedia.org/wiki/Stellar_classification
  classifications: [
    'Binary planet',
    'Carbon planet',
    'Chthonian planet',
    'Circumbinary planet',
    'Coreless planet',
    'Desert planet',
    'Dwarf planet',
    'Earth analog',
    'Eccentric Jupiter',
    'Exoplanet',
    'Extragalactic planet',
    'Gas giant',
    'Helium planet',
    'Hot Jupiter',
    'Hot Neptune',
    'Ice giant',
    'Inner planet',
    'Iron planet',
    'Lava planet',
    'Mesoplanet',
    'Mini-Neptune',
    'Minor planet',
    'Ocean planet',
    'Outer planet',
    'Plutoid',
    'Protoplanet',
    'Puffy planet',
    'Pulsar planet',
    'Rogue planet',
    'Sub-brown dwarf',
    'Sub-stellar object',
    'Super-Earth',
    'Super-Jupiter',
    'Terrestrial planet',
    'Trojan planet'
  ]

};


export function summarize(state, request){
  var chance = new Chance( state.seed + request._id);

  var containerId = request._id.split('.').slice(0,-1).join('.');
  var summary = {
    _id: request._id,
    containerId: containerId,
    type: 'planet',
    classification: request.classification,
    name: chance.word()
  };
  state.db[summary._id] = summary;

  return state;
}
