const setup = () => {
    let btnSubstring=document.getElementById("btnSubstring");

    btnSubstring.addEventListener("click", substring);
}

const substring = () => {
    let txt=document.getElementById("txt");
    let indexBegin=document.getElementById("indexBegin");
    let indexEinde=document.getElementById("indexEinde");
    let txtOutput=document.getElementById("txtOutput");

    let g1=parseInt(indexBegin.value, 10);
    let g2=parseInt(indexEinde.value, 10);
    let resultaat = txt.value.substring(g1,g2);
    txtOutput.innerHTML = resultaat;
}
window.addEventListener("load", setup);