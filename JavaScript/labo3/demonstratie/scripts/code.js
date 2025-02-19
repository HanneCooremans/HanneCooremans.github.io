
const setup = () => {
    let btnTry = document.getElementById("btnTry");

    // Event-based programming
    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut);


    // eventListeners CSS
    document.getElementById("btnWithoutBullets")
        .addEventListener("click", withoutBullets);

    document.getElementById("btnWithBullets")
        .addEventListener("click", withBullets);

    //difference between "textContent" and "innerHTM
    document.getElementById("btnContent")
        .addEventListener("click",changeContent)
}

// mouseHoverFunction
const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered!<br>";

}
// kan je op lijn 6 doen in plaats van nieuwe functie maken

// onClickFunction
const onClick = () => {
    document.getElementById("event").innerHTML += "Mouse Clicked!<br>";
}

// mouseOutFunction

const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse Out!<br>";
}

const withoutBullets = () => {
   let listItems =document.getElementsByTagName("li");
   for(let i=0;i<listItems.length;i++){
       //eerste manier
      /* listItems[i].style.listStyleType = "none";
       listItems[i].style.backgroundColor = "red"; */

       //tweede manier, beter en overzichtelijker
       /* listItems[i].className ="listItemsStyleNone colorRed" */

       //derde manier

       listItems[i].classList.remove("listItemsStyleDisc");
       listItems[i].classList.remove("colorWhite");
       listItems[i].classList.add("listItemsStyleNone");
       listItems[i].classList.add("colorRed")
       console.log("output "+listItems[i].className)
   }
}

const withBullets = () => {

    let listItems =document.getElementsByTagName("li");
    for(let i=0;i<listItems.length;i++){
        //eerste manier
        /* listItems[i].style.listStyleType = "disc";
        listItems[i].style.backgroundColor = "white"; */

        //tweede manier, beter en overzichtelijker
        /* listItems[i].className ="listItemsStyleDisk colorWhite" */

        //derde manier
        listItems[i].classList.add("listItemsStyleDisc");
        listItems[i].classList.add("colorWhite");
        listItems[i].classList.remove("listItemsStyleNone");
        listItems[i].classList.remove("colorRed")

    }

}

const changeContent = ()=> {
    document.getElementById("innerHTML")
        .innerHTML ="<a href='https://www.vives.be'>VIVES</a>";
    document.getElementById("textContent")
        .textContent ="<a href='https://www.vives.be'>VIVES</a>";
}

window.addEventListener("load", setup);