document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;
    if(target.nodeName === "BUTTON")
    {
        var partName = target.parentElement.parentElement.className
        console.log(partName)
        if(target.className === "plus-button"){
            console.log("plus")
            console.log(target)
            readTextFrom("/content/week1.txt")
            .then(response => response.text())
            .then(text => placeTextIntoDiv(target.parentElement.parentElement.nextElementSibling, text))
            .catch(error => console.log(error))
             
        }
        else if(target.className === "minus-button")
        {
            target.parentElement.parentElement.nextElementSibling.innerHTML = ""
            console.log("minus")
        }
    }
          
     
}, false);

function placeTextIntoDiv(div, text)
{
    div.innerHTML = text
}

function readTextFrom(path){
    return  fetch(path)
}



