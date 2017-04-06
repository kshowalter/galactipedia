import Actions from './Actions';
import Reducer from './Reducer';
import router from './router';
import Specdom  from 'specdom';

var global = window || global;

export default function(target_DOM, init_state, custom_actions, custom_reducers, on_change){
  var target_id = target_DOM.id;
  var specdom = Specdom('#'+target_id);

  var reducer = Reducer(custom_reducers);
  
  var create_store = require('redux').createStore;
  var store = create_store(reducer, init_state);
  var actions = Actions(store, custom_actions);


  var stored_route = sessionStorage.getItem('route');
  if( stored_route ){
    actions.route(stored_route);
  }

  router(actions);

  /** anonymous function that runs when the store is updated. */
  store.subscribe(function(){
    var state = store.getState();
    global.state = state; // devmode
    console.log('state change: ', state);

    sessionStorage.setItem('selected_subject', state.ui.selected_subject);

    var page_spec = on_change(state, actions);

    specdom.load(page_spec);

    //store.dispatch({
    //  type: 'init'
    //});
  });


}
