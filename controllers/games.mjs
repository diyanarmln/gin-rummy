/* eslint-disable func-names */
const player = 1;
const computer = 0;

/*
 * ========================================================
 * ========================================================
 * ========================================================
 * ========================================================
 *
 *                  Card Deck Functions
 *
 * ========================================================
 * ========================================================
 * ========================================================
 */

/**
 *
 * @param size
 * @returns random number given sample size
 */
const getRandomIndex = function (size) {
  return Math.floor(Math.random() * size);
};

/**
 *
 * @param cards
 * @returns shuffled deck
 */
const shuffleCards = function (cards) {
  let currentIndex = 0;

  // loop over the entire cards array
  while (currentIndex < cards.length) {
    // select a random position from the deck
    const randomIndex = getRandomIndex(cards.length);

    // get the current card in the loop
    const currentItem = cards[currentIndex];

    // get the random card
    const randomItem = cards[randomIndex];

    // swap the current card and the random card
    cards[currentIndex] = randomItem;
    cards[randomIndex] = currentItem;

    currentIndex += 1;
  }

  // give back the shuffled deck
  return cards;
};

/**
 *
 * @returns new deck
 */
const makeDeck = function () {
  // create the empty deck at the beginning
  const deck = [];

  const suits = ['clubs', 'diamonds', 'hearts', 'spades'];

  let cardOrder = 0;

  for (let suitIndex = 0; suitIndex < suits.length; suitIndex += 1) {
    // Store the current suit in a variable
    const currentSuit = suits[suitIndex];
    let symbol = '';
    let color = '';

    if (currentSuit === 'hearts') {
      symbol = '♥️';
      color = 'red';
    } else if (currentSuit === 'diamonds') {
      symbol = '♦️';
      color = 'red';
    } else if (currentSuit === 'clubs') {
      symbol = '♣️';
      color = 'black';
    } else if (currentSuit === 'spades') {
      symbol = '♠️';
      color = 'black';
    }

    for (let rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      let cardName = `${rankCounter}`;
      let shortForm = `${rankCounter}`;
      let deadwood = rankCounter;
      cardOrder += 1;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName === '1') {
        cardName = 'ace';
        shortForm = 'A';
      } else if (cardName === '11') {
        cardName = 'jack';
        shortForm = 'J';
        deadwood = 10;
      } else if (cardName === '12') {
        cardName = 'queen';
        shortForm = 'Q';
        deadwood = 10;
      } else if (cardName === '13') {
        cardName = 'king';
        shortForm = 'K';
        deadwood = 10;
      }

      // Create a new card with the current name, suit, and rank
      const card = {
        name: cardName,
        suit: currentSuit,
        rank: cardOrder,
        displayName: shortForm,
        suitSymbol: symbol,
        suitColour: color,
        deadwoodValue: deadwood,
        discard: false,
      };

      deck.push(card);
    }
  }
  return deck;
};

/**
 * function to sort hand by rank
 * @param hand
 */
const sortHandBy = function (hand, method) {
  hand.sort((a, b) => a[method] - b[method]);
};

/**
 *
 * @param deck
 * function to deal cards to player hand
 */
const dealPlayerCards = function (deck) {
  let playersHand = [];
  const player1Hand = [];
  const player2Hand = [];

  for (let handIndex = 0; handIndex < 10; handIndex += 1) {
    player1Hand.push(deck.pop());
    for (let playerHandIndex = 0; playerHandIndex < 1; playerHandIndex += 1) {
      player2Hand.push(deck.pop());
    }
  }
  sortHandBy(player1Hand, 'rank');
  sortHandBy(player2Hand, 'rank');
  playersHand = [player1Hand, player2Hand];
  return playersHand;
};

/**
 * function to identify deadwood cards in hand
 * @param playerHand
 * @returns
 */
const getDeadwoodinHand = function (playersHand) {
  // playersHand [[{}, {},], [{}, {},]]
  const deadwoodHands = [];

  for (let i = 0; i < playersHand.length; i += 1) {
    const hand = playersHand[i]; // [{},{}]
    const deadwoodHand = hand.map((a) => ({ ...a }));
    // const deadwoodLength = deadwoodHand.length;
    // remove straights from deadwood
    for (let j = 1; j < deadwoodHand.length - 1; j += 1) {
      // eslint-disable-next-line max-len
      if ((deadwoodHand[j].rank === deadwoodHand[j - 1].rank + 1) && (deadwoodHand[j].rank === deadwoodHand[j + 1].rank - 1)) {
        deadwoodHand.splice(j + 1, 1);
        deadwoodHand.splice(j, 1);
        deadwoodHand.splice(j - 1, 1);
        j = 0;
      }
    }
    console.log(`deadwoodhand ${i} after straights`, deadwoodHand);

    if (deadwoodHand.length > 0) {
      // remove 3 of same card from deadwood (tally)
      const cardNameTally = {};
      const xOfAKind = [];

      for (let k = 0; k < deadwoodHand.length; k += 1) {
        const cardName = deadwoodHand[k].name;
        if (cardName in cardNameTally) {
          cardNameTally[cardName] += 1;
          if (cardNameTally[cardName] === 3) {
            xOfAKind.push(cardName);
          }
        }
        else {
          cardNameTally[cardName] = 1;
        }
      }

      console.log(`deadwoodhand ${i}`, deadwoodHand);

      for (let l = 0; l < xOfAKind.length; l += 1) {
        // const updatedDeadwoodLength = deadwoodHand.length;
        for (let m = 0; m < deadwoodHand.length; m += 1) {
          // console.log(`deadwoodhand ${m}`, deadwoodHand);
          if (deadwoodHand[m].name === xOfAKind[l]) {
            deadwoodHand.splice(m, 1);
            m = 0;
          }
        }
      }
    }

    sortHandBy(deadwoodHand, 'deadwoodValue');
    deadwoodHands.push(deadwoodHand);
  }
  return deadwoodHands;
};

/**
 *
 * @param deadwoodCards
 * @returns sum of deadwood cards value
 */
const sumDeadwoodCards = function (deadwoodCards) {
  const sum = deadwoodCards.reduce(
    (previousValue, currentValue) => previousValue + currentValue.deadwoodValue,
    0,
  );
  return sum;
};

/**
 *
 * @param playersHand
 * @returns an array of deadwood sum value for each player
 */
const getDeadwoodSum = function (deadwoodHand) {
  const playersDeadwood = [];
  for (let i = 0; i < deadwoodHand.length; i += 1) {
    playersDeadwood.push(sumDeadwoodCards(deadwoodHand[i]));
  }
  return playersDeadwood;
};

// const testPlayerHand = [
//   {
//     deadwoodValue: 8,
//     discard: false,
//     displayName: 'Q',
//     name: 'queen',
//     rank: 8,
//     suit: 'hearts',
//     suitColour: 'red',
//     suitSymbol: '♥️',
//   },
//   {
//     deadwoodValue: 1,
//     discard: false,
//     displayName: 'A',
//     name: 'ace',
//     rank: 14,
//     suit: 'diamonds',
//     suitColour: 'red',
//     suitSymbol: '♦️',
//   },
//   {
//     deadwoodValue: 2,
//     discard: false,
//     displayName: '2',
//     name: '2',
//     rank: 15,
//     suit: 'diamonds',
//     suitColour: 'red',
//     suitSymbol: '♦️',
//   },
//   {
//     deadwoodValue: 3,
//     discard: false,
//     displayName: '3',
//     name: '3',
//     rank: 16,
//     suit: 'diamonds',
//     suitColour: 'red',
//     suitSymbol: '♦️',
//   },
//   {
//     deadwoodValue: 10,
//     discard: false,
//     displayName: 'Q',
//     name: 'queen',
//     rank: 25,
//     suit: 'diamonds',
//     suitColour: 'red',
//     suitSymbol: '♦️',
//   },
//   {
//     deadwoodValue: 1,
//     discard: false,
//     displayName: 'A',
//     name: 'ace',
//     rank: 27,
//     suit: 'clubs',
//     suitColour: 'black',
//     suitSymbol: '♣️',
//   },
//   {
//     deadwoodValue: 3,
//     discard: false,
//     displayName: '3',
//     name: '3',
//     rank: 29,
//     suit: 'clubs',
//     suitColour: 'black',
//     suitSymbol: '♣️',
//   },
//   {
//     deadwoodValue: 6,
//     discard: false,
//     displayName: '6',
//     name: '6',
//     rank: 32,
//     suit: 'clubs',
//     suitColour: 'black',
//     suitSymbol: '♣️',
//   },
//   {
//     deadwoodValue: 10,
//     discard: false,
//     displayName: 'Q',
//     name: 'queen',
//     rank: 38,
//     suit: 'clubs',
//     suitColour: 'black',
//     suitSymbol: '♣️',
//   },
//   {
//     deadwoodValue: 10,
//     discard: false,
//     displayName: 'K',
//     name: 'king',
//     rank: 39,
//     suit: 'clubs',
//     suitColour: 'black',
//     suitSymbol: '♣️',
//   },
// ];

const findCardIndex = function (arrayOfCards, value) {
  const cardIndex = arrayOfCards.map((e) => e.rank).indexOf(value);
  return cardIndex;
};

const autoDiscardFromDeadwood = async function (game, playersHandIndex) {
  const { playersHand } = game.gameState.round;
  const playerHand = game.gameState.round.playersHand[playersHandIndex];
  sortHandBy(playerHand, 'rank');
  const { discardPile } = game.gameState.round;

  const playersDeadwoodList = getDeadwoodinHand(playersHand);
  const deadwoodHand = playersDeadwoodList[computer];
  const isHighestDeadwood = deadwoodHand[deadwoodHand.length - 1];
  const cardIndexToDiscardFromHand = findCardIndex(playerHand, isHighestDeadwood.rank);
  const discardedCard = playerHand.splice(cardIndexToDiscardFromHand, 1)[0];
  discardPile.push(discardedCard);
  const playersDeadwoodValue = getDeadwoodSum(playersHand);
  const discardPileToShow = discardPile[discardPile.length - 1];

  await game.update({
    gameState: {
      status: game.gameState.status,
      score: game.gameState.score,
      round: {
        cardDeck: game.gameState.round.cardDeck,
        discardPile,
        playersHand,
        playersDeadwoodValue,
        playersDeadwoodList,
        discardPileToShow,
      },
    },
  });
};

const autoPass = async function (game, response, playerHandIndex) {
  const randomIndexForPassing = getRandomIndex(2);

  if (randomIndexForPassing === 0) {
    response.send({
      id: game.id,
      playerHand: game.gameState.round.playersHand,
      score: game.gameState.score,
      playerDeadwood: game.gameState.round.playersDeadwoodValue,
      playersDeadwoodList: game.gameState.round.playersDeadwoodList,
      discardCardForPicking: game.gameState.round.discardPileToShow,
    });
  }

  else {
    const { playersHand } = game.gameState.round;
    const playerHand = game.gameState.round.playersHand[playerHandIndex];
    const { discardPile } = game.gameState.round;
    playerHand.push(discardPile.pop());

    autoDiscardFromDeadwood(game, computer);
    const playersDeadwoodList = getDeadwoodinHand(playersHand);
    const playersDeadwoodValue = getDeadwoodSum(playersDeadwoodList);
    const discardPileToShow = discardPile[discardPile.length - 1];

    await game.update({
      gameState: {
        status: game.gameState.status,
        score: game.gameState.score,
        round: {
          cardDeck: game.gameState.round.cardDeck,
          discardPile,
          playersHand,
          playersDeadwoodValue,
          playersDeadwoodList,
          discardPileToShow,
        },
      },
    });

    response.send({
      id: game.id,
      playerHand: game.gameState.round.playersHand,
      score: game.gameState.score,
      playerDeadwood: game.gameState.round.playersDeadwoodValue,
      playersDeadwoodList: game.gameState.round.playersDeadwoodList,
      discardCardForPicking: game.gameState.round.discardPileToShow,
    });
  }
};

const drawingFromDeck = async function (game, playersHandIndex) {
  const { playersHand } = game.gameState.round;
  const playerHand = playersHand[playersHandIndex];
  sortHandBy(playerHand, 'rank');
  const { cardDeck } = game.gameState.round;
  playerHand.push(cardDeck.pop());
  const playersDeadwoodList = getDeadwoodinHand(playersHand);
  const playersDeadwoodValue = getDeadwoodSum(playersDeadwoodList);

  await game.update({
    gameState: {
      status: game.gameState.status,
      score: game.gameState.score,
      round: {
        cardDeck,
        discardPile: game.gameState.round.discardPile,
        playersHand,
        playersDeadwoodValue,
        playersDeadwoodList,
        discardPileToShow: game.gameState.round.discardPileToShow,
      },
    },
  });
};

const drawingFromDiscard = async function (game, playersHandIndex) {
  const { playersHand } = game.gameState.round;
  const playerHand = game.gameState.round.playersHand[playersHandIndex];
  const { discardPile } = game.gameState.round;
  playerHand.push(discardPile.pop());
  const discardPileToShow = discardPile[discardPile.length - 1];
  const playersDeadwoodList = getDeadwoodinHand(playersHand);
  const playersDeadwoodValue = getDeadwoodSum(playersDeadwoodList);

  await game.update({
    gameState: {
      status: game.gameState.status,
      score: game.gameState.score,
      round: {
        cardDeck: game.gameState.round.cardDeck,
        discardPile,
        playersHand,
        playersDeadwoodValue,
        playersDeadwoodList,
        discardPileToShow,
      },
    },
  });
};

const automatingDrawDiscard = async function (game) {
  const randomIndexForDrawType = getRandomIndex(2);

  if (randomIndexForDrawType === 0) {
    await drawingFromDeck(game, computer);
    console.log('auto draw deck');
  }
  else {
    await drawingFromDiscard(game, computer);
    console.log('auto draw discard');
  }
};

const discardingFromHand = async function (game, cardIndex, response, playersHandIndex) {
  const { playersHand } = game.gameState.round;
  const playerHand = playersHand[playersHandIndex];
  const { discardPile } = game.gameState.round;

  const discardedCard = playerHand.splice(cardIndex, 1);
  console.log('discarded from hand', discardedCard);
  sortHandBy(playerHand, 'rank');
  discardPile.push(discardedCard[0]);

  const discardPileToShow = discardPile[discardPile.length - 1];
  const playersDeadwoodList = getDeadwoodinHand(playersHand);
  const playersDeadwoodValue = getDeadwoodSum(playersDeadwoodList);

  await game.update({
    gameState: {
      status: game.gameState.status,
      score: game.gameState.score,
      round: {
        cardDeck: game.gameState.round.cardDeck,
        discardPile,
        playersHand,
        playersDeadwoodValue,
        playersDeadwoodList,
        discardPileToShow,
      },
    },
  });

  response.send({
    id: game.id,
    playerHand: game.gameState.round.playersHand,
    score: game.gameState.score,
    playerDeadwood: game.gameState.round.playersDeadwoodValue,
    playersDeadwoodList: game.gameState.round.playersDeadwoodList,
    discardCardForPicking: game.gameState.round.discardPileToShow,
  });
};

/*
 * ========================================================
 * ========================================================
 * ========================================================
 * ========================================================
 *
 *                  Controller Functions
 *
 * ========================================================
 * ========================================================
 * ========================================================
 */

export default function initGamesController(db) {
//   let result;

  // render the main page
  // const index = (request, response) => {
  //   response.sendFile(resolve('dist', 'main.html'));
  // };

  // create a new game. Insert a new row in the DB.
  const createGame = async (request, response) => {
    const player1Score = 0;
    const player2Score = 0;
    const discardPile = [];

    // deal out a new shuffled deck for this game.
    const cardDeck = shuffleCards(makeDeck());
    const playersHand = dealPlayerCards(cardDeck);
    discardPile.push(cardDeck.pop());
    const playersDeadwoodList = getDeadwoodinHand(playersHand);
    const playersDeadwoodValue = getDeadwoodSum(playersDeadwoodList);
    const discardPileToShow = discardPile[discardPile.length - 1];

    const newGame = {
      gameState: {
        status: 'started',
        score: {
          player1: player1Score,
          player2: player2Score,
        },
        round: {
          cardDeck,
          discardPile,
          playersHand,
          playersDeadwoodValue,
          playersDeadwoodList,
          discardPileToShow,
        },
      },
    };

    try {
      // run the DB INSERT query
      const game = await db.Game.create(newGame);

      // also need to add user in join table

      // send the new game back to the user.
      // dont include the deck so the user can't cheat
      response.send({
        id: game.id,
        playerHand: game.gameState.round.playersHand,
        score: game.gameState.score,
        playerDeadwood: game.gameState.round.playersDeadwoodValue,
        playersDeadwoodList: game.gameState.round.playersDeadwoodList,
        discardCardForPicking: game.gameState.round.discardPileToShow,
      });
    } catch (error) {
      response.status(500).send(error);
    }
  };

  const pass = async (request, response) => {
    try {
      // get the game by the ID passed in the request
      const game = await db.Game.findByPk(request.params.id);
      autoPass(game, response, computer);
    } catch (error) {
      response.status(500).send(error);
      console.log(error);
    }
  };

  const drawDeck = async (request, response) => {
    try {
      // get the game by the ID passed in the request
      const game = await db.Game.findByPk(request.params.id);
      drawingFromDeck(game, player);
      response.send({
        id: game.id,
        playerHand: game.gameState.round.playersHand,
        score: game.gameState.score,
        playerDeadwood: game.gameState.round.playersDeadwoodValue,
        playersDeadwoodList: game.gameState.round.playersDeadwoodList,
        discardCardForPicking: game.gameState.round.discardPileToShow,
      });
    } catch (error) {
      response.status(500).send(error);
      console.log(error);
    }
  };

  const drawDiscard = async (request, response) => {
    try {
      // get the game by the ID passed in the request
      const game = await db.Game.findByPk(request.params.id);
      drawingFromDiscard(game, player);
      response.send({
        id: game.id,
        playerHand: game.gameState.round.playersHand,
        score: game.gameState.score,
        playerDeadwood: game.gameState.round.playersDeadwoodValue,
        playersDeadwoodList: game.gameState.round.playersDeadwoodList,
        discardCardForPicking: game.gameState.round.discardPileToShow,
      });
    } catch (error) {
      response.status(500).send(error);
      console.log(error);
    }
  };

  const discardFromHand = async (request, response) => {
    try {
      // get the game by the ID passed in the request
      const game = await db.Game.findByPk(request.params.id);
      const cardIndex = request.params.cardId;
      discardingFromHand(game, cardIndex, response, player);
    } catch (error) {
      response.status(500).send(error);
      console.log(error);
    }
  };

  const autoDrawDiscard = async (request, response) => {
    try {
      // get the game by the ID passed in the request
      let game = await db.Game.findByPk(request.params.id);
      await automatingDrawDiscard(game);
      game = await db.Game.findByPk(request.params.id);
      await autoDiscardFromDeadwood(game, computer);
      game = await db.Game.findByPk(request.params.id);

      response.send({
        id: game.id,
        playerHand: game.gameState.round.playersHand,
        score: game.gameState.score,
        playerDeadwood: game.gameState.round.playersDeadwoodValue,
        playersDeadwoodList: game.gameState.round.playersDeadwoodList,
        discardCardForPicking: game.gameState.round.discardPileToShow,
      });
    } catch (error) {
      response.status(500).send(error);
      console.log(error);
    }
  };

  // return all functions we define in an object
  // refer to the routes file above to see this used
  return {
    createGame,
    pass,
    drawDeck,
    drawDiscard,
    discardFromHand,
    autoDrawDiscard,
  };
}
