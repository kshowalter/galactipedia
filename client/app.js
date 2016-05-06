import _ from 'lodash';

import Chance from 'chance';

var reducer = require('./reducer');
var createStore = require('redux').createStore;

var seed = 'PhoebeWillow';


import mkInitState from './mkInitState';
var initState = mkInitState(seed);
//console.log(initState);

var store = createStore(reducer, initState);

import View from './view';
var view = View(store);


store.subscribe(function(){
  var state = store.getState();
  console.log(state);

  view.update(state);

});



store.dispatch({
  type: 'init'
});




console.log('done');
