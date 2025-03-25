const setup = () => {

    document.getElementById("btnCreate").addEventListener("click", Create)


}

const Create = () => {

    let para = document.createElement("p");
    let t = document.createTextNode("This is a paragraph.");

    para.appendChild(t);
    document.getElementById("myDIV").appendChild(para);

}

window.addEventListener("load", setup);