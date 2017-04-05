var components = require('./components');

module.exports = function(state, action){
  if( action.type === 'init'){
    return state;
  }

  if( action.type === 'toggle_visible'){
    console.log(action);
  }

  if( action.type === 'route'){
    var subject_id = action.subject_id || state.ui.default_page;
    state.ui.selected_subject = subject_id;
  }

  return state;
};
