import axios from 'axios';

// const player1 = 0;
const player2 = 1;

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
  // newInput.value = inputValue;
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

// login button functionality
// CONSIDER USING TRY CATCH FOR 1 ERROR HANDLING ONL
// eslint-disable-next-line func-names
const userLogIn = function () {
  axios
    .post('/login', {
      email: document.querySelector('#Email').value,
      password: document.querySelector('#Password').value,
    })
    .then((response) => {
      console.log(response.data);
      // eslint-disable-next-line no-use-before-define
      loginDiv.remove();
      const dashboardDiv = document.createElement('div');
      // eslint-disable-next-line no-use-before-define
      gameContainer.appendChild(dashboardDiv);
      // eslint-disable-next-line no-use-before-define
      dashboardDiv.appendChild(userDiv);

      // create game btn

      axios
        .get('/user')
        .then((response1) => {
          console.log(response1.data);
          // eslint-disable-next-line no-use-before-define
          userDiv.innerText = `Logged in as: ${response1.data.user.email}`;
          // manipulate DOM, set up create game button
          // eslint-disable-next-line no-use-before-define
          gameContainer.appendChild(createGameBtn);
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
};

// eslint-disable-next-line func-names
const createGame = function () {
  // Make a request to create a new game
  axios.post('/games')
    .then((response) => {
      // set the global value to the new game.
      currentGame = response.data;
      console.log(response.data);

      // display it out to the user
      // runGame(currentGame);
      // eslint-disable-next-line no-use-before-define
      initGameBoardDom(currentGame);
      // eslint-disable-next-line no-use-before-define
      createGameBtn.remove();
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
  console.log('game created');
};

const passingDiscardCard = () => {
  console.log('user selected pass');

  // eslint-disable-next-line no-use-before-define
  passBtn.style.visibility = 'hidden';
  // eslint-disable-next-line no-use-before-define
  gameHelpText.innerText = 'Opponent\'s turn';

  console.log('computer turn if pass');

  setTimeout(() => {
    axios.put(`/games/${currentGame.id}/pass`)
      .then((response) => {
      // set the global value to the new game.
        currentGame = response.data;
        console.log(response.data);
        // display it out to the user
        // eslint-disable-next-line no-use-before-define
        refreshGameBoard(currentGame);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });

    console.log('computer decided');
    // eslint-disable-next-line no-use-before-define
    gameHelpText.innerText = 'Your turn';
  }, 3000);

  // eslint-disable-next-line no-use-before-define
  playingDeck.style.pointerEvents = 'auto';
  // eslint-disable-next-line no-use-before-define
  discardPile.style.pointerEvents = 'auto';
};

const drawingFromDeck = () => {
  // setTimeout(() => {
  axios.put(`/games/${currentGame.id}/drawDeck`)
    .then((response) => {
      // set the global value to the new game.
      currentGame = response.data;
      console.log(response.data);

      // display it out to the user
      // eslint-disable-next-line no-use-before-define
      refreshGameBoard(currentGame, true);
      if (currentGame.playerDeadwood[player2] < 10) {
        // eslint-disable-next-line no-use-before-define
        knockBtn.style.visibility = 'visible';
      } else if (currentGame.playersDeadwoodList[player2].length === 1) {
        // eslint-disable-next-line no-use-before-define
        ginBtn.style.visibility = 'visible';
      } else if (currentGame.playersDeadwoodList[player2].length === 0) {
        // eslint-disable-next-line no-use-before-define
        bigGinBtn.style.visibility = 'visible';
      }
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });

  // eslint-disable-next-line no-use-before-define
  gameHelpText.innerText = 'Discard a card from your hand';
  // }, 1000);

  // eslint-disable-next-line no-use-before-define
  playingDeck.style.pointerEvents = 'none';
  // eslint-disable-next-line no-use-before-define
  discardPile.style.pointerEvents = 'none';
};

const drawingFromDiscard = () => {
  // eslint-disable-next-line no-use-before-define
  passBtn.style.visibility = 'hidden';

  // setTimeout(() => {
  axios.put(`/games/${currentGame.id}/drawDiscard`)
    .then((response) => {
      // set the global value to the new game.
      currentGame = response.data;
      console.log(response.data);

      // display it out to the user
      // eslint-disable-next-line no-use-before-define
      refreshGameBoard(currentGame, true);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });

  // eslint-disable-next-line no-use-before-define
  gameHelpText.innerText = 'Discard a card from your hand';
  // }, 1000);

  // eslint-disable-next-line no-use-before-define
  playingDeck.style.pointerEvents = 'none';
  // eslint-disable-next-line no-use-before-define
  discardPile.style.pointerEvents = 'none';
};

const clickToDiscard = (card, index) => {
  // setTimeout(() => {
  axios.put(`/games/${currentGame.id}/discardFromHand/${index}`)
    .then((response) => {
      // set the global value to the new game.
      currentGame = response.data;
      console.log(response.data);

      // display it out to the user
      // eslint-disable-next-line no-use-before-define
      refreshGameBoard(currentGame, false);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });

  // eslint-disable-next-line no-use-before-define
  gameHelpText.innerText = 'Opponent\'s turn';
  // }, 1000);

  setTimeout(() => {
    axios.put(`/games/${currentGame.id}/autoDrawDiscard`)
      .then((response) => {
      // set the global value to the new game.
        currentGame = response.data;
        console.log(response.data);

        // display it out to the user
        // eslint-disable-next-line no-use-before-define
        refreshGameBoard(currentGame, false);
      })
      .catch((error) => {
      // handle error
        console.log(error);
      });

    // eslint-disable-next-line no-use-before-define
    gameHelpText.innerText = 'Choose to draw from deck or discarded pile.';
  }, 3000);

  // eslint-disable-next-line no-use-before-define
  playingDeck.style.pointerEvents = 'auto';
  // eslint-disable-next-line no-use-before-define
  discardPile.style.pointerEvents = 'auto';
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

// login
const loginDiv = createContainer('loginDiv');
document.body.appendChild(loginDiv);

const emailDiv = createContainer('emailDiv');
loginDiv.appendChild(emailDiv);

const emailLabel = createLabel('email', 'Email');
emailDiv.appendChild(emailLabel);

const emailInput = createInput('email', 'Email', true);
emailDiv.appendChild(emailInput);

const passwordDiv = createContainer('passwordDiv');
loginDiv.appendChild(passwordDiv);

const passwordLabel = createLabel('password', 'Password');
passwordDiv.appendChild(passwordLabel);

const passwordInput = createInput('password', 'Password', true);
passwordDiv.appendChild(passwordInput);

const loginBtn = createButton('loginBtn', 'loginBtn', userLogIn);
// loginBtn.setAttribute('type', 'submit');
loginDiv.appendChild(loginBtn);

const userDiv = createContainer('userDiv');

// game

const createGameBtn = createButton('createGameBtn', 'createGameBtn', createGame);

const boardUpperSection = createContainer('boardUpperSection');
const boardMiddleSection = createContainer('boardMiddleSection');
const boardBottomSection = createContainer('boardBottomSection');
const boardGameHelpText = createContainer('boardGameHelpText');

// upper section of game board
const opponentHandContainer = createContainer('opponentHandContainer');
opponentHandContainer.classList.add('card-container', 'hand-position');
boardUpperSection.appendChild(opponentHandContainer);

for (let i = 0; i < 10; i += 1) {
  const cardBack = createContainer('cardBack');
  cardBack.classList.add('card-back');
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
ginBtn.style.visibility = 'hidden';

const bigGinBtn = createButton('bigGinBtn', 'Gin');
bigGinBtn.classList.add('btn');
bigGinBtn.style.visibility = 'hidden';

const knockBtn = createButton('knockBtn', 'Gin');
knockBtn.classList.add('btn');
knockBtn.style.visibility = 'hidden';

leftButtonContainer.appendChild(ginBtn);
leftButtonContainer.appendChild(bigGinBtn);
leftButtonContainer.appendChild(knockBtn);

const rightButtoncontainer = createContainer('rightButtoncontainer');
rightButtoncontainer.classList.add('playing-deck-btn-container');
const passBtn = createButton('passBtn', 'Pass', passingDiscardCard);
passBtn.classList.add('btn');
passBtn.style.visibility = 'hidden';
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
deadwoodCounter.classList.add('deadwoodContainer');
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

const gameContainer = document.getElementById('game-container');

const initGameBoardDom = (gameData) => {
  const playerHand = gameData.playerHand[1];

  for (let i = 0; i < playerHand.length; i += 1) {
    const cardFront = showCard(playerHand[i]);
    playerHandContainer.appendChild(cardFront);
  }

  gameHelpText.innerText = 'test';

  passBtn.style.visibility = 'visible';

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
};

const refreshGameBoard = (gameData, canDiscardHand) => {
  playerHandContainer.innerHTML = '';
  discardPile.innerHTML = '';

  const playerHand = gameData.playerHand[1];

  for (let i = 0; i < playerHand.length; i += 1) {
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
