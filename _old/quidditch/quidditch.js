// Card data
const cardsArray = [
  {
    name: "dobby",
    img: "https://i.pinimg.com/originals/fb/1e/f5/fb1ef50d144e10869844fe4eecff7395.jpg",
  },
  {
    name: "voldemort",
    img: "https://www.sideshow.com/storage/product-images/908663/voldemort-and-nagini_harry-potter_gallery_60c3e01b8fc67.jpg",
  },
  {
    name: "harry",
    img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/09/29/15/hp.jpg?width=982&height=726&auto=webp&quality=75",
  },
  {
    name: "hedwig",
    img: "https://i.pinimg.com/originals/5c/e1/b2/5ce1b2c7473393a7b4360be900816ffb.jpg",
  },
  {
    name: "ron",
    img: "https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg",
  },
  {
    name: "hermione",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Hermione_Granger_poster.jpg/220px-Hermione_Granger_poster.jpg",
  },
  {
    name: "malfoy",
    img: "https://wallpaperaccess.com/full/1399519.jpg",
  },
  {
    name: "dumbledore",
    img: "https://cdn.lifehack.org/wp-content/uploads/2014/10/3770585-9693277282-vlcsn-copy.png",
  },
  {
    name: "snape",
    img: "https://thefandomentals.com/wp-content/uploads/2016/12/SnapeSeverus-e1475690174936.jpg",
  },
  {
    name: "hagrid",
    img: "https://upload.wikimedia.org/wikipedia/en/1/10/RubeusHagrid.jpg",
  },
  {
    name: "sirius",
    img: "https://i.pinimg.com/originals/98/98/3e/98983e21527a82769c4c510fba00e00b.jpg",
  },
  {
    name: "bellatrix",
    img: "https://media.harrypotterfanzone.com/bellatrix-lestrange-order-of-the-phoenix-portrait-4.jpg",
  },
];


// Grab the div with an id of root
const game = document.getElementById('game')

// Create a section with a class of grid
const grid = document.createElement('section')
grid.setAttribute('class', 'grid')

// Append the grid section to the game div
game.appendChild(grid)

// Duplicate array to create a match for each card
let gameGrid = cardsArray.concat(cardsArray)
// Randomize game grid on each load
gameGrid.sort(() => 0.5 - Math.random())
// For each item in the cardsArray array...
gameGrid.forEach((item) => {
  // Create card element with the name dataset
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.name = item.name;

  // Create front of card
  const front = document.createElement("div");
  front.classList.add("front");

  // Create back of card, which contains
  const back = document.createElement("div");
  back.classList.add("back");
  back.style.backgroundImage = `url(${item.img})`;

  // Append card to grid, and front and back to each card
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});


let firstGuess = "";
let secondGuess = "";
let count = 0;
let previousTarget = null;
let delay = 1200;

// Add match CSS
const match = () => {
  var selected = document.querySelectorAll('.selected')
  selected.forEach((card) => {
    card.classList.add('match')
  })
}

const resetGuesses = () => {
  firstGuess = "";
  secondGuess = "";
  count = 0;

  var selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    card.classList.remove("selected");
  });
};


// Add event listener to grid
grid.addEventListener('click', function (event) {
  // The event target is our clicked item
  let clicked = event.target

  // Do not allow the grid section itself to be selected; only select divs inside the grid
  if (clicked.nodeName === 'SECTION' || clicked === previousTarget) {
    return
  }


if (count < 2) {
    count++
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add("selected");
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add("selected");
    }
    // If both guesses are not empty...
    if (firstGuess !== '' && secondGuess !== '') {
      // and the first guess matches the second match...
      if (firstGuess === secondGuess) {
        // run the match function
        setTimeout(match, delay)
        setTimeout(resetGuesses, delay)
      } else {
          setTimeout(resetGuesses, delay)
      }
    }
    //set previous target to clicked
    previousTarget = clicked;
  }
})
