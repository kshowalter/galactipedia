var components = require('./components');



module.exports = function(state, action){
  if( action.type === 'init'){

    return state;
  }

  if( action.type === 'toggleVisible'){
    console.log(action);
  }


  if( action.type === 'selectSubject'){
    state.ui.selectedSubject = action.subjectID;
  }




  return state;
};
