var mkPageLink = function(_id, text, actions){
  return {
    tag: 'a',
    href: '#',
    onclick: function(){
      //console.log(_id);
      actions.selectSubject(_id);
    },
    text: text
  };
};

export default function(state, actions){
  var subjectId = state.ui.selectedSubject;
  var subject = state.db[subjectId];
  var container = state.db[subject.containerId];
  if( !container ){
    container = {
      name: 'reality'
    };
  }


  var pageTitle = {
    tag: 'div',
    class: 'pageTitleBar',
    children: [
      {
        tag: 'h1',
        text: subject.name
      }
    ]
  };


  var mkInfoBox = function(){
    var infoBoxConfig = {
      tag: 'div',
      class: 'infoBox',
      children: [
        {
          tag: 'span',
          text: 'Type: ' + subject.type
        }
      ]
    };

    if(subject.info){
      console.log(subject.info);
      _.forIn(subject.info, function(value, name){
        infoBoxConfig.children.push({
          tag: 'div',
          text: _.upperFirst(name) +': '+ value
        });

      });
    }

    return infoBoxConfig;
  };

  var mkDescription = function(){
    var description = {
      tag: 'div',
      class: 'section descriptionSection',
      children: [
        subject.name,
        ' is a ',
        {
          tag: 'a',
          href: '#',
          //onclick: actions.selectSubject('l.type.' + subject.type),
          onclick: function(){
            console.log(subject.type);
          },
          text: subject.type
        },
        ', located in ',
        container.type,
        ' ',
        mkPageLink( container._id, container.name, actions)
      ]
    };

    return description;
  };

  var mkRaw = function(){
    var raw = {
      tag: 'div',
      class: 'section rawSection',
      children: [
        {
          tag: 'pre',
          text: JSON.stringify(subject, null, 4)
        }
      ]
    };

    return raw;
  };

  var mkContentList = function(){
    var contentList = {
      tag: 'ul',
      class: 'section rawSection',
      children: []
    };

    subject.contains.forEach(function(containedSubjectID){
      contentList.children.push({
        tag: 'li',
        children: [
          state.db[containedSubjectID].type,
          ' ',
          mkPageLink( containedSubjectID, state.db[containedSubjectID].name, actions)
        ]
      });
    });

    return contentList;
  };

  var mkPageContent = function(){
    var pageContent = {
      tag: 'div',
      class: 'pageBody',
      children: [
        mkDescription(),
        mkContentList(),
        mkRaw()
      ]
    };
    return pageContent;
  };

  var pageConfig = {
    tag: 'div',
    class: 'infoPage',
    children: [
      pageTitle,
      mkPageContent(),
      mkInfoBox()
    ]
  };

  return pageConfig;
}
