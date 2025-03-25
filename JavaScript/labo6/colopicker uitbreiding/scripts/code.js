const initialize = () => {

    let sliders = document.getElementsByClassName("slider");
    for (let slider of sliders) {
        slider.addEventListener("change", update);
        slider.addEventListener("input", update);
    }
    update();

    document.getElementById("btnSave").addEventListener("click", save);
};

const getRGB = () => {
    return {
        red: document.getElementById("sldRed").value,
        green: document.getElementById("sldGreen").value,
        blue: document.getElementById("sldBlue").value
    };
};


const setColorPicker = (red, green, blue) => {
    document.getElementById("lblRed").innerHTML = red;
    document.getElementById("lblGreen").innerHTML = green;
    document.getElementById("lblBlue").innerHTML = blue;

    document.getElementById("swatch").style.backgroundColor = `rgb(${red},${green},${blue})`;
};

const update = () => {
    let { red, green, blue } = getRGB();
    setColorPicker(red, green, blue);
};

const save = () => {
    let { red, green, blue } = getRGB();

    let container = document.createElement("div");
    container.classList.add("container");

    let element = document.createElement("div");
    element.classList.add("saved-swatch");
    element.style.backgroundColor = `rgb(${red},${green},${blue})`;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "X";
    deleteBtn.classList.add("delete");

    deleteBtn.addEventListener("click", () => container.remove());
    element.addEventListener("click", () => setColorPicker(red, green, blue));

    container.appendChild(element);
    container.appendChild(deleteBtn);
    document.querySelector(".saved").appendChild(container);
};

window.addEventListener("load", initialize);
