const container = document.getElementById("container")
const sizeButton = document.getElementById("sizeButton")
const randomColorButton = document.getElementById("randomColorButton")
const resetButton = document.getElementById("resetButton")
const randomDrawingButton = document.getElementById("randomDrawingButton")

let randomColor = false

function askSize(){

    let newSize = Number(prompt("Pick a size. (max: 100px)"))

    console.log(newSize)
    if (!isNaN(newSize) && Number.isInteger(newSize) && newSize <= 100 && newSize > 0){
        changeSize(newSize)
    }
    else
    {
        console.log("not a valid number")
        askSize()
    }
}

function changeSize(size){

    //deletes previous drawing elements
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }


    for(i=0;i<(size*size);i++){
        let newDiv = document.createElement("div")
        newDiv.setAttribute("class", "square")
        newDiv.style.flexBasis = 100/size + "%"
        newDiv.addEventListener("mouseover", () => paint(newDiv))
        container.appendChild(newDiv);
    }
}

changeSize(20)

function paint(newDiv){
    if (randomColor === false){
        newDiv.style.backgroundColor = "white"
    }
    else{
        newDiv.style.backgroundColor = generateRandomColor()
    }
}


function generateRandomColor(){
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);

    return newColor = "rgb(" + r + "," + g + "," + b +")";
}

function toggleColor(){
    randomColor = !randomColor

    if(randomColor){
        randomColorButton.style.backgroundColor = "lightsalmon"
    }
    else{
        randomColorButton.style.backgroundColor = "revert"
    }

}

function randomDrawing(){

    for (const node of container.childNodes){
        if (randomColor){
            node.style.backgroundColor = generateRandomColor()
        }
        else{
            colorSelection = ["white", "black"]
            node.style.backgroundColor = colorSelection[Math.floor(Math.random() * 2)]
        }

    }
}


sizeButton.addEventListener("click", () => askSize())
randomColorButton.addEventListener("click", () => toggleColor())
resetButton.addEventListener("click", () => changeSize(20))
randomDrawingButton.addEventListener("click", () => randomDrawing())

console.log(container)