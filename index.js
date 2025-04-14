"use-strict";

const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const popArtists = [
  "Taylor Swift",
  "Ariana Grande",
  "Ed Sheeran",
  "Dua Lipa",
  "Harry Styles",
  "Billie Eilish",
  "Olivia Rodrigo",
  "Justin Bieber",
  "Shawn Mendes",
  "Selena Gomez",
  "Katy Perry",
  "The Weeknd",
  "Bruno Mars",
  "Doja Cat",
  "Charlie Puth",
  "Camila Cabello",
  "SZA",
  "Miley Cyrus",
  "Sam Smith",
  "Lady Gaga",
];

let lives = 8;

// for displaying characters A-Z
let targetEl = document.getElementById("characters");
for (let i = 0; i < alphabets.length; i++) {
  let newEl = document.createElement("button");
  let newText = document.createTextNode(alphabets[i]);
  newEl.appendChild(newText);
  targetEl.append(newEl);
  newEl.setAttribute("class", "character");
  newEl.setAttribute("id", `artist ${i}`);

  newEl.addEventListener("click", function () {
    return this.id;
  });
}

// when clicking the start button
let artistName = document.getElementById("artist");
function doStart() {
  let randomArtist = Math.floor(Math.random() * popArtists.length);
  let hiddens = popArtists[randomArtist].split(" ");
  let hiddenArtist = "";
  for (let i = 0; i < hiddens.length; i++) {
    for (let j = 0; j < hiddens[i].length; j++) {
      if (j === 0) hiddenArtist += hiddens[i][0];
      else hiddenArtist += "*";
    }
    hiddenArtist += " ";
  }
  artistName.textContent = hiddenArtist;
}
let button = document.getElementById("start");
button.addEventListener("click", doStart);

// when clicking the alphabet buttons
let noOfClicks = 0;
while (noOfClicks < lives) {
  let clickedLetter = document.getElementById("");

  noOfClicks++;
}

// no of lives display
let noOfLives = document.getElementById("lives");
noOfLives.textContent += " " + lives;
