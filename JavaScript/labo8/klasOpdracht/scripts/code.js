const setup = () => {

    console.log("setup");
    let evenement = {
        naam: "Codeer Workshop Javascript",
        datum: new Date(2025, 3, 15), // 15 april 2025
        locatie: "Kortrijk",
        deelnemers: ["John", "Maria", "Ahmed", "Sophie"]
    }
    toonEvenementInfo(evenement);
}

const toonEvenementInfo = (event) => {


    console.log("Evenement: " + event.naam)
    console.log("Datum: " + event.datum.toDateString())
    console.log("Locatie: " + event.locatie)
    console.log("Deelnemers: " + event.deelnemers.join(" - "));




    console.log("Aantal dagen tot evenement: " + dagenTotEvent(event))


}

const dagenTotEvent = (event) =>{

    let datum = new Date()
    let tijd = event.datum - datum;
    return Math.ceil(tijd / (60000 * 60 * 24))
}

window.addEventListener("load", setup);