// Add your Microworld code in this file

// Add code here to change the HTML and styles in the viewing panel
document.body.innerHTML = `
  <style>
    canvas {
      background: white;
    }
  </style>

  <main>
    <canvas></canvas>
  </main>
`

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let lastProgram = null;

function exampleFunction() {
  console.log("philip made it!");
}


function graphFunction(equation) {
  console.log("Philip was here");
}



// Add code here to create your Microworld functions
// This whole template is run on initialization
// When code is sent via hitting "run", the evaluate function is called
export default function evaluate(program) {
  if (program === null) return;
  lastProgram = program;

  const func = new Function("exampleFunction", program);

  func(exampleFunction);
}
