const setup = () => {
    console.log("setup");

    let btnHerbereken=document.getElementById("btnHerbereken");
    btnHerbereken.addEventListener("click", update);

    /*let products = document.getElementsByClassName("aantal")

    for(let i = 0; i < products.length; i++) {
        products[i].addEventListener("change", update)
    } */

};

const update = () => {
    let btws = document.getElementsByClassName("btw");
    let aantallen = document.getElementsByClassName("aantal");
    let prijzen = document.getElementsByClassName("prijs");
    let subtotaalen = document.getElementsByClassName("subtotaal");

    let nieuwtotaal = 0;
    for(let i = 0; i < aantallen.length; i++) {

        let btw = btws[i].innerHTML
        let eindindex = btw.length -1 ;
        let prijs = prijzen[i].innerHTML;
        let eindindexprijs = prijs.length - 4;

        const waarde = (aantallen[i].value * Number(prijs.substring(0,eindindexprijs))) + (aantallen[i].value * Number(prijs.substring(0,eindindexprijs))) * (parseInt(btw.substring(0,eindindex))/100);
        subtotaalen[i].innerHTML = Math.round(waarde * 100) / 100 + " Eur";
        nieuwtotaal += waarde

    }
    let vorigtotaal = document.getElementById("totaal");
    vorigtotaal.innerHTML = Math.round(nieuwtotaal * 100) / 100 + " Eur";

}
window.addEventListener("load", setup);