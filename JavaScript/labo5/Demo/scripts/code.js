const setup = () => {
    document.getElementById("imgPhoto").addEventListener("mouseover", change);
};

const change = () => {
    let foto = document.getElementById("imgPhoto");
    foto.src = "./images/afbeelding.jpg";
    foto.alt ="vos";
    foto.className = "sizePhoto";

   document.getElementById("txtText").innerHTML = "Vos";

}
window.addEventListener("load", setup);