const setup = () => {
    let btnToon = document.getElementById("buttonToon")
    btnToon.addEventListener("click", toon)
}

const toon = () => {
    const woord =  document.getElementById("txtTekst").value;
    document.getElementById("lstTrigrams").innerHTML = ""
    for (let i = 0; i<=woord.length-3; i++) {
        document.getElementById("lstTrigrams").innerHTML +=  '<li>' + woord.substring(i,i+3) + '</\li>'
        console.log(woord.substring(i,i+3))
    }
}
window.addEventListener("load", setup);