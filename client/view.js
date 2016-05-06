import ConfigDOM  from 'configDOM';

var configDOM = ConfigDOM('#content');

import mkViewConfig from './mkViewConfig';


export default function(store){

  var view = {
    store: store,
    update: function(state){
      var viewConfig = mkViewConfig(state.universe);
      configDOM.load(viewConfig);

    }
  };



  return view;
}
