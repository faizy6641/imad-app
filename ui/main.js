console.log('Loaded!');
document.getElementById('main-text').innerHTML='I am a Functional Test Engineer';

var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,5);
};