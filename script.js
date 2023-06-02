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

let cat = document.querySelectorAll(".cat");
let catall = document.querySelector("#cat");

let eyewar = true;

let sportArray = [
	"Football",
	"Basketball",
	"Tennis",
	"Cricket",
	"Rugby",
	"Golf",
	"Athletics",
	"Baseball",
	"Volleyball",
	"Ice",
	"Hockey",
	"Swimming",
	"Cycling",
	"Boxing",
	"Chess",
];

let houseArray = [
	"Living room",
	" Bedroom",
	" Kitchen",
	" Bathroom",
	" Dining room",
	" Garden",
	" Patio",
	" Balcony",
	" Backyard",
	" Front yard",
	" Garage",
	" Attic",
	" Basement",
	" Home office",
	" Study room",
	" Playroom",
	" Nursery",
	" Laundry room",
	" Pantry",
	" Walk-in closet",
	" Mudroom",
	" Staircase",
	" Fireplace",
	" Sofa",
	" Coffee table",
	" Dining table",
	" Bed",
	" Wardrobe",
	" Kitchen island",
	" Oven",
	" Refrigerator",
	" Dishwasher",
	" Washing machine",
	" Dryer",
	" Shower",
	" Bathtub",
	" Sink",
	" Toilet",
	" Mirror",
	" Curtain",
	" Rug",
	" Lamp",
	" Plant",
	" Flower vase",
	" Bookshelf",
	" TV stand",
	" Wall art",
	" Clock",
	" Home decor",
	" Window treatment",
];

let carArray = [
	"Toyota",
	" Ford",
	" Chevrolet",
	" Volkswagen",
	" Honda",
	" BMW",
	" Mercedes-Benz",
	" Audi",
	" Nissan",
	" Hyundai",
	" Kia",
	" Volvo",
	" Jeep",
	" Subaru",
	" Mazda",
	" Lexus",
	" Porsche",
	" Tesla",
	" Land Rover",
	" Jaguar",
	" Fiat",
	" Peugeot",
	" Renault",
	" Mitsubishi",
	" Mini",
	" Škoda",
	" Citroën",
	" Alfa Romeo",
	" Bentley",
	" Rolls-Royce",
	" Aston Martin",
	" Lamborghini",
	" Ferrari",
	" Maserati",
	" Bugatti",
	" GMC",
	" Cadillac",
	" Chrysler",
	" Dodge",
	" Infiniti",
	" Acura",
	" Lincoln",
	" Buick",
	" Suzuki",
];

let gamesArray = [
	"Minecraft",
	" Fortnite",
	" Grand Theft Auto V",
	" League of Legends",
	" Call of Duty: Warzone",
	" Overwatch",
	" Counter-Strike: Global Offensive",
	" World of Warcraft",
	" Apex Legends",
	" Valorant",
	" Dota 2",
	" The Witcher 3: Wild Hunt",
	" Rocket League",
	" FIFA 21",
	" Battlefield V",
	" Assassin's Creed Valhalla",
	" Red Dead Redemption 2",
	" Among Us",
	" Destiny 2",
	" Minecraft Dungeons",
	" Cyberpunk 2077",
	" The Elder Scrolls V: Skyrim",
	" Fall Guys: Ultimate Knockout",
	" Among Us",
	" Resident Evil Village",
	" Far Cry 6",
	" Halo Infinite",
	" The Legend of Zelda: Breath of the Wild",
	" Fortnite",
	" Among Us",
	" Assassin's Creed Odyssey",
	" PUBG",
	" The Last of Us Part II",
	" Super Mario Odyssey",
	" FIFA 22",
	" Mortal Kombat 11",
	" God of War",
	" Super Smash Bros. Ultimate",
	" Resident Evil 3",
	" Final Fantasy VII Remake",
	" Ghost of Tsushima",
	" Genshin Impact",
	" Star Wars Jedi: Fallen Order",
	" Tom Clancy's Rainbow Six Siege",
	" Diablo III",
	" Tom Clancy's The Division 2",
	" Dark Souls III",
	" Mass Effect Legendary Edition",
	"Borderlands",
];

let peopleArray = [
	"Albert Einstein",
	" Leonardo da Vinci",
	" Marie Curie",
	" William Shakespeare",
	" Nelson Mandela",
	" Mahatma Gandhi",
	" Martin Luther King Jr.",
	" Mother Teresa",
	" Rosa Parks",
	" Oprah Winfrey",
	" Malala Yousafzai",
	" Steve Jobs",
	" Bill Gates",
	" Mark Zuckerberg",
	" Elon Musk",
	" Barack Obama",
	" Queen Elizabeth II",
	" Winston Churchill",
	" Abraham Lincoln",
	" John F. Kennedy",
	" Princess Diana",
	" Amelia Earhart",
	" Coco Chanel",
	" Serena Williams",
	" Michael Jordan",
	" Cristiano Ronaldo",
	" Lionel Messi",
	" Usain Bolt",
	" Muhammad Ali",
	" David Beckham",
	" Tom Hanks",
	" Meryl Streep",
	" Leonardo DiCaprio",
	" Angelina Jolie",
	" Beyoncé",
	" Madonna",
	" Taylor Swift",
	" Rihanna",
	" Adele",
	" Oprah Winfrey",
	" Ellen DeGeneres",
	" Stephen Hawking",
	" Neil Armstrong",
	" Jane Goodall",
	" Albert Einstein",
	" Marie Curie",
	" Maya Angelou",
	" Audrey Hepburn",
	" Elvis Presley",
	" Bob Marley",
];

let animalsArray = [
	"Dog",
	"Cat",
	"Elephant",
	"Lion",
	"Tiger",
	"Giraffe",
	"Monkey",
	"Bear",
	"Wolf",
	"Dolphin",
	"Whale",
	"Penguin",
	"Panda",
	"Koala",
	"Kangaroo",
	"Gorilla",
	"Cheetah",
	"Zebra",
	"Horse",
	"Cow",
	"Sheep",
	"Goat",
	"Pig",
	"Rabbit",
	"Squirrel",
	"Fox",
	"Deer",
	"Owl",
	"Eagle",
	"Parrot",
	"Penguin",
	"Dolphin",
	"Shark",
	"Crocodile",
	"Turtle",
	"Octopus",
	"Jellyfish",
	"Butterfly",
	"Bee",
	"Ant",
	"Spider",
	"Snail",
	"Fish",
	"Lobster",
	"Crab",
	"Seahorse",
	"Dolphin",
	"Penguin",
	"Koala",
	"Kangaroo",
	"Panda",
	"Chimpanzee",
	"Elephant",
	"Lion",
	"Tiger",
];

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

		document
			.querySelectorAll(".cat")
			.forEach((cats) => (cats.style.backgroundColor = "#fff"));

		document
			.querySelectorAll(".cat")
			.forEach((cats) => (cats.style.border = "1px solid #000"));

		backgroundicon.style.transform = "rotate(360deg)";

		backgroundicon.innerHTML = "<i class='icon-moon'></i>";
		backgro = true;
	} else {
		document
			.querySelectorAll(".cat")
			.forEach((cats) => (cats.style.backgroundColor = ""));

		document
			.querySelectorAll(".cat")
			.forEach((cats) => (cats.style.border = "1px solid #fff"));

		document.querySelector("body").style.backgroundColor = "#111";
		document.querySelector("body").style.color = "#fff";
		document.querySelector("a").style.color = "#fff";
		backgroundicon.style.transform = "rotate(-360deg)";
		backgroundicon.innerHTML = "<i class='icon-sun-filled'></i>";
		backgro = false;
	}
}

function category(event) {
	let el = event.target;

	document.querySelector("#hastitle").innerHTML = "Category: " + el.textContent;

	if (el.id === "countries") {
		catall.style.display = "none";
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

	if (el.id === "capital") {
		catall.style.display = "none";
		fetch("https://restcountries.com/v3.1/all")
			.then((response) => response.json())
			.then((data) => {
				let capitals = data.map((capitalc) => capitalc.capital);

				let rand = Math.floor(Math.random() * capitals.length);
				haslo.innerHTML = capitals[rand]; // Poprawione przypisanie nowego hasła do elementu HTML

				hasloTekst = haslo.textContent;
				hasloTekst = hasloTekst.toUpperCase();

				nowehaslo = hasloTekst.replace(/[a-zA-Z]/g, "-");

				haslo.innerHTML = nowehaslo;
			});
	}

	if (el.id === "sport") {
		let randnum = Math.floor(Math.random() * sportArray.length + 1);
		catall.style.display = "none";

		haslo.innerHTML = sportArray[randnum];

		hasloTekst = haslo.textContent;
		hasloTekst = hasloTekst.toUpperCase();

		nowehaslo = hasloTekst.replace(/[a-zA-Z]/g, "-");

		haslo.innerHTML = nowehaslo;
	}

	if (el.id === "house") {
		let randnum = Math.floor(Math.random() * houseArray.length + 1);
		catall.style.display = "none";

		haslo.innerHTML = houseArray[randnum];

		hasloTekst = haslo.textContent;
		hasloTekst = hasloTekst.toUpperCase();

		nowehaslo = hasloTekst.replace(/[a-zA-Z]/g, "-");

		haslo.innerHTML = nowehaslo;
	}

	if (el.id === "car") {
		let randnum = Math.floor(Math.random() * carArray.length + 1);
		catall.style.display = "none";

		haslo.innerHTML = carArray[randnum];

		hasloTekst = haslo.textContent;
		hasloTekst = hasloTekst.toUpperCase();

		nowehaslo = hasloTekst.replace(/[a-zA-Z]/g, "-");

		haslo.innerHTML = nowehaslo;
	}

	if (el.id === "games") {
		let randnum = Math.floor(Math.random() * gamesArray.length + 1);
		catall.style.display = "none";

		haslo.innerHTML = gamesArray[randnum];

		hasloTekst = haslo.textContent;
		hasloTekst = hasloTekst.toUpperCase();

		nowehaslo = hasloTekst.replace(/[a-zA-Z]/g, "-");

		haslo.innerHTML = nowehaslo;
	}

	if (el.id === "people") {
		let randnum = Math.floor(Math.random() * peopleArray.length + 1);
		catall.style.display = "none";

		haslo.innerHTML = peopleArray[randnum];

		hasloTekst = haslo.textContent;
		hasloTekst = hasloTekst.toUpperCase();

		nowehaslo = hasloTekst.replace(/[a-zA-Z]/g, "-");

		haslo.innerHTML = nowehaslo;
	}

	if (el.id === "animals") {
		let randnum = Math.floor(Math.random() * animalsArray.length + 1);
		catall.style.display = "none";

		haslo.innerHTML = animalsArray[randnum];

		hasloTekst = haslo.textContent;
		hasloTekst = hasloTekst.toUpperCase();

		nowehaslo = hasloTekst.replace(/[a-zA-Z]/g, "-");

		haslo.innerHTML = nowehaslo;
	}

	if (el.id === "random") {
		let randnum = Math.floor(Math.random() * 8 + 1);

		if (randnum === 1) {
			catall.style.display = "none";
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

		if (randnum === 2) {
			catall.style.display = "none";
			fetch("https://restcountries.com/v3.1/all")
				.then((response) => response.json())
				.then((data) => {
					let capitals = data.map((capitalc) => capitalc.capital);

					let rand = Math.floor(Math.random() * capitals.length);
					haslo.innerHTML = capitals[rand]; // Poprawione przypisanie nowego hasła do elementu HTML

					hasloTekst = haslo.textContent;
					hasloTekst = hasloTekst.toUpperCase();

					nowehaslo = hasloTekst.replace(/[a-zA-Z]/g, "-");

					haslo.innerHTML = nowehaslo;
				});
		}

		if (randnum === 3) {
			let randnum = Math.floor(Math.random() * sportArray.length + 1);
			catall.style.display = "none";

			haslo.innerHTML = sportArray[randnum];

			hasloTekst = haslo.textContent;
			hasloTekst = hasloTekst.toUpperCase();

			nowehaslo = hasloTekst.replace(/[a-zA-Z]/g, "-");

			haslo.innerHTML = nowehaslo;
		}

		if (randnum === 4) {
			let randnum = Math.floor(Math.random() * houseArray.length + 1);
			catall.style.display = "none";

			haslo.innerHTML = houseArray[randnum];

			hasloTekst = haslo.textContent;
			hasloTekst = hasloTekst.toUpperCase();

			nowehaslo = hasloTekst.replace(/[a-zA-Z]/g, "-");

			haslo.innerHTML = nowehaslo;
		}

		if (randnum === 5) {
			let randnum = Math.floor(Math.random() * carArray.length + 1);
			catall.style.display = "none";

			haslo.innerHTML = carArray[randnum];

			hasloTekst = haslo.textContent;
			hasloTekst = hasloTekst.toUpperCase();

			nowehaslo = hasloTekst.replace(/[a-zA-Z]/g, "-");

			haslo.innerHTML = nowehaslo;
		}

		if (randnum === 6) {
			let randnum = Math.floor(Math.random() * gamesArray.length + 1);
			catall.style.display = "none";

			haslo.innerHTML = gamesArray[randnum];

			hasloTekst = haslo.textContent;
			hasloTekst = hasloTekst.toUpperCase();

			nowehaslo = hasloTekst.replace(/[a-zA-Z]/g, "-");

			haslo.innerHTML = nowehaslo;
		}

		if (randnum === 7) {
			let randnum = Math.floor(Math.random() * peopleArray.length + 1);
			catall.style.display = "none";

			haslo.innerHTML = peopleArray[randnum];

			hasloTekst = haslo.textContent;
			hasloTekst = hasloTekst.toUpperCase();

			nowehaslo = hasloTekst.replace(/[a-zA-Z]/g, "-");

			haslo.innerHTML = nowehaslo;
		}

		if (randnum === 8) {
			let randnum = Math.floor(Math.random() * animalsArray.length + 1);
			catall.style.display = "none";

			haslo.innerHTML = animalsArray[randnum];

			hasloTekst = haslo.textContent;
			hasloTekst = hasloTekst.toUpperCase();

			nowehaslo = hasloTekst.replace(/[a-zA-Z]/g, "-");

			haslo.innerHTML = nowehaslo;
		}
	}
}

cat.forEach((cats) => cats.addEventListener("click", category));
