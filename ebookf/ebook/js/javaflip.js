$('#flipbook').turn({
        width: 765,
		height:500 ,
		autoCenter: true,
        duration: 2000,
        
        
    });
$('#flipbook1').turn({
        width: 765,
		height:500 ,
		autoCenter: true,
        duration: 2000,
        
        
    });
$("#flipbook1").turn("display", "single");
$("#flipbook").turn("center");
$(document).ready(function(){
    $("#header").load("header.html")
    $("#page1").load("page_1.html");
    $("#page2").load("page_2.html");
    $("#page3").load("page_3.html");
    $("#page4").load("page_4.html");
    $("#page5").load("page_5.html");
    $("#footer").load("footer.html");
    $("#index").load("index.html");
});

var elem = document.getElementById("flipbook");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
    $("#flipbook").turn("zoom", 2);
    
}
var pno;
function fixpage(pno){
    $("#flipbook").turn("page", pno);
}
function hide() {
  var x = document.getElementById("hide1");
  var y = document.getElementById("hide2");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    $("#flipbook").turn("page", 1);
  } else {
    x.style.display = "none";
    y.style.display = "block";
    $("#flipbook").turn("page", 1);
  }
}
function next(){
    $("#flipbook").turn("next");
}
function pre(){
    $("#flipbook").turn("previous");
}
function bookmark(pno){
    if($("#flipbook").turn("page", 2)){
        if(document.getElementById("b1").style.color=="black"){
            document.getElementById("b1").style.color="blue";
            
            return false;
        }
        
    }
    if($("#flipbook").turn("page", 3)){
        if(document.getElementById("b2").style.color=="black"){
            document.getElementById("b2").style.color="blue";
            return false;
        }
        
    }
    if($("#flipbook").turn("page", 4)){
        if(document.getElementById("b3").style.color=="black"){
            document.getElementById("b3").style.color="blue";
            return false;
        }
       
    }
    if($("#flipbook").turn("page", 5)){
        if(document.getElementById("b4").style.color=="black"){
            document.getElementById("b4").style.color="blue";
            return false;
        }
       
    }
    if($("#flipbook").turn("page", 6)){
        if(document.getElementById("b5").style.color=="black"){
            document.getElementById("b5").style.color="blue";
            return false;
        }
        
    }
    return true;
}
