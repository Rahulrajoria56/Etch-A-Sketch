const createButton = document.querySelector('.create-button');
const inputref = document.querySelector('.inputval');
const canvas = document.querySelector('.canvas');
const clearButton = document.querySelector('.clear-button');

function getinputval() {
return inputref.value; 
}

function clearCanvas(input) {
    for (let i = 0; i < input * input; i++) {
        canvas.removeChild(canvas.firstElementChild)
    }
}
function createCanvas(input) {
for (let i = 0; i < input * input; i++) {
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    let pixelHeight = 640 / input;
    let pixelWidth = 640 / input;
    pixel.style.height = `${pixelHeight}px`;
    pixel.style.width = `${pixelWidth}px`;
    canvas.appendChild(pixel);
  }
}
let userinput;
createButton.addEventListener('click', (event)=> {
    while(canvas.firstChild) {
        canvas.removeChild(canvas.lastChild)
    }
    userinput = getinputval();
    createCanvas(userinput);
})
clearButton.addEventListener('click', ()=> {
    clearCanvas(userinput);
})