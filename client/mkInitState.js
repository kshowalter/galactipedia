import createUniverse from './universe/universe';

export default function(seed) {
  var initState = {
    chance: new Chance(seed),
    db: [],
    ui: {
      treeFocus: 'l',
      selectedSubject: 'l'
    }
  };

  initState = createUniverse(initState);

  return initState;
}
