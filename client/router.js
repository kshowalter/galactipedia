export default function(actions){

  function router(actions) {
    var url = location.hash.slice(2) || '/';
    var values = url.split('/');

    actions.selectSubject(values[0]);

  }


  // Listen on hash change:
  window.addEventListener('hashchange', function(){
    router(actions);
  });
  // Listen on page load:
  window.addEventListener('load', function(){
    router(actions);
  });

  return true;
}
