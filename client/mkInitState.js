import createUniverse from './universe/universe';

export default function(seed) {
  var initState = {
    universe: createUniverse(seed),
    ui: {
      treeFocus: '',
      selectedItem: ''
    }
  };


  return initState;
}
