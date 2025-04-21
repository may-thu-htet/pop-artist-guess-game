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
let hiddenArtist = "";
let randomNo = Math.floor(Math.random() * popArtists.length);
let randomPopArtist = popArtists[randomNo].toUpperCase();
console.log("randomPopAtrist " + randomPopArtist);

let randomArtistCharsCount = {};

// adding into the charCount map
for (let i = 1; i < randomPopArtist.length; i++) {
  if (randomPopArtist[i] == " ") i += 2;
  randomArtistCharsCount[randomPopArtist[i]] =
    (randomArtistCharsCount[randomPopArtist[i]] || 0) + 1;
}

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
    if (noOfWrongClicks[0] < lives) {
      if (randomArtistCharsCount[clickedLetter]) {
        let index;
        for (let i = 1; i < randomPopArtist.length; i++) {
          if (randomPopArtist[i] == " ") i += 2;
          if (clickedLetter === randomPopArtist[i]) {
            thisButton = document.getElementById(this.id);
            thisButton.setAttribute("class", "character correct");
            index = i;
            if (randomArtistCharsCount[randomPopArtist[i]] > 1) {
              randomArtistCharsCount[randomPopArtist[i]]--;
            } else {
              delete randomArtistCharsCount[randomPopArtist[i]];
            }

            // replace the random artist char with "*"
            let randomAtristCharList = randomPopArtist.split("");
            randomAtristCharList[i] = "*";
            randomPopArtist = randomAtristCharList.join("");

            console.log("randomPopArtistcharList" + randomAtristCharList);
            console.log("randomPopArtist" + randomPopArtist);

            // won statement
            if (randomPopArtist.trim() === hiddenArtist.trim() && lives != 0) {
              console.log("randomPopArtist= " + randomPopArtist);
              console.log("hidden Artist= " + hiddenArtist);
              showResult.textContent =
                "Congratulations🎆🎆🎆! You've won!!!🤩🤩🤩";
            }
            break;
          }
        }
        // For loop ends here

        // update the display name on screen whenever the correct char is clicked
        let currentText = updateArtistName.textContent.split("");
        currentText[index] = clickedLetter;
        updateArtistName.textContent = currentText.join("");
      } else {
        noOfWrongClicks[0] += 1;
        noOfLives.textContent =
          "No of lives remaining: " +
          (lives - noOfWrongClicks[0] <= 0 ? 0 : lives - noOfWrongClicks[0]);
        thisButton = document.getElementById(this.id);
        thisButton.setAttribute("class", "character notCorrect");
      }
    } else {
      showResult.textContent = "You Lose!!!";
    }
  });
}

// when clicking the start button

function doStart() {
  let hiddens = randomPopArtist.split(" ");
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
