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
 *                  Game Helper Functions
 *
 * ========================================================
 * ========================================================
 * ========================================================
 */

const gameContainer = document.getElementById('game-container')


const initGameBoardDom = (gameData) => {

  const boardUpperSection = createContainer('boardUpperSection', 'blue');
  const boardMiddleSection = createContainer('boardMiddleSection', 'green');
  const boardBottomSection = createContainer('boardBottomSection', 'pink');

  // upper section of game board
  const opponentHandContainer = createContainer('opponentHandContainer', 'yellow');
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
  leftButtonContainer.appendChild(ginBtn);

  const rightButtoncontainer = createContainer('rightButtoncontainer', 'beige');
  rightButtoncontainer.classList.add('playing-deck-btn-container')
  const passBtn = createButton('passBtn', 'Pass');
  rightButtoncontainer.appendChild(passBtn);

  gameFunctionsContainer.appendChild(leftButtonContainer);

  const playingDeck = createContainer('cardBack');
  playingDeck.classList.add('card-deck');
  gameFunctionsContainer.appendChild(playingDeck);

  const discardPile = createContainer('discardPile');
  discardPile.classList.add('discard-deck');
  discardPile.style.marginRight = 0;
  const discardCardForPicking = showCard(gameData.discardCardForPicking);
  discardCardForPicking.classList.remove('card-front');
  discardCardForPicking.classList.add('discard-card-front');
  gameFunctionsContainer.appendChild(discardPile);
  discardPile.appendChild(discardCardForPicking);

  gameFunctionsContainer.appendChild(rightButtoncontainer);

  // bottom section of game board
  const playerHandContainer = createContainer('playerHandContainer', 'yellow');
  playerHandContainer.classList.add('card-container');
  boardBottomSection.appendChild(playerHandContainer);
  
  let playerHand = gameData.playerHand[1];

  for(let i = 0; i < playerHand.length; i += 1) {
    const cardFront = showCard(playerHand[i]);
    playerHandContainer.appendChild(cardFront);
  }

  const deadwoodCounter = createContainer('deadwoodCounter');
  deadwoodCounter.innerText = `Deadwood: ${gameData.playerDeadwood[1]}`
  deadwoodCounter.classList.add('deadwoodContainer')
  boardBottomSection.appendChild(deadwoodCounter);

  gameContainer.appendChild(boardUpperSection);
  gameContainer.appendChild(boardMiddleSection);
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