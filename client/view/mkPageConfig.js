import mkSubjectPageConfig from './mkSubjectPageConfig';
import mkListPageConfig from './mkListPageConfig';

export default function(state, actions){
  var pageType = state.ui.selected_subject.split('.')[0];
  var subject = state.db[state.ui.selected_subject];
  if( subject === undefined ){
    console.log('subject not found');
    setTimeout( function(){
      window.location.hash = state.ui.default_page;
    }, 3000);
    return {
      tag: 'div',
      text: 'page not found'
    };
  }

  if( pageType === 'l' ){
    return mkSubjectPageConfig(state, actions);
  } else if( pageType === 'o' ){
    return mkListPageConfig(state, actions);
  }

}
