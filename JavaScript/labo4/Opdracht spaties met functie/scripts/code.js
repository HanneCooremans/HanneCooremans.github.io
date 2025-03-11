const setup = () => {
    console.log("begin")
    let txtInput = document.getElementById("input");
    let tekst = txtInput.value;
    let btn = document.getElementById("btn");
    btn.addEventListener("click", () => {console.log(execute(tekst))});
    console.log("einde")
}

const execute = (tekst) => {

    let antw = "";
    for (const char of tekst) {
        if(char !== " "){
            antw += char + " "
        }
    }
    antw = antw.substring(0,antw.length-1);
    console.log("antw gevonden")
    return antw
}
window.addEventListener("load", setup);

