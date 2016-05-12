import mkSubjectPageConfig from './mkSubjectPageConfig';
import mkListPageConfig from './mkListPageConfig';

export default function(state, actions){
  var pageType = state.ui.selectedSubject.split('.')[0];

  if( pageType === 'u' ){
    console.log('rendering Universe page ', state.ui.selectedSubject);
    return mkSubjectPageConfig(state, actions);
  } else if( pageType === 'u' ){
    console.log('rendering Universe page ', state.ui.selectedSubject);
    return mkListPageConfig(state, actions);
  }

}
