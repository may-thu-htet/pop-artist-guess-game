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
  "The Weekend",
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
let noOfWrongClicks = [0];
let clickedLetter = "";
let randomArtist = Math.floor(Math.random() * popArtists.length);
let artistName = document.getElementById("artist");
let updateArtistName = document.getElementById("artist");

// for displaying characters A-Z
let targetEl = document.getElementById("characters");
for (let i = 0; i < alphabets.length; i++) {
  let newEl = document.createElement("button");
  let newText = document.createTextNode(alphabets[i]);
  newEl.appendChild(newText);
  targetEl.append(newEl);
  newEl.setAttribute("class", "character");
  newEl.setAttribute("id", newEl.textContent);

  // when clicking the alphabet buttons
  newEl.addEventListener("click", function () {
    clickedLetter = newEl.textContent;
    if (noOfWrongClicks[0] < lives) {
      if (popArtists[randomArtist].toUpperCase().includes(clickedLetter)) {
        let index;
        for (let i = 0; i < popArtists[randomArtist].length; i++) {
          if (clickedLetter === popArtists[randomArtist][i].toUpperCase()) {
            index = i;
          }
        }
        let currentText = updateArtistName.textContent.split("");
        currentText[index] = clickedLetter;
        updateArtistName.textContent = currentText.join("");
      } else {
        noOfWrongClicks[0] += 1;
        console.log("inside else : " + noOfWrongClicks[0]);
        noOfLives.textContent =
          "No of lives remaining: " +
          (lives - noOfWrongClicks[0] <= 0 ? 0 : lives - noOfWrongClicks[0]);
      }
    } else {
      let showResult = document.getElementById("result");
      showResult.textContent = "You Lose!!!";
    }
  });
}

// when clicking the start button

function doStart() {
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

// no of lives display
let noOfLives = document.getElementById("lives");
console.log("noOfWrongClicks : " + noOfWrongClicks[0]);

noOfLives.textContent += " " + (lives - noOfWrongClicks[0]);
