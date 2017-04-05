import mkUniverse from './universe/universe';

export default function(seed) {
  var initState = {
    seed: seed,
    db: [],
    ui: {
      treeFocus: 'l.1',
      selected_subject: 'l.1',
      default_page: '/l.1'
    }
  };

  initState = mkUniverse(initState);

  return initState;
}
