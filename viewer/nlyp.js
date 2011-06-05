function drawPacman1(ctx,posx,posy,s,p1,prevx,prevy,i,j)
{var canvas=document.getElementById("canvas");
canvas.style.backgroundColor="000000";
if(canvas.getContext)
{var rotate=0;
if(p1==1)
rotate=270;
if(p1==2)
rotate=90;
if(p1==3)
rotate=180;
ctx.save();
ctx.translate(prevx*s+15+i,prevy*s+15+j);
ctx.rotate(rotate*Math.PI/180);
ctx.translate(-(prevx*s+15+i),-(prevy*s+15+j));
ctx.strokeStyle = "#FFFF00";
 ctx.fillStyle="yellow";

ctx.beginPath();
ctx.arc(prevx*s+15+i,prevy*s+15+j,12,0,Math.PI*2,true);
ctx.stroke();
ctx.closePath();
ctx.fill();


ctx.strokeStyle="#000000"
ctx.fillStyle="#000000";
ctx.beginPath();
ctx.moveTo(prevx*s+15+i,prevy*s+15+j);
ctx.lineTo(prevx*s+26+i,prevy*s+10+j);
ctx.arc(prevx*s+15+i,prevy*s+15+j,12.5,-Math.PI/8,Math.PI/8,false);

ctx.lineTo(prevx*s+15+i,prevy*s+15+j);
ctx.stroke();
ctx.closePath();
ctx.fill();

ctx.restore();
}
}

function drawPacmanb1(ctx,s,prevx,prevy,i,j)
{var canvas=document.getElementById("canvas");
canvas.style.backgroundColor="000000";
if(canvas.getContext)
{
ctx.strokeStyle="#000000"
ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(prevx*s+15+i,prevy*s+15+j,15,0,Math.PI*2,true);
ctx.stroke();
ctx.closePath();
ctx.fill();
}
}


function doMovep1(i,j,ctx,posx,posy,s,prevx,prevy) {
drawPacman1(ctx,posx,posy,s,p1,prevx,prevy,i,j);
var dx=posx-prevx;
var dy=posy-prevy;
var p1;
var t=setInterval(function(){drawPacmanb1(ctx,s,prevx,prevy,i,j);
if(dx>0)
{i=i+5;
p1=4;
}
else if(dx<0)
{i=i-5;
p1=3;
}
else if(dy>0)
{j=j+5;
p1=2;
}
else if(dy<0)
{j=j-5;
p1=1;
}
drawPacman1(ctx,posx,posy,s,p1,prevx,prevy,i,j);},100);
setTimeout(function(){clearInterval(t);},600);
}


function main(s){
var ctx=canvas.getContext("2d");
var prevx=3, prevy=3,posx=4,posy=3;
var i=0,j=0;
doMovep1(i,j,ctx,posx,posy,s,prevx,prevy);
}