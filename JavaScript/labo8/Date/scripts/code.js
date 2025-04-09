const setup = () => {
    let start = new Date('2025-04-01T12:10:30');
    console.log(start);

    console.log((start.getDate())) // dag
    console.log(start.getMonth()+1) // telt vanaf 0
    console.log(start.getFullYear()); // get.year werkt niet bij alle browsers

    console.log(start.getDate() + "-"
        + (start.getMonth() + 1) + "-"
        + start.getFullYear() + " " + start.getHours()
        + ":" + start.getMinutes() + ":" + start.getSeconds());

    let Datum = new Date(2025,0,1)
    console.log(Datum);


    let event = new Date()

    console.log("toString " + event.toString()) // gebruikt jouw tijdzone

    console.log("toISOString " + event.toISOString()) // geen gebruik van tijdzones

    console.log("toDatString " + event.toDateString())

    console.log("toTimeString " + event.toTimeString())

    let geboren = new Date(2005, 2,18)

    let tijd = event - geboren;
    console.log(tijd / (60000*60*24))
}
window.addEventListener("load", setup);