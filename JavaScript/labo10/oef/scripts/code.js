let media = [];

const setup = () => {

    const settingsJSON = localStorage.getItem("VIVES.be.media");
    if (settingsJSON) {
        media = JSON.parse(settingsJSON);
        media.forEach(m => {
            toonOpgeslagenKaart(m);
        });
    }

    let btn = document.getElementById("btn");
    btn.addEventListener("click", createCard);
}

const createCard = () => {

    let input = document.getElementById("input").value;

    let regex = input.match("\/(g|x|y|i) [a-z]*")

    if( regex == null ){
        alert("Gelieve een geldige zoekterm in te geven");
    }else{

        let medialetter = input.substring(0,2);
        let zoektext = input.substring(2).trim();
        let titeltext = "";
        let kaardclasse = ""
        let  url= ""

        if(medialetter === "/g"){
            titeltext = "Google";
            kaardclasse = "google-card";
            url = "https://www.google.com/search?q="+ zoektext;

        }else if (medialetter === "/i"){
            titeltext = "Instagram";
            kaardclasse = "instagram-card";
            url = "https://www.instagram.com/explore/tags/" + zoektext + "/";
        }
        else if (medialetter === "/y"){
            titeltext = "Youtube";
            kaardclasse = "youtube-card";
            url = "https://www.youtube.com/results?search_query="+ zoektext.replace(" ","+");
        }
        else if (medialetter === "/x"){
            titeltext = "Twitter";
            kaardclasse = "twitter-card";
            url = "https://x.com/hashtag/" + zoektext;
        }
        let breedte = createElementWithClassName("div","col-4");
        let kaard = createElementWithClassName("div","card");
        kaard.classList.add(kaardclasse)
        let kaardbody = createElementWithClassName("div","card-body");
        let kaardtitel = createElementWithClassNameAndText("h5","card-title",titeltext);
        let link = createElementWithClassName("a","btn");

        kaardbody.append(createElementWithClassNameAndText("div","zoekopdracht",zoektext))
        kaardbody.append(createLinkButton(url))

        kaardbody.append(link);
        kaard.append(kaardtitel);
        kaard.append(kaardbody);
        breedte.append(kaard);

        document.querySelector("#resultContainer .row").append(breedte);

        let medium = {
            title: titeltext,
            text: zoektext,
            url: url
        };

        media.push(medium);

        let settingsJSON = JSON.stringify(media);
        localStorage.setItem("VIVES.be.media", settingsJSON);
    }

}

const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
}

const createElementWithClassNameAndText = (element, className, text) => {
    let e = createElementWithClassName(element, className)
    e.appendChild(document.createTextNode(text));
    return e;
};

const createLinkButton = (url) => {
    let linkGo = document.createElement("a");
    linkGo.setAttribute("href", url);
    linkGo.setAttribute("target", "_blank");
    linkGo.setAttribute("class", "btn btn-primary");
    linkGo.appendChild(document.createTextNode("GO!"));
    return linkGo;
}

const toonOpgeslagenKaart = (medium) => {
    let breedte = createElementWithClassName("div","col-4");
    let kaard = createElementWithClassName("div","card");

    let kaardclasse = "";
    if(medium.title === "Google") kaardclasse = "google-card";
    if(medium.title === "Instagram") kaardclasse = "instagram-card";
    if(medium.title === "Youtube") kaardclasse = "youtube-card";
    if(medium.title === "Twitter") kaardclasse = "twitter-card";

    if (kaardclasse !== "") {
        kaard.classList.add(kaardclasse);
    }

    let kaardbody = createElementWithClassName("div","card-body");
    let kaardtitel = createElementWithClassNameAndText("h5","card-title",medium.title);
    let link = createLinkButton(medium.url);

    kaardbody.append(createElementWithClassNameAndText("div","zoekopdracht",medium.text));
    kaardbody.append(link);
    kaard.append(kaardtitel);
    kaard.append(kaardbody);
    breedte.append(kaard);

    document.querySelector("#resultContainer .row").append(breedte);
}


window.addEventListener("load", setup);