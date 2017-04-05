import app_info from './app';

export default function(actions){

  function router(actions) {
    if( location.hash === '' || location.hash === '#' ){
      location.hash = app_info.default_page;
    } else {
      var url = location.hash.slice(2) || '/';
      var values = url.split('/');

      actions.select_subject(values[0]);

    }

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
