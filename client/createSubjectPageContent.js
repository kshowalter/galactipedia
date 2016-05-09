export default function(state){
  var subjectId = state.ui.selectedItem;
  var subject = state.db[subjectId];
  console.log(subject);
  var containerId = subject._id.split('.').slice(-2,-1);
  var container = state.db[containerId];
  if( !container ){
    container = {
      name: 'reality'
    };
  }


  var pageContent = {
    title: subject.name,
    description: `${subject.name} is a ${subject.type} located in ${container.name}`,
    facts: {
      characteristics: subject.info
    }
  };

  return pageContent;
}
