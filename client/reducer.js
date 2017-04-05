var components = require('./components');



module.exports = function(state, action){
  if( action.type === 'init'){

    return state;
  }

  if( action.type === 'toggle_visible'){
    console.log(action);
  }


  if( action.type === 'select_subject'){
    state.ui.selected_subject = action.subject_id;
  }




  return state;
};
