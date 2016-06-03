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


export function summarize(state){
  this.name = _.upperFirst(this._console.chance.word());

  return this;
}

export function addDetails(state){

  return this;
}
