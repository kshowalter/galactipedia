/**
 * this is the app
 * @file_overview this the starting point for the application.
 * @author keith showalter {@link https://github.com/kshowalter}
 * @version 0.1.0
 */
console.log('/\\');


import f from './functions';
var global = window || global;
global.logger = console.log;
global.f = f;

//////////////

var target_DOM = document.getElementById('content');

var seed = 'phoebe_willow';
import mk_init_state from './mk_init_state';
var init_state = mk_init_state(seed);

var custom_actions = {
  route: function(new_subject_id){
    return {
      type: 'route',
      subject_id: new_subject_id
    };
  },
};

var reducer = require('./reducer');

import mkViewConfig from './view/mkViewConfig';
var mk_page_spec = function(state, actions){
  var page_spec = mkViewConfig(state, actions);
  return page_spec;
};

//////////////

import website from './website/website';

website(target_DOM, init_state, custom_actions, reducer, mk_page_spec);

///////////////



window.onresize = function(){
  //console.log(window.inner_width);
};

console.log('\\/');
