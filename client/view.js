import ConfigDOM  from 'configDOM';

var configDOM = ConfigDOM('#content');

import mkViewConfig from './mkViewConfig';


export default function(store, actions){

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
