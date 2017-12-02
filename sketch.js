var img1;
var img2;
var img3;
var img4;

function calcRatio(img,cW,cH){
    ratio = img.width / img.height;
    if(cW/cH < ratio){
        return cW/ratio;
    }
    return cH;
}

var s = new p5(function(sketch){
    sketch.preload = function(){
        img1 = sketch.loadImage("images/warmup_wup_sm.png");
    }
    sketch.setup = function() {
        var canvasHolder = sketch.select('#canvasHolder');
            canvasWidth  = canvasHolder.width;
                        canvasHeight = canvasHolder.height;
            newHeight = calcRatio(img1,canvasWidth,canvasHeight);
    sketch.createCanvas(canvasWidth, newHeight).parent('canvasHolder');  
    sketch.background(255,255,255);
                    img1.resize(canvasWidth, newHeight);
    sketch.image(img1, 0, 0);
    //brush
    sketch.strokeWeight(3);
    sketch.stroke(0);
    }
    
    sketch.draw = function (){
    }
    
    sketch.touchMoved = function(){
        sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
        return false;
    };
});

var s_2 = new p5(function(sketch){
    sketch.preload = function(){
        img2 = sketch.loadImage("images/cube_wup_sm.png");
    }
    sketch.setup = function() {
        var canvasHolder = sketch.select('#cube');
            canvasWidth  = canvasHolder.width;
            canvasHeight = canvasHolder.height;
            newHeight = calcRatio(img2,canvasWidth,canvasHeight);
    sketch.createCanvas(canvasWidth, newHeight).parent('cube');
    sketch.background(255,255,255);
            img2.resize(canvasWidth, newHeight);
    sketch.image(img2, 0, 0);
    //brush
    sketch.strokeWeight(3);
    sketch.stroke(0);
    }
    sketch.draw = function (){
    }
    
    sketch.touchMoved = function(){
        sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
        return false;
    };
});

var s_3 = new p5(function(sketch){
    sketch.preload = function(){
        img3 = sketch.loadImage("images/cylinder_wup_sm.png");
    }
    sketch.setup = function() {
        var canvasHolder = sketch.select('#cylinder');
            canvasWidth  = canvasHolder.width;
            canvasHeight = canvasHolder.height;
    newHeight = calcRatio(img3,canvasWidth,canvasHeight);
    sketch.createCanvas(canvasWidth, newHeight).parent('cylinder');
    sketch.background(255,255,255);
    img3.resize(canvasWidth, newHeight);
    sketch.image(img3, 0, 0);
    //brush
    sketch.strokeWeight(3);
    sketch.stroke(0);
    }
    sketch.draw = function (){
    }
    
    sketch.touchMoved = function(){
        sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
        return false;
    };
});

var s_4 = new p5(function(sketch){
    sketch.preload = function(){
        img4 = sketch.loadImage("images/complex_wup_sm.png");
    }
    sketch.setup = function() {
    var canvasHolder = sketch.select('#complex');
    canvasWidth  = canvasHolder.width;
    canvasHeight = canvasHolder.height;
    newHeight = calcRatio(img4,canvasWidth,canvasHeight);
    sketch.createCanvas(canvasWidth, newHeight).parent('complex');
    sketch.background(255,255,255);

    img4.resize(canvasWidth, newHeight);
    sketch.image(img4,0 , 0);
    //brush
    sketch.strokeWeight(3);
    sketch.stroke(0);
    }
    sketch.draw = function (){
    }
    
    sketch.touchMoved = function(){
        sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
        return false;
    };
});
function canvasClear(target){
    if(target == "canvasHolder"){
        s.background(255);
        s.image(img1, 0, 0);
    }
    else if(target == "cube"){
        s_2.background(255);
        s_2.image(img2, 0, 0);
    }
    else if(target == "cylinder"){
        s_3.background(255);
        s_3.image(img3, 0, 0);
    }
    else {
        s_4.background(255);
        s_4.image(img4, 0, 0);
    }
}