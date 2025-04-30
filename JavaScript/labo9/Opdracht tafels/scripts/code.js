let tafels = [];

const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", addTafel);

    // Zorg dat klikken op het label focus geeft aan het inputveld
    const label = document.getElementById("focus-label");
    if (label) {
        label.addEventListener("click", () => {
            document.getElementById("input").focus();
        });
    }
    const settingsJSON = localStorage.getItem("VIVES.be.tafels");
    if (settingsJSON) {
        tafels = JSON.parse(settingsJSON);
        let tafelsDiv = document.getElementById("tafels");
        for (let t of tafels) {
            t.datum = new Date(t.datum);
            createTafel(t);
        }
    }

};

const addTafel = () => {
    let inputField = document.getElementById("input");
    let startGetal = parseInt(inputField.value);

    if (isNaN(startGetal)) {
        alert("Gelieve een geldig getal in te geven.");
        return;
    }

    let tafel = {
        start: startGetal,
        datum: new Date()
    };

    tafels.push(tafel);

    // Herbouw alle tafels
    let tafelsDiv = document.getElementById("tafels");
    verwijderAlleChildren(tafelsDiv);
    for (let t of tafels) {
        createTafel(t);
    }

    inputField.value = "";
    inputField.focus();

    let settingsJSON = JSON.stringify(tafels);
    localStorage.setItem("VIVES.be.tafels", settingsJSON);

};

const createTafel = (tafel) => {
    let tafelsDiv = document.getElementById("tafels");
    let tafelDiv = document.createElement("div");
    tafelDiv.setAttribute("class", "tafel");

    tafelDiv.appendChild(createHeader(tafel));

    for (let i = 1; i <= 10; i++) {
        let row = document.createElement("div");
        row.classList.add("rij");

        if (i % 2 === 0) {
            row.classList.add("even");
        }

        row.appendChild(document.createTextNode(`${tafel.start} x ${i} = ${tafel.start * i}`));
        tafelDiv.appendChild(row);
    }

    tafelsDiv.appendChild(tafelDiv);
};

const createHeader = (tafel) => {
    let headerDiv = document.createElement("div");
    headerDiv.setAttribute("class", "tafel-header");

    let tijd = tafel.datum.toLocaleTimeString("nl-BE", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    let headerText = `Tafel van ${tafel.start} aangemaakt op: ${tijd}`;
    headerDiv.appendChild(document.createTextNode(headerText));

    return headerDiv;
};

// handige functie om alle children van een element te verwijderen
const verwijderAlleChildren = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
};

window.addEventListener("load", setup);
