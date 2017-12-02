$(window).ready(function(){
  optionsPath5 = {
    animation: 'path',
    inkAmount: 3,
    size:15,
    duration:1.5,
    color: '#FF626D',
    width: 1000,
    height: 240,
    root: $("#title-5")[0]
  };

  title5 = new Brushstroke(optionsPath5);
  var path5 = $("#title-5 path")[0];
  title5Drawn = false;
  window.setTimeout(function(){
      if(!title5Drawn) title5.draw({path: path5});
      title5Drawn = true;
  },1200);
})
