const setup = () => {
    let keuze = document.getElementById("keuze");
    keuze.addEventListener("change", veranderKeuze);
}

const veranderKeuze = () => {
    let keuze = document.getElementById("keuze").value;
    if (keuze === "1") {
        metEi();
    } else if (keuze === "2") {
        zonderEi();
    }
};

const metEi = () => {
    let imgDiv = document.getElementById("img");
    imgDiv.innerHTML = '<img src="with-egg.png" alt="Kip met ei">';
    imgDiv.classList.remove("hidden");

    let text = document.getElementById("note");
    text.innerHTML += "Hierboven een kip met ei. ";

    teller();
};

const zonderEi = () => {
    let imgDiv = document.getElementById("img");
    imgDiv.innerHTML = '<img src="without-egg.png" alt="Kip zonder ei">';
    imgDiv.classList.remove("hidden");

    let text = document.getElementById("note");
    text.innerHTML += "Hierboven een kip zonder een ei. ";

    teller();
};

const teller = () => {
    const letter = document.getElementById("txtLetter").value.toLowerCase();
    let zin = document.getElementById("note").innerText.toLowerCase();

    let aantal = 0;
    for (let char of zin) {
        if (char === letter) {
            aantal++;
        }
    }

    document.getElementById("note").innerHTML += ` Letter "${letter}" komt ${aantal} keer voor in bovenstaande zin.`;
};

window.addEventListener("load", setup);