import * as system from './define/system';
import * as star from './define/star';
import * as planet from './define/planet';



var mkType = {
  system: system,
  star: star,
  planet: planet
};


export default function(state, request){
  var containerId = request._id.split('.').slice(0,-1).join('.');
  var chance = new Chance( state.seed + request._id);

  var location = {
    _id: request._id,
    containerId: containerId,
    type: request.type,
    name: 'unknown',
    info: request.info || {},
    _console: {
      chance: chance
    },
    _spec: mkType[request.type],
    contains: [],
    illustration: {}
  };
  location.summarize = mkType[request.type].summarize;
  location.addDetails = mkType[request.type].addDetails;

  location.summarize(state);
  return location;
}
