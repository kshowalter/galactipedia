var components = require('./components');



module.exports = function(state, action){
  if( action.type === 'init'){

    return state;
  }

  if( action.type === 'toggleVisible'){
    console.log(action);
  }


  /*
  if( action.type === 'roll 3d6'){
    var dice_results = chance.rpg('3d6');
    state.children = [];
    state.children.push(
      components.dice(dice_results.join(','), function(){
        console.log('clicky');
        store.dispatch({
          type: 'roll 3d6',
          id: 'test'
        })
      })
    )
  }
  */


  return state;
};
