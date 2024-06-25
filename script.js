const createButton = document.querySelector('.create-button');
const inputref = document.querySelector('.inputval');
const canvas = document.querySelector('.canvas');
const clearButton = document.querySelector('.clear-button');
const colorPicker = document.querySelector('#color-picker');
const rainbowModeRef = document.querySelector('#Rainbowmode');

let userColor = 'black';
let rainbowCheck = false;

function getinputval() {
return inputref.value; 
}

function randomize() {
    let num = Math.floor(Math.random() * 256);
    return num;
}
function rainbowMode() {
    let red = randomize();
    let green = randomize();
    let blue = randomize();
    userColor = `rgb(${red}, ${green}, ${blue})`;
}
function checkForRainbow(){
    if(rainbowCheck == true){
        rainbowMode();
    }
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
    let pixelHeight = 960 / input;
    let pixelWidth = 960 / input;
    pixel.style.height = `${pixelHeight}px`;
    pixel.style.width = `${pixelWidth}px`;
    canvas.appendChild(pixel);
    pixel.addEventListener('mouseover', ()=> {
        pixel.style.backgroundColor = `${userColor}`;
        checkForRainbow();
    }  )
  }
}

rainbowModeRef.addEventListener('change', (event) => {
    if(event.target.checked){
        rainbowCheck = true;
    }
    else{
        rainbowCheck = false;
    }
})

colorPicker.addEventListener('input', ()=> {
    userColor = colorPicker.value;
})

let userinput;
createButton.addEventListener('click', (event)=> {
    while(canvas.firstChild) {
        canvas.removeChild(canvas.lastChild)
    }
    userinput = getinputval();
    if(userinput > 1 && userinput <= 100) {
        createCanvas(userinput);
    }
    else{
        alert("grid value cannot be less than 2 or more than 100");
    }
})
clearButton.addEventListener('click', ()=> {
    clearCanvas(userinput);
})
