const setup = () => {
    let familie = ["f1","f2","f3","f4","f5"];
    console.log(familie.length)
    for (let i = 0; i < familie.length; i+=2) {
        console.log(familie[i])
    }
    voegNaamToe(familie)
    console.log(familie)

    console.log(familie.join(' - '))
}

const voegNaamToe = (familie) => {
    const naam = prompt("New name")
    familie.push(naam)

}

window.addEventListener("load", setup);