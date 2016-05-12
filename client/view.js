/**
 * view constructor
 * @fileOverview view constructor
 * @author Keith Showalter {@link https://github.com/kshowalter}
 * @version 0.1.0
 */

/** @module */
import ConfigDOM  from 'configDOM';

var configDOM = ConfigDOM('#content');

/** @module */
import mkViewConfig from './mkViewConfig';


/**
 * description
 * @param  {store} store   description
 * @param  {object} actions description
 * @return {object}         description
 */
export default function(store, actions){
  /** @exports */
  var view = {
    store: store,
    update: function(){
      var state = this.store.getState();
      var viewConfig = mkViewConfig(state, actions);
      configDOM.load(viewConfig);
    }
  };

  return view;
}
