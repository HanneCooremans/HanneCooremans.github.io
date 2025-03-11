const setup = () => {
    let txtInput = document.getElementById("input");
    let btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
        let tekst = txtInput.value;
        const uitkomst = maakMetSpaties(tekst);
        console.log(uitkomst)});
}

const maakMetSpaties = (tekst) => {

    let antw = "";
    for (const char of tekst) {
        if(char !== " "){
            antw += char + " ";
        }
    }
    antw = antw.substring(0,antw.length-1);
    return antw;
}

window.addEventListener("load", setup);

