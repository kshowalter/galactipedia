export default function(state, actions){
  var subjectId = state.ui.selectedSubject;
  var subject = state.db[subjectId];
  var container = state.db[subject.containerId];
  if( !container ){
    container = {
      name: 'reality'
    };
  }


  var pageContent = {
    title: subject.name,
    description: [
      subject.name,
      ' is a ',
      {
        tag: 'a',
        href: '#',
        //onclick: actions.selectSubject('l.type.' + subject.type),
        onclick: function(){
          console.log('test');
        },
        text: subject.type
      },
      ', located in ',
      container.type,
      ' ',
      container.name
    ],
    contains: [],
    info: {
      type: subject.type,
      characteristics: subject.info
    },
    subject: subject
  };

  //subject.contains.forEach(function(containedSubjectID){
  //  var containedSubject = state.db[containedSubjectID];
  //  pageContent.contains.push('');
  //});



  var mkInfoBox = function(pageContent){
    var infoBoxConfig = {
      tag: 'div',
      class: 'infoBox',
      children: [
        {
          tag: 'span',
          text: 'Type: ' + pageContent.info.type
        }
      ]
    };

    if(pageContent.info.characteristics){
      console.log(pageContent.info.characteristics);
      _.forIn(pageContent.info.characteristics, function(value, name){
        infoBoxConfig.children.push({
          tag: 'div',
          text: _.upperFirst(name) +': '+ value
        });

      });
    }

    return infoBoxConfig;
  };

  var mkDescription = function(pageContent){
    var description = {
      tag: 'div',
      class: 'section descriptionSection',
      children: pageContent.description
    };

    return description;
  };

  var mkRaw = function(pageContent){
    var raw = {
      tag: 'div',
      class: 'section rawSection',
      children: [
        {
          tag: 'pre',
          text: JSON.stringify(pageContent, null, 4)
        }
      ]
    };

    return raw;
  };

  var pageConfig = {
    tag: 'div',
    class: 'infoPage',
    children: [
      {
        tag: 'div',
        class: 'pageTitleBar',
        children: [
          {
            tag: 'h1',
            text: pageContent.title
          }
        ]
      },
      {
        tag: 'div',
        class: 'pageBody',
        children: [
          mkDescription(pageContent),
          mkRaw(pageContent)
        ]
      },
      mkInfoBox(pageContent)
    ]
  };

  return pageConfig;
}
