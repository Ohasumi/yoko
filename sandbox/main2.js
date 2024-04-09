let x = 100;
let y = 100;

let bx = 0;
let by = 0;
let diffX = 0;
let diffY = 0;
let prevX = 0;
let prevY = 0;

let isClick = false;

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
    ctx.rect(x, y, 290, 140);
    ctx.fill();
    ctx.stroke();

    // drawText(x + 20 ,y + 20, "x: " + x + " y: " + y);
    // drawText(350, 350, "x: " + x + " y: " + y);

    // drawText(350,450, "bx: " + bx + "by: " + by);

    // drawText(250,320, "diffX: " + ( diffX ) );


window.requestAnimationFrame( draw );
};


window.requestAnimationFrame( draw );


canvas.addEventListener('mousemove', (e)=>{
    let curX = e.pageX;
    let curY = e.pageY;
    diffX = curX - prevX;
    diffY = curY - prevY;

    console.log(x + ":" + y + " _ " + curX + ":" + curY + " _ " + diffX + ":" + diffY );
    if ( isClick )
    {
        x += diffX;
        y += diffY;
    }

    bx = canvas.getBoundingClientRect().left.toFixed();
    by = canvas.getBoundingClientRect().top.toFixed();

    prevX = curX;
    prevY = curY;
});

canvas.addEventListener('mousedown', (e)=>{
    isClick = true;

});

canvas.addEventListener('mouseup', (e)=>{
    isClick = false;

});
