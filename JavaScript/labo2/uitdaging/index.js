const setup = () => {

let btnWith=document.getElementById("btnWithBullets");
let btnWithout=document.getElementById("btnWithoutBullets");

btnWith.addEventListener("click", withBullets);
btnWithout.addEventListener("click", withoutBullets);
}

const withBullets = () => {

    let verranderlijkeArray = document.getElementsByClassName("veranderlijk")
        for(let i=0;i<verranderlijkeArray.length;i++){
            verranderlijkeArray[i].style.backgroundColor = "red";
            verranderlijkeArray[i].style.listStyleType = "none";
        }


}

const withoutBullets = () => {
    let verranderlijkeArray = document.getElementsByClassName("veranderlijk")
    for(let i=0;i<verranderlijkeArray.length;i++){
        verranderlijkeArray[i].style.backgroundColor = "white";
        verranderlijkeArray[i].style.listStyleType = "disc";
    }




}

window.addEventListener("load", setup);