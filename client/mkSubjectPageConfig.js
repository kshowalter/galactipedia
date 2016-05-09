export default function(pageContent){

  var pageConfig = {
    tag: 'div',
    class: 'infoPage',
    children: [
      {
        tag: 'div',
        class: 'pageTitleBar',
        children: [
          {
            tag: 'h1',
            text: pageContent.title
          }
        ]
      },
      {
        tag: 'div',
        class: 'pageBody',
        children: [
          {
            tag: 'div',
            class: 'pageDescription',
            text: pageContent.description
          }
        ]
      }
    ]
  };

  return pageConfig;
}
