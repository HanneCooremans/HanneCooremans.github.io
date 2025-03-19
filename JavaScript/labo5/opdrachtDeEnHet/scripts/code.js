const setup = () => {
    let btnVervang = document.getElementById("buttonVervang")
    btnVervang.addEventListener("click", vervang)
}

const vervang = () => {
    const zin =  document.getElementById("txtZin").value;
    let nieuweZin = ""
    let index = 0;

    while (zin.indexOf("de",index) !== -1) {
        nieuweZin += zin.slice(index, zin.indexOf("de",index)) + "het";
        index = zin.indexOf("de",index) +2;
    }
    nieuweZin += zin.slice(index, zin.length);

    document.getElementById("antw").innerHTML = nieuweZin;
}
window.addEventListener("load", setup);