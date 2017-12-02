$(window).ready(function(){
  optionsPath1 = {
    animation: 'path',
    inkAmount: 3,
    size:12,
    duration:1.5,
    color: '#FF626D',
    width: 1000,
    height: 120,
    root: $("#title-1")[0]
  };
  optionsPath2 = {
    animation: 'path',
    inkAmount: 8,
    size:40,
    duration:.4,
    color: '#FF626D',
    width: 1000,
    height: 120,
    root: $("#title-2")[0]
  };
  optionsPath3 = {
    animation: 'path',
    inkAmount: 3,
    size:12,
    duration:1.5,
    color: '#FF626D',
    width: 1000,
    height: 200,
    root: $("#title-3")[0]
  };
  optionsPath4 = {
    animation: 'path',
    inkAmount: 8,
    size:40,
    duration:.4,
    color: '#FF626D',
    width: 1000,
    height: 120,
    root: $("#title-4")[0]
  };
  optionsPath5 = {
    animation: 'path',
    inkAmount: 3,
    size:12,
    duration:1.5,
    color: '#FF626D',
    width: 1000,
    height: 200,
    root: $("#title-5")[0]
  };


  title1 = new Brushstroke(optionsPath1);
  title2 = new Brushstroke(optionsPath2);
  title3 = new Brushstroke(optionsPath3);
  title4 = new Brushstroke(optionsPath4);
  // title5 = new Brushstroke(optionsPath5);

  title1Drawn = false;
  title2Drawn = false;
  title3Drawn = false;
  title4Drawn = false;
  // title5Drawn = false;


  var path1 = $("#title-1 path")[0];
  var path2 = $("#title-2 path")[0];
  var path3 = $("#title-3 path")[0];
  var path4 = $("#title-4 path")[0];
  // var path5 = $("#title-5 path")[0];


  window.setTimeout(function(){
      if(!title1Drawn) title1.draw({path: path1});
      title1Drawn = true;
  },1700);
  $(window).scroll(function(){
    //this is around the height of the second title
    if($(window).scrollTop() > 500){
        if(!title2Drawn) title2.draw({path: path2});
        title2Drawn = true;
    }
    if($(window).scrollTop() > 1000){
      if(!title3Drawn) title3.draw({path: path3});
      title3Drawn = true;
    }
    if($(window).scrollTop() > 1800){
      if(!title4Drawn) title4.draw({path: path4});
      title4Drawn = true;
    }
  })
})
