const setup = () => {
    const zin = "De man van An geeft geen hand aan ambetante verwanten"
    teller(zin)

}

let teller = (zin) => {
    zin = zin.toLowerCase();
    let position = 0;
    let aantal = 0;
    let index = 0;
    let doordoen = true;
    while(doordoen === true) {
        index = zin.indexOf("an", position)
        if(index > -1){
            position = index + 1;
            aantal = aantal +1;
        }else {
            doordoen = false;
        }
    }
    console.log(aantal)
}

window.addEventListener("load", setup);