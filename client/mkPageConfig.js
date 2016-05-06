export default function(pageContent){

  var pageConfig = {
    type: 'div',
    class: 'infoPage',
    children: [
      {
        type: 'div',
        class: 'pageTitleBar',
        children: [
          {
            type: 'h1',
            text: pageContent.title
          }
        ]
      },
      {
        type: 'div',
        class: 'pageBody',
        children: [
          {
            type: 'div',
            class: 'pageDescription',
            text: pageContent.description
          }
        ]
      }
    ]
  };

  return pageConfig;
}
