const setup = () => {

    let btn = document.getElementById("btn");
    btn.addEventListener("click", execute);
}

const execute = () => {
    let txtInput = document.getElementById("input");
    let tekst = txtInput.value;
    let antw = "";
    for (const char of tekst) {
        if(char !== " "){
            antw += char + " "
        }
    }
    antw = antw.substring(0,antw.length-1);
    console.log(antw);
}
window.addEventListener("load", setup);