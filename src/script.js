const player1 = 0;
const player2 = 1;
const playerTurn = 1;

let currentGame = null;
/*
 * ========================================================
 * ========================================================
 * ========================================================
 * ========================================================
 *
 *                  DOM Creation Functions
 *
 * ========================================================
 * ========================================================
 * ========================================================
 */

const createContainer = (containerId, containerColor) => {
  const newDiv = document.createElement('div');
  newDiv.id = containerId;
  newDiv.style.backgroundColor = containerColor;
  // document.body.appendChild(newDiv);
  return newDiv;
};

const createLabel = (labelFor, labelText) => {
  const newLabel = document.createElement('label');
  newLabel.for = labelFor;
  newLabel.innerText = labelText;
  return newLabel;
};

const createInput = (inputType, inputName, inputValue, inputRequired) => {
  const newInput = document.createElement('input');
  newInput.type = inputType;
  newInput.id = inputName;
  newInput.name = inputName;
  newInput.value = inputValue;
  newInput.required = inputRequired;
  return newInput;
};

const createButton = (btnId, btnText, btnCallback) => {
  const newBtn = document.createElement('button');
  newBtn.id = btnId;
  newBtn.innerText = btnText;
  newBtn.addEventListener('click', btnCallback);
  return newBtn;
};

const showCard = (card) => {

  const cardDiv = createContainer('cardDiv', 'white');
  cardDiv.classList.add('card-front');

  const cardElement = document.createElement('div', 'white');
  cardDiv.appendChild(cardElement);
  const colorClass = card.suitColour;

  // --- show card details in top left corner of card

  const suitNameTop = document.createElement('div');
  suitNameTop.classList.add('card-topleft');
  cardElement.appendChild(suitNameTop);

  const cardNameTop = document.createElement('div');
  cardNameTop.innerText = card.displayName;
  cardNameTop.classList.add('card-corner-rank', `${colorClass}`);
  suitNameTop.appendChild(cardNameTop);

  const cardSuitTop = document.createElement('div');
  cardSuitTop.classList.add('card-corner-suit', 'suitSize');
  cardSuitTop.innerText = card.suitSymbol;
  suitNameTop.appendChild(cardSuitTop);

  // === show card details in bottom right corner of card

  const suitNameBottom = document.createElement('div');
  suitNameBottom.classList.add('card-bottomright');
  cardElement.appendChild(suitNameBottom);

  const cardNameBottom = document.createElement('div');
  cardNameBottom.innerText = card.displayName;
  cardNameBottom.classList.add('card-corner-rank', `${colorClass}`);
  suitNameBottom.appendChild(cardNameBottom);

  const cardSuitBottom = document.createElement('div');
  cardSuitBottom.classList.add('card-corner-suit', 'suitSize');
  cardSuitBottom.innerText = card.suitSymbol;
  suitNameBottom.appendChild(cardSuitBottom);

  cardElement.classList.add('card');

  return cardDiv;

};

/*
 * ========================================================
 * ========================================================
 * ========================================================
 * ========================================================
 *
 *                  Click Events
 *
 * ========================================================
 * ========================================================
 * ========================================================
 */
const createGame = function () {
  // Make a request to create a new game
  axios.post('/games')
    .then((response) => {

      // set the global value to the new game.
      currentGame = response.data;
      console.log(response.data);
      
      // display it out to the user
      // runGame(currentGame);
      initGameBoardDom(currentGame);
      createGameBtn.remove();

      
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

const passingDiscardCard = () => {
  passBtn.style.visibility = "hidden";
  gameHelpText.innerText = `Opponent's turn`

  setTimeout(() => {
    axios.put(`/games/${currentGame.id}/pass`)
    .then((response) => {
      // set the global value to the new game.
      currentGame = response.data;
      console.log(response.data);
      
      // display it out to the user
      refreshGameBoard(currentGame);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
  
  gameHelpText.innerText = `Your turn`
  }, 3000);
  
  playingDeck.style.pointerEvents = 'auto';
  discardPile.style.pointerEvents = 'auto';

}

const drawingFromDeck = () => {

  // setTimeout(() => {
    axios.put(`/games/${currentGame.id}/drawDeck`)
    .then((response) => {
      // set the global value to the new game.
      currentGame = response.data;
      console.log(response.data);
      
      // display it out to the user
      refreshGameBoard(currentGame, true);
      if(currentGame.playerDeadwood[player2] < 10){
        knockBtn.style.visibility = "visible";
      } else if (currentGame.playerDeadwoodList[player2].length = 1){
        ginBtn.style.visibility = "visible";
      } else if (currentGame.playerDeadwoodList[player2].length = 0){
        bigGinBtn.style.visibility = "visible";
      }
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
  
  gameHelpText.innerText = `Discard a card from your hand`
  // }, 1000);

  playingDeck.style.pointerEvents = 'none';
  discardPile.style.pointerEvents = 'none';
}

const drawingFromDiscard = () => {

  passBtn.style.visibility = "hidden";

  // setTimeout(() => {
    axios.put(`/games/${currentGame.id}/drawDiscard`)
    .then((response) => {
      // set the global value to the new game.
      currentGame = response.data;
      console.log(response.data);
      
      // display it out to the user
      refreshGameBoard(currentGame, true);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
  
  gameHelpText.innerText = `Discard a card from your hand`
  // }, 1000);

  playingDeck.style.pointerEvents = 'none';
  discardPile.style.pointerEvents = 'none';
}

const clickToDiscard = (card, index) => {
  // setTimeout(() => {
    axios.put(`/games/${currentGame.id}/discardFromHand/${index}`)
    .then((response) => {
      // set the global value to the new game.
      currentGame = response.data;
      console.log(response.data);
      
      // display it out to the user
      refreshGameBoard(currentGame, false);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
  
  gameHelpText.innerText = `Opponent's turn`
  // }, 1000);

  setTimeout(() => {
    axios.put(`/games/${currentGame.id}/autoDrawDiscard`)
    .then((response) => {
      // set the global value to the new game.
      currentGame = response.data;
      console.log(response.data);
      
      // display it out to the user
      refreshGameBoard(currentGame, false);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
  
    gameHelpText.innerText = `Choose to draw from deck or discarded pile.`

  }, 3000);

  playingDeck.style.pointerEvents = 'auto';
  discardPile.style.pointerEvents = 'auto';
}

/*
 * ========================================================
 * ========================================================
 * ========================================================
 * ========================================================
 *
 *                  DOM Elements
 *
 * ========================================================
 * ========================================================
 * ========================================================
 */

const boardUpperSection = createContainer('boardUpperSection');
const boardMiddleSection = createContainer('boardMiddleSection');
const boardBottomSection = createContainer('boardBottomSection');
const boardGameHelpText = createContainer('boardGameHelpText');

// upper section of game board
const opponentHandContainer = createContainer('opponentHandContainer')
opponentHandContainer.classList.add('card-container', 'hand-position');
boardUpperSection.appendChild(opponentHandContainer);

for(let i = 0; i < 10; i += 1) {
  const cardBack = createContainer('cardBack');
  cardBack.classList.add('card-back')
  opponentHandContainer.appendChild(cardBack);
}

// middle section of game board
const gameFunctionsContainer = createContainer('gameFunctionsContainer');
gameFunctionsContainer.classList.add('card-container', 'playing-deck-container');
boardMiddleSection.appendChild(gameFunctionsContainer);

const leftButtonContainer = createContainer('leftButtonContainer');
leftButtonContainer.classList.add('playing-deck-btn-container');


const ginBtn = createButton('ginBtn', 'Gin');
ginBtn.classList.add('btn');
ginBtn.style.visibility = "hidden";

const bigGinBtn = createButton('bigGinBtn', 'Gin');
bigGinBtn.classList.add('btn');
bigGinBtn.style.visibility = "hidden";

const knockBtn = createButton('knockBtn', 'Gin');
knockBtn.classList.add('btn');
knockBtn.style.visibility = "hidden";

leftButtonContainer.appendChild(ginBtn);
leftButtonContainer.appendChild(bigGinBtn);
leftButtonContainer.appendChild(knockBtn);



const rightButtoncontainer = createContainer('rightButtoncontainer');
rightButtoncontainer.classList.add('playing-deck-btn-container')
const passBtn = createButton('passBtn', 'Pass', passingDiscardCard);
passBtn.classList.add('btn');
passBtn.style.visibility = "hidden";
rightButtoncontainer.appendChild(passBtn);

gameFunctionsContainer.appendChild(leftButtonContainer);

const playingDeck = createContainer('cardBack');
playingDeck.classList.add('card-deck');
playingDeck.addEventListener('click', drawingFromDeck);
playingDeck.style.pointerEvents = 'none';
gameFunctionsContainer.appendChild(playingDeck);

const discardPile = createContainer('discardPile');
discardPile.classList.add('discard-deck');
discardPile.style.marginRight = 0;
discardPile.addEventListener('click', drawingFromDiscard);
discardPile.style.pointerEvents = 'none';
gameFunctionsContainer.appendChild(discardPile);

gameFunctionsContainer.appendChild(rightButtoncontainer);

// game help text container
const gameHelpText = createContainer('gameHelpText');
gameHelpText.classList.add('gameHelpText');
boardGameHelpText.appendChild(gameHelpText);

// bottom section of game board
const playerHandContainer = createContainer('playerHandContainer');
playerHandContainer.classList.add('card-container');
boardBottomSection.appendChild(playerHandContainer);

const deadwoodCounter = createContainer('deadwoodCounter');
deadwoodCounter.classList.add('deadwoodContainer')
boardBottomSection.appendChild(deadwoodCounter);

/*
 * ========================================================
 * ========================================================
 * ========================================================
 * ========================================================
 *
 *                  Game Helper Functions
 *
 * ========================================================
 * ========================================================
 * ========================================================
 */

const gameContainer = document.getElementById('game-container')


const initGameBoardDom = (gameData) => {

  let playerHand = gameData.playerHand[1];

  for(let i = 0; i < playerHand.length; i += 1) {
    const cardFront = showCard(playerHand[i]);
    playerHandContainer.appendChild(cardFront);
  }

  gameHelpText.innerText = 'test';

  passBtn.style.visibility = "visible";

  deadwoodCounter.innerText = `Deadwood: ${gameData.playerDeadwood[1]}`;

  const discardCardForPicking = showCard(gameData.discardCardForPicking);
  discardCardForPicking.classList.remove('card-front');
  discardCardForPicking.classList.add('discard-card-front');
  discardPile.appendChild(discardCardForPicking);

  discardPile.style.pointerEvents = 'auto';

  gameContainer.appendChild(boardUpperSection);
  gameContainer.appendChild(boardMiddleSection);
  gameContainer.appendChild(boardGameHelpText);
  gameContainer.appendChild(boardBottomSection);
}

const refreshGameBoard = (gameData, canDiscardHand) => {

  playerHandContainer.innerHTML = "";
  discardPile.innerHTML = "";

  let playerHand = gameData.playerHand[1];

  for(let i = 0; i < playerHand.length; i += 1) {
    const cardFront = showCard(playerHand[i]);
    if (canDiscardHand === true) {
      cardFront.addEventListener('click', (event) => {
      // we will want to pass in the card element so
      // that we can change how it looks on screen, i.e.,
      // "turn the card over"
        clickToDiscard(event.currentTarget, i);
        console.log(event.currentTarget);
      });
    }
    playerHandContainer.appendChild(cardFront);
  }

  deadwoodCounter.innerText = `Deadwood: ${gameData.playerDeadwood[1]}`;

  const discardCardForPicking = showCard(gameData.discardCardForPicking);
  discardCardForPicking.classList.remove('card-front');
  discardCardForPicking.classList.add('discard-card-front');
  discardPile.appendChild(discardCardForPicking);
}

// disable and hide buttons by default

// create game
// show pass button
// enable pass button

// pass button
// hide pass button
// computer turn
// random action to pass or not (run draw deck or drawdiscard callback to controller)
// player turn
// enable draw deck
// enable draw discard

// click draw deck
// add card to player hand (controller)
// enable discard of cards from hand
// disable draw deck
// disable draw discard
// computer turn
// random action to draw from deck or discard
// discard highest from deadwood
// check deadwood value 
// enable/show gin if deadwood.length = 1
// enable/show big gin if deadwood.length = 0
// enable/show knock if deadwood sum <= 10

// click drawDiscard
// add card to player hand (controller)
// enable discard of cards from hand
// disable draw deck
// disable draw discard
// computer turn
// random action to draw from deck or discard
// discard highest from deadwood
// check deadwood value 
// enable/show gin if deadwood.length = 1
// enable/show big gin if deadwood.length = 0
// enable/show knock if deadwood sum <= 10

// click discardFromHand
// push to discard pile (controller)
// disable discardFromHand
// recalculate deadwood
// other player turn
// enable draw deck
// enable draw discard

// click gin / big gin
// discard if gin and recalculate deadwood value
// add to player score (contoller)
// check if playerScore above 100 => endGame, show winner, update winner record
// else
// initialise new round (controller)
// create round

// click knock
// calculate player score from deadwood
// check if playerScore above 100 => endGame, show winner, update winner record
// else
// initialise new round (controller)
// create round



 




/*
 * ========================================================
 * ========================================================
 * ========================================================
 * ========================================================
 *
 *                  Initial Screen
 *
 * ========================================================
 * ========================================================
 * ========================================================
 */

const createGameBtn = createButton('createGameBtn', 'createGameBtn', createGame)
document.body.appendChild(createGameBtn);