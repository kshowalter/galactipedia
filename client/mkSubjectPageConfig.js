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
            console.log('test');
          },
          text: subject.type
        },
        ', located in ',
        container.type,
        ' ',
        container.name
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

  var mkPageContent = function(pageContent){
    var pageContent = {
      tag: 'div',
      class: 'pageBody',
      children: [
        mkDescription(),
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
