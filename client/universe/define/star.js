// http://www.atlasoftheuniverse.com/startype.html
import Kstore from 'kstore';

export const typeInfo = {
  // https://en.wikipedia.org/wiki/Stellar_classification
  classifications: Kstore([
    {
      'classification': 'O',
      'Color': 'Blue',
      'Aprox surface temp': 'over 25,000 K',
      'Average mass':0,
      'Average radius':   15,
      'Average Luminocity': 1400000,
      'Characteristics': 'Singly ionized helium lines (H I) either in emission or absorption. Strong UV continuum.'
    },
    {
      'classification': 'B',
      'Color': 'Blue',
      'Aprox surface temp': '11,000 - 25,000 K',
      'Average mass':8,
      'Average radius': 7,
      'Average Luminocity': 20000,
      'Characteristics': 'Neutral helium lines (H II) in absorption.'
    },
    {
      'classification': 'A',
      'Color': 'Blue',
      'Aprox surface temp': '7,500 - 11,000 K',
      'Average mass': 3.2,
      'Average radius': 2.5,
      'Average Luminocity': 80,
      'Characteristics': 'Hydrogen (H) lines strongest for A0 stars, decreasing for other A\'s.'
    },
    {
      'classification': 'F',
      'Color': 'Blue to White',
      'Aprox surface temp': '6,000 - 7,500 K',
      'Average mass': 1.7,
      'Average radius': 1.3,
      'Average Luminocity': 6,
      'Characteristics': 'Ca II absorption. Metallic lines become noticeable.'
    },
    {
      'classification': 'G',
      'Color': 'White to Yellow',
      'Aprox surface temp': '5,000 - 6,000 K',
      'Average mass': 1.1,
      'Average radius': 1.1,
      'Average Luminocity': 1.2,
      'Characteristics': 'Absorption lines of neutral metallic atoms and ions (e.g. once-ionized calcium).'
    },
    {
      'classification': 'K',
      'Color': 'Orange to Red',
      'Aprox surface temp': '3,500 - 5,000 K',
      'Average mass': 0.8,
      'Average radius': 0.9,
      'Average Luminocity': 0.4,
      'Characteristics': 'Metallic lines, some blue continuum.'
    },
    {
      'classification': 'M',
      'Color': 'Red',
      'Aprox surface temp': 'under 3,500 K',
      'Average mass': 0.3,
      'Average radius': 0.4,
      'Average Luminocity': 0.04,
      'Characteristics': 'Some molecular bands of titanium oxide.'
    }
  ])
};





export function summarize(state){
  //this.name = _.upperFirst(this._console.chance.word());

  return this;
}

export function addDetails(state){

  return this;
}
