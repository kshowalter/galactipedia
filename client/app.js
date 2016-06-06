/**
 * This is the App
 * @fileOverview This the starting point for the application.
 * @author Keith Showalter {@link https://github.com/kshowalter}
 * @version 0.1.0
 */




import _ from 'lodash';

import Chance from 'chance';
//window.Chance = Chance;

import Kstore from 'kstore';

import mkdrawing from 'mkdrawing';

import router from './router';


var reducer = require('./reducer');
var createStore = require('redux').createStore;

var seed = 'PhoebeWillow';


/** @module */
import mkInitState from './mkInitState';
var initState = mkInitState(seed);
//console.log(initState);

/** Create the store */
var store = createStore(reducer, initState);

/** @module */
import Actions from './actions';
var actions = Actions(store);

/** @module view */
//var View = require('./view');
import View from './view';

var view = View(store, actions);

var selectedSubject = sessionStorage.getItem('selectedSubject');
if( selectedSubject ){
  actions.selectSubject(selectedSubject);
}

router(actions);

export default {
  defaultPage: '/l.1'

};

/** Anonymous function that runs when the store is updated. */
store.subscribe(function(){
  var state = store.getState();
  window.state = state; // DEVMODE
  console.log('State change: ', state);

  sessionStorage.setItem('selectedSubject', state.ui.selectedSubject);

  view.update();
});



store.dispatch({
  type: 'init'
});



console.log('done');
