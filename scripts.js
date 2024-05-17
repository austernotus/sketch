const container = document.getElementById("container")

for(i=0;i<256;i++){
    let newDiv = document.createElement("div")
    newDiv.setAttribute("class", "square")
    newDiv.addEventListener("mouseover", () => newDiv.style.backgroundColor = "white")
    container.appendChild(newDiv);
}

console.log(container)