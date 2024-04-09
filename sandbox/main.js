let x = 10;
let y = 10;

let sx = 0;
let sy = 0;

let cx = 0;
let cy = 0;

let bx = 0;
let by = 0;

let count = 0;
let prevX = 0;
let diffX = 0;
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function drawText(x,y, text) {
    ctx.font = "20px serif";
    ctx.fillStyle = 'black';
    ctx.fillText(text, x, y);
  }
  

const draw = () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.lineWidth = "6";
    ctx.strokeStyle = "grey";
    ctx.fillStyle = 'green';
    ctx.rect(x -bx, y - by, 290, 140);
    ctx.fill();
    ctx.stroke();

    drawText(x + 20 ,y + 20, "x: " + x + " y: " + y);
    drawText(350, 350, "x: " + x + " y: " + y);
    
    drawText(350,400, "sx: " + sx + "sy: " + sy);
    drawText(350,420, "cx: " + cx + "cy: " + cy);
    drawText(350,450, "bx: " + bx + "by: " + by);

    drawText(250,250, "count: " + count );
    drawText(250,300, "prevX: " + prevX );
    drawText(250,320, "diffX: " + ( diffX ) );


window.requestAnimationFrame( draw );
};


window.requestAnimationFrame( draw );


canvas.addEventListener('mousemove', (e)=>{
    count++;
    let curX = e.pageX;
    diffX = curX - x;
    x = curX;
    y = e.pageY;
    sx = e.screenX;
    sy = e.screenY;
    cx = e.clientX;
    cy = e.clientY;

    bx = canvas.getBoundingClientRect().left.toFixed();
    by = canvas.getBoundingClientRect().top.toFixed();
    prevX = x;

});