import mkPageConfig from './mkPageConfig';

var test = function(input){
  console.log('test', input);
};
var togleFold = function(e){
  console.log('test', e);
};


var mkTree = function mkTree(state, itemId, actions){
  var item = state.db[itemId];
  var domconfig = {
    tag: 'span',
    class: 'itemNode',
    children: [
      {
        tag: 'span',
        class: 'itemTitleBar' + ' itemType' + _.upperFirst(item.type),
        onclick: function(){
          actions.selectSubject(itemId);
        },
        children: [
          {
            tag: 'span',
            text: item.type + ': ' + item.name
          }
        ]
      }
    ]
  };

  if( item.info ){
    var infoConfig = {
      tag: 'span',
      class: 'itemInfoSection',
      children: []
    };
    _.forIn(item.info, function(value, key){
      infoConfig.children.push({
        tag: 'span',
        class: 'itemInfo',
        text: key +': '+ value
      });
    });
    domconfig.children.push(infoConfig);
  }

  if( item.contains.length !== 0 ){
    domconfig.children.push({
      tag: 'span',
      class: 'togleContains',
      onclick: function(){
        togleFold(itemId);
      }
    });
    var itemContent = {
      tag: 'span',
      class: 'nodeContains',
      children: []
    };
    item.contains.forEach(function(containedItemId){
      itemContent.children.push( mkTree(state, containedItemId, actions) );
    });
    domconfig.children.push(itemContent);
  }
  return domconfig;
};


var toolBar = function(){
  var toolBarConfig = {
    tag: 'div',
    class: 'toolBar',
    children: [
      {
        tag: 'span',
        class: 'title',
        text: 'Galactipedia'
      }
    ]
  };

  return toolBarConfig;
};



export default function(state, actions){

  //var tree = {
  //  tag: 'div',
  //  class: 'subjectTree',
  //  children: [
  //    mkTree(state, 'l', actions)
  //  ]
  //};


  var subjectPage = {
    tag: 'div',
    class: 'subjectPage',
    children: [
      mkPageConfig(state, actions)
    ]
  };

  var domConfig = {
    tag: 'div',
    class: 'page',
    children: [
      //tree,
      toolBar(),
      subjectPage
    ]
  };
  return domConfig;
}
