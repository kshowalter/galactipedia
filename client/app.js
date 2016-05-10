import _ from 'lodash';

import Chance from 'chance';

var reducer = require('./reducer');
var createStore = require('redux').createStore;

var seed = 'PhoebeWillow';


import mkInitState from './mkInitState';
var initState = mkInitState(seed);
//console.log(initState);

var store = createStore(reducer, initState);

import Actions from './actions';
var actions = Actions(store);

import View from './view';
var view = View(store, actions);

var selectedSubject = sessionStorage.getItem('selectedSubject');
if( selectedSubject ){
  actions.selectSubject(selectedSubject);
}


store.subscribe(function(){
  var state = store.getState();
  console.log(state);

  sessionStorage.setItem('selectedSubject', state.ui.selectedSubject);

  view.update();
});



store.dispatch({
  type: 'init'
});




console.log('done');
