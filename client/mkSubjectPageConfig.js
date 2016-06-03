var mkPageLink = function(_id, text, actions){
  return {
    tag: 'a',
    href: '#',
    onclick: function(){
      var subjectID = _id;
      window.location.hash = '/' + subjectID;
      return false;
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
      name: 'e3xistence'
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
          tag: 'div',
          text: 'Type: ' + subject.type
        }
      ]
    };

    if(subject.info){
      //console.log(subject.info);
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
        subject.type,
        ', located in ',
        container.type,
        ' ',
        mkPageLink( container._id, container.name, actions),
        '. ',
        'It\'s catalog ID is: ',
        subject._id
      ]
    };

    return description;
  };

  var mkRaw = function(){
    var subjectEdited = Object.assign({}, subject);
    if( subjectEdited._console && subjectEdited._console.chance  ){
      subjectEdited._console.chance = subject._console.chance.seed;
    } else {
      subjectEdited._console = {
        chance: 'no chance'
      };
    }
    subjectEdited._spec = undefined;

    var raw = {
      tag: 'div',
      class: 'section rawSection',
      children: [
        {
          tag: 'pre',
          text: JSON.stringify(subjectEdited, null, 4)
        }
      ]
    };

    return raw;
  };



  /**
   * var - Makes CDOM config object: List of contained locations.
   *
   * @return {object} config List of contained locations for current location subject
   */
  var mkContentList = function(){
    if( subject.contains === undefined || subject.contains.length === 0 ){
      return undefined;
    }

    var contentList = {
      tag: 'ul',
      class: 'section rawSection',
      children: [
      ]
    };

    subject.contains.forEach(function(containedSubjectID){
      var subject = state.db[containedSubjectID];
      var classification = subject.info.classification;
      if( classification ) {
        classification = classification + ' ';
      }
      //console.log(classification);

      contentList.children.push({
        tag: 'li',
        children: [
          classification,
          state.db[containedSubjectID].type,
          ' ',
          mkPageLink( containedSubjectID, subject.name, actions)
        ]
      });
    });

    return {
      tag: 'div',
      children: [
        {
          tag: 'div',
          text: `This ${subject.type} contains:`
        },
        contentList
      ]
    };
  };

  var mkPageContent = function(){
    var pageContent = {
      tag: 'div',
      class: 'pageBody',
      children: [
        mkInfoBox(),
        {
          tag: 'div',
          class: 'mainPageBody',
          children: [
            mkDescription(),
            mkContentList(),
            mkRaw()
          ]
        }
      ]
    };
    return pageContent;
  };

  var pageConfig = {
    tag: 'div',
    class: 'infoPage',
    children: [
      pageTitle,
      mkPageContent()
    ]
  };

  return pageConfig;
}
