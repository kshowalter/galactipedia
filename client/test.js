/**
 * This is the test
 * @fileOverview This the starting point for the application.
 * @author Keith Showalter {@link https://github.com/kshowalter}
 * @version 0.1.0
 */

import _ from 'lodash';

import Chance from 'chance';

import router from './router';


var reducer = require('./reducer');
var createStore = require('redux').createStore;

var seed = 'PhoebeWillow';

var chance = new Chance(seed);

import Specdom  from 'specdom';

var specdom = Specdom('#content');

specdom.load({
  tag: 'div',
  children: [
    {
      tag: 'a',
      href: '#',
      text: 'test ' + chance.word()

    }
  ]
});

console.log('done');
