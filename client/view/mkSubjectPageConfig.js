import mkTree from './mkTree';

var sectionWrap = function(wrappedSpecObject){
  return {
    tag: 'div',
    props: {
      class: 'section',
    },
    children: [
      wrappedSpecObject,
    ],
  };
};



var mkPageLink = function(_id, text, actions){
  return {
    tag: 'a',
    props: {
      href: '#',
      onclick: function(){
        var subjectID = _id;
        window.location.hash = '/' + subjectID;
        return false;
      },
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
    props: {
      class: 'pageTitleBar',
    },
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
      props: {
        class: 'infoBox',
      },
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
          text: f.pretty_name(name) +': '+ value
        });

      });
    }

    return infoBoxConfig;
  };

  var mkDescription = function(){
    var description = {
      tag: 'div',
      props: {
        class: 'descriptionSection',
      },
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
      props: {
        class: 'rawSection',
      },
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
      props: {
        class: 'contentList',
      },
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
        props:{
          class: 'contentItem contentItem_' + state.db[containedSubjectID].type,
        },
        children: [
          classification,
          state.db[containedSubjectID].type,
          ' ',
          mkPageLink( containedSubjectID, subject.name, actions)
        ]
      });
    });

    return {
      tag: 'span',
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
      props: {
        class: 'infoPage pageBody',
      },
      children: []
    };

    [
      pageTitle,
      mkDescription(),
      mkInfoBox(),
      mkContentList(),
      //mkTree(state, subject._id, actions),
      mkRaw(),
    ].forEach(function(sectionSpec){
      pageContent.children.push( sectionWrap(sectionSpec) );
    });

    return pageContent;
  };


  return mkPageContent();
}
