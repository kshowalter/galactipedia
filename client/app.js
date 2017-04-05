/**
 * this is the app
 * @file_overview this the starting point for the application.
 * @author keith showalter {@link https://github.com/kshowalter}
 * @version 0.1.0
 */

import router from './router';

import f from './functions';

var global = window || global;

global.logger = console.log;
global.f = f;








var reducer = require('./reducer');
import Actions from './actions';




var create_store = require('redux').createStore;

var seed = 'phoebe_willow';


/** @module */
import mk_init_state from './mk_init_state';
var init_state = mk_init_state(seed);
//console.log(init_state);

/** create the store */
var store = create_store(reducer, init_state);

/** @module */

var custom_actions = {
  route: function(new_subject_id){
    return {
      type: 'route',
      subject_id: new_subject_id
    };
  },
};


var actions = Actions(store, custom_actions);

/** @module view */
//var view = require('./view');
import View from './view/view';

var view = View(store, actions);

var selected_subject = sessionStorage.getItem('selected_subject');
if( selected_subject ){
  actions.route(selected_subject);
}

router(actions);

export default {
  default_page: '/l.1'

};

/** anonymous function that runs when the store is updated. */
store.subscribe(function(){
  var state = store.getState();
  window.state = state; // devmode
  console.log('state change: ', state);

  sessionStorage.setItem('selected_subject', state.ui.selected_subject);

  view.update();
});



store.dispatch({
  type: 'init'
});

window.onresize = function(){
  //console.log(window.inner_width);
};

console.log('done');
