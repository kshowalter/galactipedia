export default function(store){
  var actions = {
    store: store,
    dispatch: function(actionConfig){
      this.store.dispatch(actionConfig);
    },
    selectSubject: function(newSubjectID){
      this.dispatch({
        type: 'selectSubject',
        subjectID: newSubjectID
      });
    }
  };

  return actions;

}
