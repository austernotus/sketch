const container = document.getElementById("container")
const sizeButton = document.getElementById("sizeButton")


for(i=0;i<256;i++){
    let newDiv = document.createElement("div")
    newDiv.setAttribute("class", "square")
    newDiv.addEventListener("mouseover", () => newDiv.style.backgroundColor = "white")
    container.appendChild(newDiv);
}

function askSize(){

    let newSize = Number(prompt("Pick a size. (max: 100px)"))

    console.log(newSize)
    if (!isNaN(newSize) && Number.isInteger(newSize) && newSize <= 100 && newSize > 0){

    }
    else
    {
        console.log("not a valid number")
        askSize()
    }
}



sizeButton.addEventListener("click", () => askSize())

console.log(container)