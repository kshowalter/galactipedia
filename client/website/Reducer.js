export default function(custom_reducers){

  return function(state, action){
    state = state; // replace with deep copy

    if( custom_reducers[action.type] ){
      return custom_reducers[action.type](state, action);
    } else {
      console.log('NO ACTION HANDLER FOUND');
      return state;
    }

  };
  
}
