import createSubjectPageContent from './createSubjectPageContent';
import mkSubjectPageConfig from './mkSubjectPageConfig';

var test = function(input){
  console.log('test', input);
};
var togleFold = function(e){
  console.log('test', e);
};

var selectSubject = function(e){
  console.log('test', e, e.target);
};


var mkTree = function mkTree(state, itemId){
  var item = state.db[itemId];
  var domconfig = {
    tag: 'span',
    class: 'itemNode',
    children: [
      {
        tag: 'span',
        class: 'itemTitleBar' + ' itemType' + _.upperFirst(item.type),
        onclick: function(){
          test(itemId);
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
      itemContent.children.push( mkTree(state, containedItemId) );
    });
    domconfig.children.push(itemContent);
  }
  return domconfig;
};






export default function(state, dispatch){
  var universe = state.universe;

  var tree = {
    tag: 'div',
    class: 'subjectTree',
    children: [
      mkTree(state, 'u')
    ]
  };


  var subjectPage = {
    tag: 'div',
    class: 'subjectPage',
    children: [
      mkSubjectPageConfig( createSubjectPageContent(state) )
    ]
  };

  var domConfig = {
    tag: 'div',
    class: 'page',
    children: [
      tree,
      subjectPage
    ]
  };
  return domConfig;
}
