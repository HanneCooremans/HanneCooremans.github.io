const setup = () => {
    console.log("begin")
    let txtInput = document.getElementById("input");
    let btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
        let tekst = txtInput.value;
        const uitkomst = execute(tekst);
        console.log(uitkomst)});
}

const execute = (tekst) => {

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

