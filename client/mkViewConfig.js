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
    props: {
      class: 'itemNode',
    },
    children: [
      {
        tag: 'span',
        props: {
          class: 'itemTitleBar' + ' itemType' + _.upperFirst(item.type),
        },
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
      props: {
        class: 'itemInfoSection',
      },
      children: []
    };
    _.forIn(item.info, function(value, key){
      infoConfig.children.push({
        tag: 'span',
        props: {
          class: 'itemInfo',
        },
        text: key +': '+ value
      });
    });
    domconfig.children.push(infoConfig);
  }

  if( item.contains.length !== 0 ){
    domconfig.children.push({
      tag: 'span',
      props: {
        class: 'togleContains',
      },
      onclick: function(){
        togleFold(itemId);
      }
    });
    var itemContent = {
      tag: 'span',
      props: {
        class: 'nodeContains',
      },
      children: []
    };
    item.contains.forEach(function(containedItemId){
      itemContent.children.push( mkTree(state, containedItemId, actions) );
    });
    domconfig.children.push(itemContent);
  }
  return domconfig;
};


var toolBar = function(state){
  var toolBarConfig = {
    tag: 'div',
    props: {
      class: 'toolBar',
    },
    children: [
      {
        tag: 'span',
        props: {
          class: 'title',
        },
        text: 'Galactipedia'
      }
    ]
  };
  return toolBarConfig;
};



export default function(state, actions){

  //var tree = {
  //  tag: 'div',
  //  props: {
  //    class: 'subjectTree',
  //  },
  //  children: [
  //    mkTree(state, 'l', actions)
  //  ]
  //};


  var subjectPage = {
    tag: 'div',
    props: {
      class: 'subjectPage',
    },
    children: [
      mkPageConfig(state, actions)
    ]
  };

  var domConfig = [
    toolBar(state),
    subjectPage
  ];

  return domConfig;
}
