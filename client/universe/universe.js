
var mkItem = function(universe, spec){
  var containerId = spec._id.split('.').slice(-2,-1);
  var item = {
    _id: spec._id,
    containerId: containerId,
    type: spec.type,
    name: spec.name,
    info: spec.info,
    contains: []
  };
  universe.db[item._id] = item;

  spec.contentTypes.forEach( function(contentTypeConfig){
    for( var i = 0; i < contentTypeConfig.num; i++){
      var containedItemId = item._id +'.'+i;
      universe = create[contentTypeConfig.type](universe, containedItemId);
      item.contains.push(containedItemId);
    }
  });

  return universe;
};




var create = {};

create.city = function(universe, _id){
  var spec = {
    _id: _id,
    type: 'city',
    name: universe.chance.word(),
    info: {
      population: universe.chance.natural({min:10000,max:10000000})
    },
    contentTypes: []
  };

  return mkItem(universe, spec);
};

create.mine = function(universe, _id){
  var spec = {
    _id: _id,
    type: 'mine',
    name: universe.chance.word(),
    info: {
      population: universe.chance.natural({min:10,max:1000})
    },
    contentTypes: []
  };

  return mkItem(universe, spec);
};



var planetClassifications = ['Earth-like', 'Gas', 'Rocky'];

create.planet = function(universe, _id){
  var spec = {
    _id: _id,
    type: 'planet',
    name: universe.chance.word(),
    info: {
      population: 0,
      classification: universe.chance.pickone(planetClassifications)
    },
    hidden: {},
    contentTypes: []
  };

  if( spec.info.classification === planetClassifications[0]){
    spec.contentTypes.push(
      {
        type: 'city',
        num: universe.chance.natural({min:1,max:10})
      }
    );
  } else if( spec.info.classification === planetClassifications[1]){
    spec.contentTypes.push(
      {
        type: 'mine',
        num: universe.chance.natural({min:1,max:10})
      }
    );
  } else if( spec.info.classification === planetClassifications[2]){
    spec.contentTypes.push(
      {
        type: 'mine',
        num: universe.chance.natural({min:1,max:10})
      }
    );
  }

  universe = mkItem(universe, spec);



  return universe;
};


create.system = function(universe, _id){
  var spec = {
    _id: _id,
    type: 'system',
    name: universe.chance.word(),
    contentTypes: [
      {
        type: 'planet',
        num: universe.chance.natural({min:1,max:10})
      }
    ]
  };

  return mkItem(universe, spec);
};


create.galaxy = function(universe, _id){
  var spec = {
    _id: _id,
    type: 'galaxy',
    name: universe.chance.word(),
    contentTypes: [
      {
        type: 'system',
        num: universe.chance.natural({min:1,max:1})
      }
    ]
  };

  return mkItem(universe, spec);
};



/////////////////////////////////////////////////
export default function(seed){
  var chance = new Chance(seed);

  var universe = {
    chance: chance,
    db: {
      'u': {
        type: 'universe',
        contains: []
      }
    },
    lastID: 0
  };

  var numGalaxies = 1; //chance.natural({min:1,max:10});
  for( var i = 0; i < numGalaxies; i++){
    universe = create.galaxy(universe, 'u');
  }



  universe.contains = universe.db['u'].contains;
  return universe;
}
