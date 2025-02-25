const setup = () => {

   /* let listItems =document.getElementsByTagName("p");
    for (let i = 0; i < listItems.length; i++) {
        if(listItems[i].classList.contains("belangrijk")) {
            listItems[i].classList.add("opvallend");
        }
    }
    */
    let listItems =document.getElementsByClassName("belangrijk");
    for (let i = 0; i < listItems.length; i++) {
        //listItems[i].classList.add("opvallend");
        listItems[i].className+=" opvallend";
    }

}


window.addEventListener("load", setup);