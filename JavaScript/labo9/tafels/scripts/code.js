let tafels = []

const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", addTafel);
}

const addTafel = () => {

    let txtStartGetal = document.getElementById("txtStart")
    let startGetal = parseInt(txtStartGetal.value);
    if (isNaN(startGetal){
    ...
    }

    let tafel = document.getElementById("input").value;
    createTafel(tafel)

    let tafel = {
        start: ...

    }

}

const createTafel = (tafel) => {

    let tafelsDiv = document.getElementById("tafels");
    let tafelDiv = document.createElement("div");


    tafelDiv.appendChild(createHeader(tafel));

    tafelDiv.setAttribute("class","tafel")

    for(var i = 1; i <= 10; i++){
        let row = document.createElement("div");
        if(i%2 === 0){
            row.setAttribute("class","even")
        }
        row.appendChild(document.createTextNode(tafel.start + " X " + i + " = " + tafel.start*i));
        tafelDiv.appendChild(row)
    }
    tafelsDiv.append(tafelDiv)


}
const createHeader = (tafel) => {
    let headerDiv = Document.createElement("div");

    headerDiv.setAttribute("class", "header");

    let headerNode = document.createTextNode("Tafel van "
    + tafel.start + " aangemaakt op: " + tafel.datum.toTimeString().substring(0,8));

    headerDiv.appendChild(headerNode);
    return headerDiv;

}

// handige functie om alle children van een element te verwijderen
// verwijder alle childs van een element
const verwijderAlleChildren = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

const verwijderAlleTafels = () => {

}


window.addEventListener("load", setup);