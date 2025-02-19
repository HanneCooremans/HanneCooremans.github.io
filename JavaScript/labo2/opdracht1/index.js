const setup = () => {
    window.alert("Dit is een mededeling");
    window.confirm("Weet u het zeker?");
    window.prompt("Wat is uw naam", "onbekend");
    console.log(window.confirm())
    // true and false
    console.log(window.prompt())
    // null of ingetypte tekst
}
window.addEventListener("load", setup);