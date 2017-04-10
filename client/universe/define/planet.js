import Kstore from 'kstore';

export const typeInfo = {
  classifications: Kstore([
    {
      classification: 'Carbon',
      category: 'Terrestrial'
    },
    {
      classification: 'Coreless',
      category: 'Terrestrial'
    },
    {
      classification: 'Desert',
      category: 'Terrestrial'
    },
    {
      classification: 'Dwarf',
      category: 'Terrestrial'
    },
    {
      classification: 'Ice',
      category: 'Terrestrial'
    },
    {
      classification: 'Iron',
      category: 'Terrestrial'
    },
    {
      classification: 'Lava',
      category: 'Terrestrial'
    },
    {
      classification: 'Mega-Earth',
      category: 'Terrestrial'
    },
    {
      classification: 'Ocean',
      category: 'Terrestrial'
    },
    {
      classification: 'Sub-Earth',
      category: 'Terrestrial'
    },
    {
      classification: 'Super-Earth',
      category: 'Terrestrial'
    },
    {
      classification: 'Gas dwarf',
      category: 'Gaseous'
    },
    {
      classification: 'Helium',
      category: 'Gaseous'
    },
    {
      classification: 'Hot Jupiter',
      category: 'Gaseous'
    },
    {
      classification: 'Hot Neptune',
      category: 'Gaseous'
    },
    {
      classification: 'Ice giant',
      category: 'Gaseous'
    },
    {
      classification: 'Mini-Neptune',
      category: 'Gaseous'
    },
    {
      classification: 'Super-Jupiter',
      category: 'Gaseous'
    }
  ])
};

var crust_content = {
  terrestrial: function(chance){
    var chemicals = {
      'silica (SiO2)': {min:40,max:70},
      'alumina (Al2O3)': {min:5,max:30},
      'lime (CaO)': {min:1,max:15},
      'magnesia (MgO)': {min:0,max:10},
      'iron(II) oxide (FeO)': {min:0,max:10},
      'sodium oxide (Na2O)': {min:0,max:5},
      'potassium oxide (K2O)': {min:0,max:4},
      'iron(III) oxide (Fe2O3)': {min:0,max:3},
      'water (H2O)': {min:0,max:3},
      'carbon dioxide (CO2)': {min:0,max:3},
      'titanium dioxide (TiO2)': {min:0,max:3},
      'phosphorus pentoxide (P2O5)': {min:0,max:3},
    };

    var high = [];
    var low = [];
    for( var name in chemicals ){
      var chemical = chemicals[name];
      chemical.name = name;
      var avg = ( chemical.min + chemical.max )/2;
      var dev = ( chemical.max - avg ) * 7/8;
      chemical.value = chance.floating({min:chemical.min,max:chemical.max});
      if( chemical.value > avg+dev ){
        high.push(chemical);
      }
      if( chemical.value < avg-dev ){
        low.push(chemical);
      }
    }
    return {
      chemicals: chemicals,
      low: low,
      high: high
    };
  }
};



export function summarize(state){
  this.name = _.upperFirst(this._console.chance.word());

  this.crust_content = crust_content['terrestrial'](this._console.chance);

  var crust_description = '';

  if( this.crust_content.high.length || this.crust_content.low.length ){
    crust_description += 'The surface of ' + this.name;
    if( this.crust_content.high.length ){
      crust_description += ' is high in ' + this.crust_content.high.map(function(chemical){return chemical.name;}).join(', ');
    }
    if( this.crust_content.high.length && this.crust_content.low.length ){
      crust_description += ', and';
    }
    if( this.crust_content.low.length ){
      crust_description += ' is low in ' + this.crust_content.low.map(function(chemical){return chemical.name;}).join(', ');
    }
    crust_description += '. ';
  }

  this.description.push(crust_description);

  return this;
}

export function addDetails(state){

  return this;
}
