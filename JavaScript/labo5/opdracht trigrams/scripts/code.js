const setup = () => {
    const woord =  "onoorbaar"
    for (let i = 0; i<=woord.length; i++) {
        console.log(woord.substring(i,i+3))
    }
}
window.addEventListener("load", setup);