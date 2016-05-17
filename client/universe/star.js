
export const info = {
  // https://en.wikipedia.org/wiki/Stellar_classification
  classifications: ['O','B','A','F','G','K','M']
};


export function summarize(state, request){
  //var chance = new Chance( state.seed + request._id);

  var containerId = request._id.split('.').slice(0,-1).join('.');
  var summary = {
    _id: request._id,
    containerId: containerId,
    type: 'star',
    classification: request.classification,
    name: request.name
  };
  state.db[summary._id] = summary;

  return state;
}
