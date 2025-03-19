const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
	valideerFamilienaam()
	valideerGeboortedatum()
	valideerEmail()
	valideerAantalKinderen()
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let errVoornaam = document.getElementById("errVoornaam");
	let voornaam = txtVoornaam.value.trim();
	if (voornaam.length > 30 ) {
		txtVoornaam.className="invalid"; // invalid class instellen
		errVoornaam.innerHTML = "max. 30 karakters";
	} else {
		txtVoornaam.className=""; // alle classes verwijderen
		errVoornaam.innerHTML = "";
	}
};

const valideerFamilienaam = () => {
	let txtFamilienaam = document.getElementById("txtFamilienaam");
	let errFamilienaam = document.getElementById("errFamilienaam");
	let familienaam = txtFamilienaam.value.trim();
	if (familienaam.length > 50 ) {
		txtFamilienaam.className="invalid"; // invalid class instellen
		errFamilienaam.innerHTML = "max. 50 karakters";
	} else if (familienaam.length === 0){
		txtFamilienaam.className="invalid"; // invalid class instellen
		errFamilienaam.innerHTML = "verplicht veld";
	}
	else {
		txtFamilienaam.className=""; // alle classes verwijderen
		errFamilienaam.innerHTML = "";
	}
};

const valideerGeboortedatum = () => {
	let txtGeboortedatum = document.getElementById("txtGeboortedatum");
	let errGeboortedatum = document.getElementById("errGeboortedatum");
	let geboortedatum = txtGeboortedatum.value.trim();

	if (geboortedatum.length === 0){
		txtGeboortedatum.className="invalid"; // invalid class instellen
		errGeboortedatum.innerHTML = "verplicht veld";
	}else{
		// controle vorm:
		// het jaartal moet 4 karakters lang zijn en een getal voorstellen
		// de maand en dag stukken moeten elk 2 karakters lang zijn en een positief getal voorstellen
		// er moeten twee '-' streepjes in voorkomen op de juiste plaatsen

		const jaar = geboortedatum.slice(0, 4);
		const maand = geboortedatum.slice(5, 7);
		const dag = geboortedatum.slice(8, 10);
		const eersteStreepje = geboortedatum.slice(4, 5);
		const tweedeStreepje = geboortedatum.slice(7, 8);

		if (isGetal(jaar) === false || isGetal(maand) === false || isGetal(dag) === false || eersteStreepje !== "-" || tweedeStreepje !== "-" ) {
			errGeboortedatum.innerHTML = ("formaat is niet jjjj-mm-dd")
		}
	}
};
const valideerEmail = () => {
	let txtEmail = document.getElementById("txtEmail");
	let errEmail = document.getElementById("errEmail");
	let email = txtEmail.value.trim();

	if(email.length === 0){
		txtEmail.className="invalid"; // invalid class instellen
		errEmail.innerHTML = "verplicht veld";
	}else{
		let index = email.indexOf("@");
		if(email.indexOf("@",index+1) !== -1 || email.slice(index-1,index) === "" || email.slice(index+1, index+2) === ""){
			txtEmail.className="invalid"; // invalid class instellen
			errEmail.innerHTML = "geen geldig email adres";
		}
	}

	// niet leeg (error : "verplicht veld")
	// exact 1 @-teken (error : "geen geldig email adres")
	// min 1 karakter voor en na het @ teken (error : "geen geldig email adres")


};
const valideerAantalKinderen = () => {

	let txtAantalKinderen = document.getElementById("txtAantalKinderen");
	let errAantalKinderen = document.getElementById("errAantalKinderen");
	let aantalKinderen = txtAantalKinderen.value.trim();

	if(isGetal(aantalKinderen) === false || aantalKinderen < 0){
		txtAantalKinderen.className="invalid";
		errAantalKinderen.innerHTML = "is geen positief getal";
	}else{
		if(aantalKinderen >= 99){
			txtAantalKinderen.className="invalid";
			errAantalKinderen.innerHTML = "is te vruchtbaar";
		}
	}

	// getal (error : "is geen positief getal")
	// niet negatief (error : "is geen positief getal")
	// moet kleiner dan 99 (error : "is te vruchtbaar")

};



const isGetal = (tekst) => {
	return !isNaN(tekst);
}

window.addEventListener("load", setup);