const container = document.getElementById("container")
const sizeButton = document.getElementById("sizeButton")



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
        newDiv.addEventListener("mouseover", () => newDiv.style.backgroundColor = "white")
        container.appendChild(newDiv);
    }
}

changeSize(20)


sizeButton.addEventListener("click", () => askSize())

console.log(container)