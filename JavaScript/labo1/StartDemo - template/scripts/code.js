const setup = () => {

   /* let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "cursus"; */

    let lblCursus = document.getElementById("lblCursus");
    lblCursus.addEventListener("mouseover", change)
    /* gedrag, functie */

    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click", show)

}

const change = () =>
{
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "cursus";
}

window.addEventListener("load", setup);

const show = () => {
    console.log("show");

    let txtName = document.getElementById("txtName");

    if(txtName.value !== ""){
        alert("jouw naam is " + txtName.value);
    }
    else{
        alert ("gelieve u naam in te vullen")
    }

    console.log("jouw naam is " + txtName.value); /* om dingen te controleren */
    console.log(`jouw naam is ${txtName.value}`) /* deze is beter (stringacopolatie?) */
}