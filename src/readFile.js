parts = document.getElementsByClassName("part-bg")
// console.log(parts[0])

document.onload = readTextFrom("/content/week1.txt")
.then(response => response.text())
.then(text => placeTextIntoDiv(parts[0], text))
.catch(error => console.log(error))


function placeTextIntoDiv(div, text)
{
    div.innerHTML = text
}

function readTextFrom(path){
    return  fetch(path)
}



