function tabAndBuildFunc(){
    var Xmin=prompt("Введіть мінімальне значення x:");
    Xmin=parseFloat(Xmin);
    var Xmax=prompt("Введіть максимальне значення x:");
    Xmax=parseFloat(Xmax);
    var dx=prompt("Введіть крок: ");
    dx=parseFloat(dx);
    alert("УВАГА! Результат табулювання функції виводиться в консоль!")
    var y= function(x) {return Math.exp(0.2*Math.pow(x, 2))};
    var x=Xmin + dx;

	console.log("Табулювання функції Y(x) = e^(0.2*x^2):");

// Три вида циклів:
// 1) method using 'for'
  
  	for (let x = Xmin; x <= Xmax; x += dx)
    console.log(`Y(${x}): ${y(x)}`);
  
/* 2) method using 'do-while'

    do{
      y=tabFunc(Xmin, Xmax, x);
       console.log("Y(" + x + ") = " + y + "");
      x=x+dx;
}while(x<=Xmax);


	3) method using 'while'

    while(x<=Xmax){
      y=tabFunc(Xmin, Xmax, x);
      console.log("Y(",x,") = ",y,"");
      x=x+dx;
    }*/

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var canvasWidth = canvas.clientWidth;
var canvasHeight = canvas.clientHeight;

// Встановлення розміру клітин

var scaleX = 50;
var scaleY = 50;

// Будування клітин

ctx.strokeStyle = "#cef2ee";
ctx.beginPath();
for (let  i = 0; i <= canvasWidth; i = i + scaleX){
  ctx.moveTo(i, 0);
  ctx.lineTo(i, canvasHeight);
}
for(let i = 0; i <= canvasHeight; i = i + scaleY){
  ctx.moveTo(0, i);
  ctx.lineTo(canvasWidth, i);
}
ctx.stroke();

// Будування головних осей декартової системи, встановлення напряму осей (x, y), встановлення розмітки (1, 1)

var xAxis = Math.round(canvasWidth/scaleX/2) * scaleX;
var yAxis = Math.round(canvasHeight/scaleY/2) * scaleY;

ctx.font = `${16}px Nunito`;
ctx.strokeStyle = "#132e2b";
ctx.beginPath();
ctx.moveTo(xAxis, 0);
ctx.lineTo(xAxis, canvasHeight);
ctx.fillText('1', canvasHeight - 140, xAxis - 145);
ctx.fillText('1', canvasHeight - 105, xAxis - 115);
ctx.fillText('Y', canvasHeight - 140, xAxis - 330);

ctx.moveTo(0, yAxis);
ctx.lineTo(canvasWidth, yAxis);
ctx.fillText('X', canvasWidth - 20, yAxis - 10);

ctx.stroke();
ctx.closePath();

// Будування графіку

ctx.fillStyle = "#126b61";
for (let i = 0; i <= canvasWidth; i++){
  const x = (i - xAxis) / scaleX;
  const y = Math.exp(0.2*Math.pow(x, 2));
  ctx.fillRect(x * scaleX + xAxis, yAxis - scaleY * y, 4, 4);
}
ctx.fillText('1', canvasHeight - 140, xAxis - 150);
}
