const setup = () => {
    let stad = window.prompt("Gemeente")
    let steden = []
    while (stad !== "stop") {
        steden.push('<option>' + stad + '</option>');
        stad = window.prompt("Gemeente")
    }
    steden.sort()
    for(let stad of steden){
        document.getElementById("stedenLijst").innerHTML += stad;
    }
}
window.addEventListener("load", setup);