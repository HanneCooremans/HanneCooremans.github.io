let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};


const setup = () => {
    document.getElementById("startButton").addEventListener("click", startGameLoop);
    document.querySelector("#playField img").addEventListener("click", handelClick);
};

const handelClick = () => {
   clearInterval(global.timeoutId);

    let image = document.querySelector("#playField img")
    let imgSrc = image.src;

    if (imgSrc.endsWith("0.png")){
        alert("GAME OVER!");
        stopGameLoop()
    }else{
        moveImg()
        global.score += 1;
        document.getElementById("hitCount").innerHTML = "Aantal hits " + global.score;
    }

    setTimeout(() => {
        if (!imgSrc.endsWith("0.png")) {
            global.timeoutId = setInterval(moveImg, global.MOVE_DELAY); // Start de timer opnieuw
        }
    }, global.MOVE_DELAY);
}
const startGameLoop = () => {
    if (!global.timeoutId) {
        global.timeoutId = setInterval(moveImg, 1000);
    }
};


const stopGameLoop = () => {
    clearInterval(global.timeoutId);
    global.timeoutId = null;
};

const moveImg = () => {

    let image= document.querySelector("#playField img")
    let speelveld=document.getElementById("playField");
    let maxLeft=speelveld.clientWidth - image.offsetWidth;
    let maxHeight=speelveld.clientHeight - image.offsetHeight;

    // verplaats de img
    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);
    image.style.left=left+"px";
    image.style.top=top+"px";

    // verander de img
    let randomNumber = Math.floor(Math.random() * global.IMAGE_COUNT);
    image.src = global.IMAGE_PATH_PREFIX + randomNumber + global.IMAGE_PATH_SUFFIX;

}

window.addEventListener("load", setup);


