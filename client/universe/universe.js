
var mkItem = function(state, spec){
  var containerId = spec._id.split('.').slice(-2,-1);
  var item = {
    _id: spec._id,
    containerId: containerId,
    type: spec.type,
    name: spec.name,
    info: spec.info,
    contains: []
  };
  state.db[item._id] = item;

  spec.contentTypes.forEach( function(contentTypeConfig){
    for( var i = 0; i < contentTypeConfig.num; i++){
      var containedItemId = item._id +'.'+i;
      state = create[contentTypeConfig.type](state, containedItemId);
      item.contains.push(containedItemId);
    }
  });

  return state;
};




var create = {};

create.city = function(state, _id){
  var spec = {
    _id: _id,
    type: 'city',
    name: state.chance.word(),
    info: {
      population: state.chance.natural({min:10000,max:10000000})
    },
    contentTypes: []
  };

  return mkItem(state, spec);
};

create.mine = function(state, _id){
  var spec = {
    _id: _id,
    type: 'mine',
    name: state.chance.word(),
    info: {
      population: state.chance.natural({min:10,max:1000})
    },
    contentTypes: []
  };

  return mkItem(state, spec);
};



var planetClassifications = ['Earth-like', 'Gas', 'Rocky'];

create.planet = function(state, _id){
  var spec = {
    _id: _id,
    type: 'planet',
    name: state.chance.word(),
    info: {
      population: 0,
      classification: state.chance.pickone(planetClassifications)
    },
    hidden: {},
    contentTypes: []
  };

  if( spec.info.classification === planetClassifications[0]){
    spec.contentTypes.push(
      {
        type: 'city',
        num: state.chance.natural({min:1,max:10})
      }
    );
  } else if( spec.info.classification === planetClassifications[1]){
    spec.contentTypes.push(
      {
        type: 'mine',
        num: state.chance.natural({min:1,max:10})
      }
    );
  } else if( spec.info.classification === planetClassifications[2]){
    spec.contentTypes.push(
      {
        type: 'mine',
        num: state.chance.natural({min:1,max:10})
      }
    );
  }

  state = mkItem(state, spec);



  return state;
};


create.system = function(state, _id){
  var spec = {
    _id: _id,
    type: 'system',
    name: state.chance.word(),
    contentTypes: [
      {
        type: 'planet',
        num: state.chance.natural({min:1,max:10})
      }
    ]
  };

  return mkItem(state, spec);
};


create.galaxy = function(state, _id){
  var spec = {
    _id: _id,
    type: 'galaxy',
    name: state.chance.word(),
    contentTypes: [
      {
        type: 'system',
        num: state.chance.natural({min:1,max:1})
      }
    ]
  };

  return mkItem(state, spec);
};

create.universe = function(state, _id){
  var spec = {
    _id: _id,
    type: 'universe',
    name: state.chance.word(),
    contentTypes: [
      {
        type: 'galaxy',
        num: state.chance.natural({min:1,max:1})
      }
    ]
  };

  return mkItem(state, spec);
};



/////////////////////////////////////////////////
export default function(state){

  state = create['universe'](state, 'u');


  return state;
}
