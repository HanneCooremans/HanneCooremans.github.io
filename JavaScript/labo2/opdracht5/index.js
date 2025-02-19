const setup = () => {

    let btnVeranderen =document.getElementById("btnVeranderen");

    btnVeranderen.addEventListener("click", veranderen);

}
veranderen = () =>{
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);