var togleFold = function(e){
  console.log('test', e);
};

var selectSubject = function(e){
  console.log('test', e);
};


var mkTree = function mkTree(universe, itemId){
  var item = universe.db[itemId];

  var domconfig = {
    type: 'span',
    class: 'itemNode',
    children: [
      {
        type: 'span',
        class: 'itemTitleBar' + ' itemType' + _.upperFirst(item.type),
        onclick: selectSubject,
        children: [
          {
            type: 'span',
            text: item.type + ': ' + item.name
          }
        ]
      }
    ]
  };

  if( item.info ){
    var infoConfig = {
      type: 'span',
      class: 'itemInfoSection',
      children: []
    };
    _.forIn(item.info, function(value, key){
      infoConfig.children.push({
        type: 'span',
        class: 'itemInfo',
        text: key +': '+ value
      });
    });
    domconfig.children.push(infoConfig);
  }

  if( item.contains.length !== 0 ){
    domconfig.children.push({
      type: 'span',
      class: 'togleContains',
      onclick: function(){
        togleFold(itemId);
      }
    });
    var itemContent = {
      type: 'span',
      class: 'nodeContains',
      children: []
    };
    item.contains.forEach(function(containedItemId){
      itemContent.children.push( mkTree(universe, containedItemId) );
    });
    domconfig.children.push(itemContent);
  }
  return domconfig;
};






export default function(universe){

  var viewConfig = {
    type: 'span',
    children: []
  };

  universe.contains.forEach(function(containedItemId){
    viewConfig.children.push( mkTree(universe, containedItemId) );
  });

  return viewConfig;
}
