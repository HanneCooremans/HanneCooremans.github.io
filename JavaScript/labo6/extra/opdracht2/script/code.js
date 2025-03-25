

const setup = () => {

    let items = document.querySelectorAll('li');
    for(let i = 0; i < items.length; i++) {
        items[i].setAttribute('class', 'listItem');
    }

    let myPic = document.createElement('img');
    myPic.setAttribute("src", 'images/bloemen.jpg')
    myPic.setAttribute('alt', 'foto');
    document.querySelector('body').appendChild(myPic);
}



window.addEventListener("load", setup);