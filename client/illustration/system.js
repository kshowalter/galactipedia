import mkdrawing from 'mkdrawing';

export default function(state){

  var d = mkdrawing({
    size: {
      w: 200,
      h: 200
    },
    scale: 1
  });

  var x,y,w,h;

  w = 200;
  h = 10;
  x = w/2;
  y = h/2;
  d.add({
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
  d.add({
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
  d.add({
    type: 'rect',
    x: x,
    y: y,
    w: w,
    h: h
  });


  return d.mkSVG();
}
