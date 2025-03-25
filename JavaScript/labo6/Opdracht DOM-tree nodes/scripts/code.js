const setup = () => {

    const para = document.querySelector("#abc")
    const childNodes = para.childNodes;

    childNodes.forEach((node, index) => {
        console.log(`Node ${index}:`, node);
        if (node.nodeType === Node.TEXT_NODE) {
            console.log(` -> TEXT NODE met nodeValue: "${node.nodeValue.trim()}"`);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            console.log(` -> ELEMENT NODE: <${node.tagName.toLowerCase()}>`);
        }
    });
}
window.addEventListener("load", setup);