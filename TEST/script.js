const setup = () => {

    let keuze=document.getElementById("keuze");
    if(keuze.value === "1"){
        keuze.addEventListener("click", metEi);
    }else if(keuze.value === "2"){
        keuze.addEventListener("click", zonderEi);
    }

}

const metEi = () => {
    document.getElementById("img").innerHTML = "with-egg.png"
    document.getElementById("img").classList.remove("hidden")
    let text = document.getElementById("note")
    text.innerHTML += "Hierboven een kip met ei";
    teller()
}
const zonderEi = () => {
    document.getElementById("img").innerHTML = "without-egg.png"
    document.getElementById("img").classList.remove("hidden")
    let text = document.getElementById("note")
    text.innerHTML += "Hierboven een kip zonder een ei";
    teller()

}

const teller =() => {

    const letter = document.getElementById("txtLetter").innerHTML;
    let zin = document.getElementById("note")
    zin.toLowerCase();
    let position = zin.length;
    let aantal = 0;
    let index = 0;
    let doordoen = true;
    while(doordoen === true) {
        index = zin.lastIndexOf(letter, position)
        if(index > -1){
            position = index - 1;
            aantal = aantal +1;
        }else {
            doordoen = false;
        }
    }

    zin.innerHTML += "Letter "+ letter + " komt " + aantal + " keer voor in bovenstaande zin."
}

window.addEventListener("load", setup);