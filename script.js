let hasloTekst;
let nowehaslo;
let haslo;
let tlo = 0;
let hang = document.querySelector("#hang");
let score2 = document.querySelector("#score2");
let score = document.querySelector("#score");
let yes = new Audio("yes.wav");
let no = new Audio("no.wav");
let sprawdz;
let sprawdz2;
let backgroundicon = document.querySelector(".background");
let eye = document.querySelector(".icon-eye");
let eyeoff = document.querySelector(".icon-eye-off");
let allhas = document.querySelector("#allhas");
let icon = document.querySelector("#icon");

let eyewar = true;

function password() {
	if (eyewar === true) {
		haslo.innerText = hasloTekst;

		icon.innerHTML = "<i class='icon-eye-off'></i>";
		eyewar = false;
	} else if (eyewar === false) {
		haslo.innerText = nowehaslo;

		icon.innerHTML = "<i class='icon-eye'></i>";
		eyewar = true;
	}
}

icon.addEventListener("click", password);

function zmihaslo() {
	haslo = document.querySelector("#haslo");

	fetch("https://restcountries.com/v3.1/all")
		.then((response) => response.json())
		.then((data) => {
			let countries = data.map((country) => country.name.common);
			let rand = Math.floor(Math.random() * countries.length);
			haslo.innerHTML = countries[rand]; // Poprawione przypisanie nowego hasła do elementu HTML

			hasloTekst = haslo.textContent;
			hasloTekst = hasloTekst.toUpperCase();

			nowehaslo = hasloTekst.replace(/[a-zA-Z]/g, "-");

			haslo.innerHTML = nowehaslo;
		});
}

let alfs = document.querySelectorAll(".alf");

function letterch(event) {
	let letters = event.target;

	letters.removeEventListener("click", letterch);
	letters.classList.add("clicked");

	let letter = event.target.textContent;
	letter = letter.toUpperCase();

	let hasloArray = nowehaslo.split("");
	let haslocheck = hasloTekst.indexOf(letter);

	let haslorob = hasloTekst;
	let haslorobArray = haslorob.split("");

	if (haslocheck != -1) {
		yes.play();

		hasloArray[haslocheck] = letter;

		letters.style.border = "2px solid #0f0";

		for (let i = 1; i <= nowehaslo.length; i++) {
			haslorobArray[haslocheck] = "#";
			haslorob = haslorobArray.join("");
			hasloArray[haslocheck] = letter;
			haslocheck = haslorob.indexOf(letter);
		}
		nowehaslo = hasloArray.join("");
		haslo.innerText = nowehaslo;
		for (i = 1; i <= nowehaslo.length; i++) {
			sprawdz = nowehaslo.charAt(i);
			if (sprawdz === "-") {
				sprawdz2 = false;
				break;
			} else {
				sprawdz2 = true;
			}
		}

		if (sprawdz2 === true) {
			score2.innerText = "Wygrałeś";
			score2.style.color = "rgb(29, 139, 29)";
			score2.style.fontSize = " 35px !important;";
			score.style.display = "block";
			alfs.forEach((alf) => {
				alf.removeEventListener("click", letterch);
				alf.classList.add("clicked");
			});
		}
	} else if (tlo < 8 && haslocheck === -1) {
		tlo++;
		hang.innerHTML = "<img src='img/s" + tlo + ".jpg'/>";
		letters.style.border = "2px solid #f00";
		no.play();
	} else {
		hang.innerHTML = "<img src='img/s9.jpg'/>";
		score2.innerText = "Przegrałeś";
		score2.style.color = "rgb(200, 29, 29)";
		score.style.display = "block";
		alfs.forEach((alf) => {
			alf.removeEventListener("click", letterch);
			alf.classList.add("clicked");
		});
		no.play();
	}
}

alfs.forEach((alf) => {
	alf.addEventListener("click", letterch);
});

function reload() {
	location.reload();
}

backgroundicon.addEventListener("click", back);

let backgro = false;

function back() {
	if (backgro === false) {
		document.querySelector("body").style.backgroundColor = "#fff";
		document.querySelector("body").style.color = "#000";
		document.querySelector("a").style.color = "#000";
		backgroundicon.style.transform = "rotate(360deg)";

		backgroundicon.innerHTML = "<i class='icon-moon'></i>";
		backgro = true;
	} else {
		document.querySelector("body").style.backgroundColor = "#111";
		document.querySelector("body").style.color = "#fff";
		document.querySelector("a").style.color = "#fff";
		backgroundicon.style.transform = "rotate(-360deg)";
		backgroundicon.innerHTML = "<i class='icon-sun-filled'></i>";
		backgro = false;
	}
}
