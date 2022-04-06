// Add your Microworld code in this file

// Add code here to change the HTML and styles in the viewing panel
document.body.innerHTML = document.body.innerHTML = `
<style>
  body {
    margin: 0px;
  }
  
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: blue;
    overflow: scroll;
  }

  .options {
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 20px;
    bottom: 20px;
  }

  canvas {
    background: white;
  }
</style>

<main>
  <canvas id="canvas" width="400" height="400"></canvas>
  <div class="options">
    <div>
      <span>draw turtles:</span>
      <input type="checkbox" checked="true" class="draw-turtles"></input>
    </div>
    <!-- <button class="download">download image</button> -->



  </div>
</main>
`

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let lastProgram = null;

function exampleFunction() {
  console.log("philip made it!");
}


function viewWindow(x_scale, y_scale){
  let x_max = canvas.width/x_scale
  let y_max = canvas.height/y_scale

  let x_min = -1*canvas.width/x_scale
  let y_min = -1*canvas.height/y_scale

  console.log("X max: "+x_max+"\n Y max: "+y_max+"\n X min: "+x_min+"\n Y min: "+y_min+"\n")
}

function graphEquation(eq, x_scale, y_scale) {






ctx.moveTo(200,0);
ctx.lineTo(200,400);
ctx.stroke();

ctx.moveTo(0,200);
ctx.lineTo(400,200);
ctx.stroke();

  // console.log(x_list)
  // console.log("\n")
  // console.log(y_list)

  for (let i = 0; i < canvas.width; i++){

      let x = i
      let y = eq(x) 
      
      
      ctx.fillStyle = "#FF0000";
      ctx.fillRect((x*x_scale)+(canvas.width/2), -(y*y_scale)+(canvas.height/2), 1, 1);
     

    }

    ctx.stroke();

  



  
}


function print(string) {

console.log(string)
  
}



function trapizoid (eq, width, x_scale, y_scale) {

  

let area_list = [];
let area = 0;
let factor =0;

if (x_scale <1){
  factor = canvas.width/x_scale;
}
else {
  factor = canvas.width*x_scale;
}


for (let i=0; i<factor; i=i+width) {
  
  let x = i
  let y1 = eq(x)
  let y2 =0;
  if (x<0){
    y2 = eq((x+width));
  }else{
    y2=eq((x-width));
    y2 = y2*-1
  }

  let trap_area = ((y1+y2)/2)*width;
  area_list.push(trap_area)
  ctx.beginPath();
  ctx.moveTo((x*x_scale)+200,200);
  if (x<0){
  ctx.lineTo((x*x_scale)+200,-(y1*y_scale)+200);}
  else{ctx.lineTo((x*x_scale)+200,(y1*y_scale)+200);}
  ctx.stroke();
  area = area + trap_area;
  
}


console.log(area)
}



// Add code here to create your Microworld functions
// This whole template is run on initialization
// When code is sent via hitting "run", the evaluate function is called
export default function evaluate(program) {
  
  if (program === null) return;
  lastProgram = program;

  ctx.fillStyle ="white";
  ctx.fillRect(0,0, canvas.width, canvas.height);

  const func = new Function("graphEquation", "viewWindow", "trapizoid", "print", program);

  func(graphEquation, viewWindow, trapizoid, print);


}


