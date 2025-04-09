
let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier

    lstPersonen.addEventListener("change", () => {
        let geselecteerdeIndex = lstPersonen.selectedIndex;
        if (geselecteerdeIndex !== -1) {
            // Toon de geselecteerde persoon in het formulier
            toonPersoonInFormulier(personen[geselecteerdeIndex]);
        }
    });

};

const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    let lstPersonen = document.getElementById("lstPersonen");

    // valideer alle input data en controleer of er geen errors meer zijn
    // valideer();

    let elements = document.getElementsByClassName("invalid")

    if (elements.length == 0) {
        // alles in orde, we mogen bewaren
        let persoon = {};
        if (lstPersonen.selectedIndex == -1) {
            // nieuwe persoon bewaren
            vulPersoonOpBasisVanUserInterface(persoon);
            personen.push(persoon); // toevoegen aan interne lijst
            voegPersoonToeAanLijstInUserInterface(persoon);

        } else {
            // bestaande persoon wijzigen
            persoon = personen[lstPersonen.selectedIndex];
            vulPersoonOpBasisVanUserInterface(persoon);
            updatePersoonInLijstInUserInterface(persoon);
        }
    }

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan






    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

const vulPersoonOpBasisVanUserInterface = (persoon) => {
        persoon.voornaam = document.getElementById("txtVoornaam").value;
        persoon.familienaam = document.getElementById("txtFamilienaam").value;
        persoon.geboorte = document.getElementById("txtGeboorteDatum").value;
        persoon.email = document.getElementById("txtEmail").value;
        persoon.kinderen = document.getElementById("txtAantalKinderen").value;
}

// Event listener (btnNieuw click)

const toonPersoonInFormulier = (persoon) => {
    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboorte;
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.kinderen;
};


const updatePersoonInLijstInUserInterface = (persoon) => {
  let lstPersonen = document.getElementById("lstPersonen");
    let option = lstPersonen.options[lstPersonen.selectedIndex];
    option.innerHTML = persoon.voornaam + " " + persoon.familienaam;

}

const voegPersoonToeAanLijstInUserInterface = (persoon)=>{

    let lstPersonen = document.getElementById("lstPersonen");
    let option = document.createElement("option");
    option.text = persoon.voornaam + " " + persoon.familienaam;
    option.value = persoon.email
    lstPersonen.appendChild(option)
    lstPersonen.selectedIndex = personen.length-1;
}


const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    let lstPersonen = document.getElementById("lstPersonen");

    lstPersonen.selectedIndex = -1;

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren

    let inputElem = document.querySelectorAll('input[type=text]')
    inputElem.forEach(elem => {
        elem.value = ""
    })

}

window.addEventListener("load", setup);