import mkUniverse from './universe/universe';

export default function(seed) {
  var initState = {
    seed: seed,
    db: [],
    ui: {
      treeFocus: 'l',
      selectedSubject: 'l'
    }
  };

  initState = mkUniverse(initState);

  return initState;
}
