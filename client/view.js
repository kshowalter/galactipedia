import ConfigDOM  from 'configDOM';

var configDOM = ConfigDOM('#content');

import mkViewConfig from './mkViewConfig';


export default function(store){

  var view = {
    store: store,
    update: function(){
      var state = this.store.getState();
      var viewConfig = mkViewConfig(state, function(action){
        this.store.dispatch(action);
      });
      configDOM.load(viewConfig);

    }
  };



  return view;
}
