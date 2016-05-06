export default function(universe, subjectId){
  var subject = universe.db[subjectId];
  var containerId = subject._id.split('.').slice(-2,-1);
  var container = universe.db[containerId];


  var pageContent = {
    title: subject.name,
    description: `${subject.name} is a ${subject.type} located in ${container.name}`,
    facts: {
      characteristics: subject.info
    }
  };

  return pageContent;
}
