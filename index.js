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
  "Ariana Grande",
  "Billie Eilish",
  "Bruno Mars",
  "Camila Cabello",
  "Charlie Puth",
  "Doja Cat",
  "Dua Lipa",
  "Ed Sheeran",
  "Harry Styles",
  "Justin Bieber",
  "Katy Perry",
  "Lady Gaga",
  "Miley Cyrus",
  "Olivia Rodrigo",
  "Sam Smith",
  "Selena Gomez",
  "Shawn Mendes",
  "SZA",
  "Taylor Swift",
  "The Weekend",
];

let lives = 8;
let noOfWrongClicks = [0];
let clickedLetter = "";
let randomNo = Math.floor(Math.random() * popArtists.length);
let randomPopArtist = popArtists[randomNo].toUpperCase();
let randomArtistCharsCount = {};

// adding into the charCount map
for (let i = 1; i < randomPopArtist.length; i++) {
  if (randomPopArtist[i] == " ") i += 2;
  randomArtistCharsCount[randomPopArtist[i]] =
    (randomArtistCharsCount[randomPopArtist[i]] || 0) + 1;
}
console.log(randomPopArtist);
console.log({ randomArtistCharsCount });

// DOM
let artistName = document.getElementById("artist");
let updateArtistName = document.getElementById("artist");
let showResult = document.getElementById("result");

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
    console.log(clickedLetter);
    console.log(randomArtistCharsCount[clickedLetter]);
    if (noOfWrongClicks[0] < lives) {
      if (randomArtistCharsCount[clickedLetter]) {
        let index;
        for (let i = 0; i < randomPopArtist.length; i++) {
          if (clickedLetter === randomPopArtist[i]) {
            console.log("artist at i : " + randomPopArtist[i]);
            randomPopArtist.replace(randomPopArtist[i], "#");
            console.log("randomPopArtist after adding # :" + randomPopArtist);
            index = i;
            if (randomArtistCharsCount[randomPopArtist[i]] > 1) {
              randomArtistCharsCount[randomPopArtist[i]]--;
            } else {
              delete randomArtistCharsCount[randomPopArtist[i]];
            }

            console.log("inside for loop:---");
            console.log({ randomArtistCharsCount });
            if (!randomArtistCharsCount && lives) {
              showResult.textContent =
                "Congratulations🎆🎆🎆! You've won!!!🤩🤩🤩";
            }
            break;
          }
        }
        let currentText = updateArtistName.textContent.split("");
        currentText[index] = clickedLetter;
        updateArtistName.textContent = currentText.join("");
      } else {
        noOfWrongClicks[0] += 1;
        noOfLives.textContent =
          "No of lives remaining: " +
          (lives - noOfWrongClicks[0] <= 0 ? 0 : lives - noOfWrongClicks[0]);
      }
    } else {
      showResult.textContent = "You Lose!!!";
    }
  });
}

// when clicking the start button

function doStart() {
  let hiddens = randomPopArtist.split(" ");
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
noOfLives.textContent += " " + (lives - noOfWrongClicks[0]);
