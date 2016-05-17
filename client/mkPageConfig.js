import appInfo from './app';
import mkSubjectPageConfig from './mkSubjectPageConfig';
import mkListPageConfig from './mkListPageConfig';

export default function(state, actions){
  var pageType = state.ui.selectedSubject.split('.')[0];
  var subject = state.db[state.ui.selectedSubject];
  console.log(subject);
  if( subject === undefined ){
    console.log('subject not found');
    setTimeout( function(){
      window.location.hash = appInfo.defaultPage;
    }, 3000);
    return {
      tag: 'div',
      text: 'page not found'
    };
  }

  if( pageType === 'l' ){
    console.log('rendering location page ', state.ui.selectedSubject);
    return mkSubjectPageConfig(state, actions);
  } else if( pageType === 'o' ){
    console.log('rendering Universe page ', state.ui.selectedSubject);
    return mkListPageConfig(state, actions);
  }

}
