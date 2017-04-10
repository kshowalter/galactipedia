export default function mkTree(state, itemId, actions){
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
          class: 'itemTitleBar' + ' contentItem' + _.upperFirst(item.type),
        },
        onclick: function(){
          actions.route(itemId);
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
