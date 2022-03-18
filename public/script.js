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

    const cardElement = document.createElement('div');
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

};



const gameContainer = document.getElementById('game-container')


const initGameBoardDom = () => {

  const boardUpperSection = createContainer('boardUpperSection', 'blue');
  const boardMiddleSection = createContainer('boardMiddleSection', 'green');
  const boardBottomSection = createContainer('boardBottomSection', 'pink');

  // upper section of game board
  const opponentHandContainer = createContainer('opponentHandContainer', 'yellow');
  opponentHandContainer.classList.add('card-container');
  boardUpperSection.appendChild(opponentHandContainer);

  for(let i = 0; i < 10; i += 1) {
    const cardBack = createContainer('cardBack');
    cardBack.classList.add('card-back')
    opponentHandContainer.appendChild(cardBack);
  }

  gameContainer.appendChild(boardUpperSection);
  gameContainer.appendChild(boardMiddleSection);
  gameContainer.appendChild(boardBottomSection);
}

initGameBoardDom();