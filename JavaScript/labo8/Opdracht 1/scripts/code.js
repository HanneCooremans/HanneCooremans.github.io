const setup = () => {

    let event = new Date()

    let geboren = new Date(2005, 2,18)

    let tijd = event - geboren;
    console.log(tijd / (60000*60*24))

}
window.addEventListener("load", setup);