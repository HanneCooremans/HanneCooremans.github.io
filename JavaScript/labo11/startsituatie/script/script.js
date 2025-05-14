// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorziet.

const setup = () => {

    for (let movie of movies){
       let movieframe = createElementWithClassName("div","movie");
        movieframe.setAttribute("data-inlijst", "false");
        movieframe.setAttribute("data-geliket", "false");
        movieframe.setAttribute("data-gedisliket", "false");
        let title = createElementWithClassNameAndText("p", "title",movie.title);
        let knoppen = createElementWithClassName("div", "buttons");
        let duimop = createIconButton('fas fa-thumbs-up', 'unset likebutton', like);
        duimop.setAttribute("data-id", movie.id);
        let duimneer = createIconButton('fas fa-thumbs-down', 'unset likebutton', dislike) ;
        duimneer.setAttribute("data-id", movie.id);
        let afb = createImg(movie.imageUrl);
        let desc = createElementWithClassNameAndText("p","description",movie.description);

        knoppen.appendChild(duimop);
        knoppen.appendChild(duimneer);

        movieframe.appendChild(title);
        movieframe.appendChild(knoppen);
        movieframe.appendChild(afb);
        movieframe.appendChild(desc);
        document.querySelector("#movielist").append(movieframe);
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

const createIconButton = (iconClass, buttonClass, onClick) => {
    const button = createElementWithClassName("a", buttonClass);
    const icon = createElementWithClassName("i", iconClass);
    button.appendChild(icon);
    button.addEventListener("click", onClick);
    return button;
};

const createImg = (naam) => {
    let img = document.createElement("img");
    img.setAttribute("src", naam);
    return img;
}

const like = (event) => {

    // Haal de like-counter van de specifieke film op
    let likeCounter = document.querySelector("#like");

    let nieuwewaarde;
    let elem = event.target;
    let nummer = elem.parentElement.getAttribute("data-id");
    let movieFrame = elem.closest(".movie");  // Zoek naar de filmcontainer
    let inlijst = movieFrame.getAttribute("data-inlijst");

    // Controleer of de like al actief is
    if (event.target.style.color !== "green" && movieFrame.getAttribute("data-gedisliket") === "false") {
        movieFrame.setAttribute("data-geliket", "true");

        // Zet de like-button op groen
        verkleur("green", event);

        // Verhoog de waarde van de like-counter

        nieuwewaarde = parseInt(likeCounter.innerHTML) + 1;
        if (inlijst === "false") {

            // Voeg de film toe aan de "liked movies" lijst als dat nog niet gebeurd is

            let naamfilm = "";
            for (let movie of movies) {
                if (movie.id.toString() === nummer) {
                    naamfilm = movie.title;
                }
            }

            let title = createElementWithClassNameAndText("p", "title", naamfilm);

            let leukefilm = createElementWithClassName("div", 'leukefilmdiv')
            let vuilbak = createIconButton('fas fa-trash', 'fa-fw', verwijder)
            vuilbak.setAttribute("data-id", nummer);

            leukefilm.append(title)
            leukefilm.append(vuilbak)

            let likebarmovies = document.querySelector("#likebarmovies")
            let likebar = document.querySelector("#likebar")
            likebarmovies.append(leukefilm);
            likebar.style.visibility = "";
            movieFrame.setAttribute("data-inlijst", "true");
        }
    }
        else if (movieFrame.getAttribute("data-gedisliket") === "false"){
            movieFrame.setAttribute("data-geliket", "false");

            // Zet de dislike-button terug naar zwart als er nog eens op geklikt word
            verkleur("black", event);
            movieFrame.setAttribute("data-inlijst", "false");

            // Verminder de waarde van de dislike-counter
        nieuwewaarde =  parseInt(likeCounter.innerHTML) - 1;

    }
        else {
            alert("Je kunt niet liken als je de film al gedisliket hebt!");
    }
    likeCounter.innerHTML = nieuwewaarde.toString();

}

const dislike = (event) => {

    // Haal de like-counter van de specifieke film op
    let dislikeCounter = document.querySelector("#dislike");

    let nieuwewaarde;
    let elem = event.target;
    // Controleer of de like al actief is
    let movieFrame = elem.closest(".movie");  // Zoek naar de filmcontainer


    // Controleer of de like al actief is
    if (event.target.style.color !== "red" && movieFrame.getAttribute("data-geliket") === "false") {

        // Zet de like-button op groen
        verkleur("red", event);
        movieFrame.setAttribute("data-gedisliket", "true");

        // Verhoog de waarde van de like-counter

        nieuwewaarde =  parseInt(dislikeCounter.innerHTML) + 1;

        } else if (movieFrame.getAttribute("data-geliket") === "false"){
        movieFrame.setAttribute("data-gedisliket", "false");
        event.target.parentElement.getAttribute("data-id");
        // Zet de dislike-button terug naar zwart als er nog eens op geklikt word
        verkleur("black", event);

        // Verminder de waarde van de dislike-counter

        nieuwewaarde =  parseInt(dislikeCounter.innerHTML) - 1;
    } else {
        alert("Je kunt niet disliken als je de film al geliket hebt!");
    }
    dislikeCounter.innerHTML = nieuwewaarde.toString();
}

const verkleur = (kleur, event) => {
    let duim = event.target;
    duim.style.color = kleur;

}

const verwijder = (event) => {
    let elem = event.target;

    // Zoek de filmcontainer
    let liketfilmdiv = elem.closest(".leukefilmdiv");

    // Verwijder de film uit de "Liked Movies"-lijst
    let likebarmovies = document.querySelector("#likebarmovies");
    likebarmovies.removeChild(liketfilmdiv);  // Verwijder de filmcontainer uit de lijst


    // Zet de 'data-inlijst' van de film terug naar "false" (de film is niet meer in de lijst)

    // Verkrijg de id van de film die we willen verwijderen
    let movieId = event.target.getAttribute("data-id");

    // Verkrijg alle movie frames
    let movieFrames = document.querySelectorAll(".movie");
    let i = 0;
    let inlijstAangepast = false;  // Parameter die bijhoudt of 'inlijst' is aangepast

    // Gebruik een while-lus om door de films te itereren
    while (i < movieFrames.length && !inlijstAangepast) {
        let movieFrame = movieFrames[i];

        if (movieFrame.getAttribute("data-id") === movieId) {
            // Zet 'data-inlijst' op false
            movieFrame.setAttribute("data-inlijst", "false");
            inlijstAangepast = true;  // Stop de lus door deze parameter op true te zetten
        }

        i++;
    }


    // Als er geen films meer in de "Liked Movies" lijst staan, verberg dan de sidebar
    if (likebarmovies.children.length === 0) {
        document.querySelector("#likebar").style.visibility = "hidden"; // Verberg de sidebar
    }

}

window.addEventListener("load", setup);