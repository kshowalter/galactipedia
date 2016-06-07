//import mkdrawing from 'mkdrawing';

export default function(state){

  var svgConfig = {
    tag: 'svg',
    props: {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200',
      viewBox: '0 0 200 200'
    },
    contains: []
  };

  var x,y,w,h;

  w = 200;
  h = 10;
  x = w/2;
  y = h/2;
  svgConfig.contains.push({
    type: 'rect',
    x: x,
    y: y,
    w: w,
    h: h
  });

  w = 200;
  h = 10;
  x = w/2;
  y = 100;
  svgConfig.contains.push({
    type: 'rect',
    x: x,
    y: y,
    w: w,
    h: h
  });

  w = 200;
  h = 10;
  x = w/2;
  y = 200 - h/2;
  svgConfig.contains.push({
    type: 'rect',
    x: x,
    y: y,
    w: w,
    h: h
  });


  return svgConfig;
}
