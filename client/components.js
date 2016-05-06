module.exports = {
  dice: function(text, cb){
    var e = {
      type: 'span',
      class: 'button',
      text: text || 'click me',
      onclick: function(){
        console.log('clicky');
        store.dispatch({
          type: 'roll 3d6',
          id: 'test'
        });
      }
    }
    return e;
  }
};
