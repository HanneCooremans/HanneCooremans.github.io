

const storeSliderValues = () => {

    let settings = {};
    let settingsJSON;

    // bouw settings object op basis van ingevulde gegevens
    // eigenlijk zouden we hier ook inputvalidering moeten doen
    settings.red = parseInt(document.getElementById("sldRed").value);
    settings.green = parseInt(document.getElementById("sldGreen").value);
    settings.blue = parseInt(document.getElementById("sldBlue").value);

    // bewaar settings als JSON string in local storage
    settingsJSON = JSON.stringify(settings);
    localStorage.setItem("VIVES.be.settingsColorSliders", settingsJSON);
    // Key heel belangrijk!!!


};

const restoreSliderValues = () => {

    let settings;
    let settingsJSON = localStorage.getItem("VIVES.be.settingsColorSliders");

    if (settingsJSON !== undefined) {
        settings = JSON.parse(settingsJSON);
    }

    document.getElementById("sldRed").value = settings.red;
    document.getElementById("sldGreen").value = settings.green;
    document.getElementById("sldBlue").value = settings.blue;

};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
   let rgbColors = []

    let swatches = document.querySelectorAll("#swatchComponents .swatch")
    for(let i = 0; i < swatches.length; i++) {

       let rgb = {
           red: swatches[i].getAttribute("data-red"),
           green: swatches[i].getAttribute("data-green"),
           blue: swatches[i].getAttribute("data-blue")
       }

     rgbColors.push(rgb)
    }

    // bewaar settings als JSON string in local storage
    settingsJSON = JSON.stringify(rgbColors);
    localStorage.setItem("VIVES.be.settingsColorSwatches", settingsJSON);
    // Key heel belangrijk!!!



};

const restoreSwatches = () => {

    let settingsJSON = localStorage.getItem("VIVES.be.settingsColorSwatches");

    if (settingsJSON != null) {
       let settings = JSON.parse(settingsJSON);
        for (let i = 0; i < settings.length; i++){
            addSwatchComponent(settings[i].red, settings[i].green, settings[i].blue)
        }
    }

};
