import mkLocation from '../mkLocation';


export function summarize(state, request){
  var chance = new Chance( state.seed + request._id);

  var containerId = request._id.split('.').slice(0,-1).join('.');
  var summary = {
    _id: request._id,
    containerId: containerId,
    type: 'system',
    name: _.upperFirst(chance.word()),
    info: {
      numPlanets: chance.natural({min:1,max:10})
    },
    console: {
      chance: chance
    },
    contains: []

  };
  state.db[summary._id] = summary;

  var numStars = 1;
  for( var i = 1; i <= numStars; i++){
    var containedItemId = summary._id +'.'+ summary.contains.length;
    var name = summary.name;
    if( numStars !== 1 ){
      name = summary.name +' '+ i;
    }
    state = mkLocation['star'].summarize(state, {
      _id: containedItemId,
      name: name,
      info: {
        classification: chance.pickone(_.keys(mkLocation['star'].info.classifications))
      }
    });
    summary.contains.push(containedItemId);
  }

  var numPlanets = chance.natural({min:1,max:12});
  for( var i = 1; i <= numPlanets; i++){
    var containedItemId = summary._id +'.'+ summary.contains.length;
    state = mkLocation['planet'].summarize(state, {
      _id: containedItemId,
      info: {
        classification: chance.pickone(_.keys(mkLocation['planet'].info.classifications)),
        distance: chance.natural({min:0.1,max:33})
      }
    });
    summary.contains.push(containedItemId);
  }


  return state;
}

export  function addDetails(state, _id){
  var summary = state.db[_id];

  var details = Object.assign({}, summary, {
    contains: []
  });
  state.db[_id] = details;

  //for( var i = 1; i <= summary.info.numPlantes; i++){
  //  var containedItemId = details._id +'.'+i;
  //  state = mkLocation['planet'].summarize(state, {
  //    _id: containedItemId
  //  });
  //  details.contains.push(containedItemId);
  //}

  return state;
}
