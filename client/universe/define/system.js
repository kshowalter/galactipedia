import mkLocation from '../mkLocation';


export function summarize(state){
  this.name = _.upperFirst(this._console.chance.word());

  this.info.numPlanets = this._console.chance.natural({min:1,max:10});
  this.info.numStars = 1;

  for( var i = 1; i <= this.info.numStars; i++){
    var name = this.name;
    if( this.info.numStars !== 1 ){
      name = this.name +' '+ i;
    }

    var containedItemId = this._id +'.'+ this.contains.length;
    var star = state.db[containedItemId] = mkLocation(state, {
      type: 'star',
      _id: containedItemId,
      name: name,
      info: {}
    });
    star.info.classification = this._console.chance.pickone(
      star._spec.typeInfo.classifications.options('classification')
    );

    this.contains.push(containedItemId);
  }

  for( var i = 1; i <= this.info.numPlanets; i++){
    var containedItemId = this._id +'.'+ this.contains.length;
    var planet = state.db[containedItemId] = mkLocation(state, {
      type: 'planet',
      _id: containedItemId,
      name: name,
      info: {}
    });
    planet.info.classification = this._console.chance.pickone(
      planet._spec.typeInfo.classifications.options('classification')
    );
    planet.info.distance = this._console.chance.natural({min:0.1,max:33});

    this.contains.push(containedItemId);
  }

  this.illustration.image = {
    size: { w: 50, h: 50 },
    scale: 10,
    layer_attr: {

    },
    contains: [
      {
        type: 'circ',
        x: 250,
        y: 100,
        d: 50
      },
      {
        type: 'circ',
        x: 250,
        y: 200,
        d: 10
      }
    ]
  };

  return this;
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

  return this;
}
