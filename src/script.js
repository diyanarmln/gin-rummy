const player1 = 0;
const player2 = 1;
const playerTurn = 1;

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

const leftButtonContainer = createContainer('leftButtonContainer', 'beige');
leftButtonContainer.classList.add('playing-deck-btn-container');
const ginBtn = createButton('ginBtn', 'Gin');
ginBtn.classList.add('btn');
leftButtonContainer.appendChild(ginBtn);

const rightButtoncontainer = createContainer('rightButtoncontainer', 'beige');
rightButtoncontainer.classList.add('playing-deck-btn-container')
const passBtn = createButton('passBtn', 'Pass');
passBtn.classList.add('btn');
passBtn.style.visibility = "hidden";
passBtn.addEventListener('click', passingDiscardCard)
rightButtoncontainer.appendChild(passBtn);

gameFunctionsContainer.appendChild(leftButtonContainer);

const playingDeck = createContainer('cardBack');
playingDeck.classList.add('card-deck');
gameFunctionsContainer.appendChild(playingDeck);

const discardPile = createContainer('discardPile');
discardPile.classList.add('discard-deck');
discardPile.style.marginRight = 0;
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
 *                  Click Events
 *
 * ========================================================
 * ========================================================
 * ========================================================
 */
const passingDiscardCard = () => {
  if (playerTurn === 0) {
    playerTurn += 1;
  }
  else {
    playerTurn = 0
  }

  passBtn.style.visibility = "hidden";
}

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

  gameContainer.appendChild(boardUpperSection);
  gameContainer.appendChild(boardMiddleSection);
  gameContainer.appendChild(boardGameHelpText);
  gameContainer.appendChild(boardBottomSection);
}

const createGame = function () {
  // Make a request to create a new game
  axios.post('/games')
    .then((response) => {
      // set the global value to the new game.
      currentGame = response.data;
      console.log(response);
      
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