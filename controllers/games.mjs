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
        };
    }
  return deck;
};

/**
 * function to sort hand by rank
 * @param hand 
 */
const sortHandBy = function (hand, method) {
  hand.sort((a, b) => a[method] - b[method])
}

/**
 * 
 * @param deck 
 * function to deal cards to player hand
 */
const dealPlayerCards = function (deck) {
  let playersHand = [];
  let player1Hand = [];
  let player2Hand = [];

  for (let handIndex = 0; handIndex < 10; handIndex += 1){
    player1Hand.push(deck.pop());
    for (let playerHandIndex = 0; playerHandIndex < 1; playerHandIndex += 1){
      player2Hand.push(deck.pop());
    }
  }
  sortHandBy(player1Hand, 'rank');
  sortHandBy(player2Hand, 'rank');
  playersHand = [player1Hand, player2Hand];
  return playersHand;
}

/**
 * function to identify deadwood cards in hand
 * @param playerHand 
 * @returns 
 */
const getDeadwoodinHand = function (playerHand) {

  let deadwoodHand = playerHand.map(a => {return {...a}})
  // remove straights from deadwood
  for (let i = 1; i < deadwoodHand.length - 1; i+=1){
    if((deadwoodHand[i].rank === deadwoodHand[i-1].rank + 1) && (deadwoodHand[i].rank === deadwoodHand[i+1].rank - 1)){
      deadwoodHand.splice(i+1, 1);
      deadwoodHand.splice(i, 1);
      deadwoodHand.splice(i-1, 1);
    }
  }

  // remove 3 of same card from deadwood (tally)
  let cardNameTally = {};
  let xOfAKind = [];

  for (let i = 0; i < deadwoodHand.length; i+=1){
    const cardName = deadwoodHand[i].name;
    if (cardName in cardNameTally){
      cardNameTally[cardName] += 1;
      if(cardNameTally[cardName] === 3){
        xOfAKind.push(cardName);
      }
    }
    else {
      cardNameTally[cardName] = 1;
    }
  }

  for(let i = 0; i < xOfAKind.length; i += 1){
    for(let j = 0; j < deadwoodHand.length; j+= 1){
      if(deadwoodHand[j].name === xOfAKind[i]){
        deadwoodHand.splice(j, 1);
      }
    }
  }

  sortHandBy(deadwoodHand, 'deadwoodValue');
  return deadwoodHand;
}

/**
 * 
 * @param deadwoodCards 
 * @returns sum of deadwood cards value
 */
const sumDeadwoodCards = function (deadwoodCards) {
  const sum = deadwoodCards.reduce(
    (previousValue, currentValue) => previousValue + currentValue.deadwoodValue
    , 0
  )
  return sum;
}

/**
 * 
 * @param playersHand 
 * @returns an array of deadwood sum value for each player
 */
const getDeadwoodSum = function (playersHand) {
  let playersDeadwood = [];
  for (let i = 0; i < playersHand.length; i += 1){
    playersDeadwood.push(sumDeadwoodCards(getDeadwoodinHand(playersHand[i])));
  }
  return playersDeadwood;
}

let testPlayerHand = [
  {
    deadwoodValue: 8,
    discard: false,
    displayName: "Q",
    name: "queen",
    rank: 8,
    suit: "hearts",
    suitColour: "red",
    suitSymbol: "♥️",
  },
  {
    deadwoodValue: 1,
    discard: false,
    displayName: "A",
    name: "ace",
    rank: 14,
    suit: "diamonds",
    suitColour: "red",
    suitSymbol: "♦️",
  },
  {
    deadwoodValue: 2,
    discard: false,
    displayName: "2",
    name: "2",
    rank: 15,
    suit: "diamonds",
    suitColour: "red",
    suitSymbol: "♦️",
  },
  {
    deadwoodValue: 3,
    discard: false,
    displayName: "3",
    name: "3",
    rank: 16,
    suit: "diamonds",
    suitColour: "red",
    suitSymbol: "♦️",
  },
  {
    deadwoodValue: 10,
    discard: false,
    displayName: "Q",
    name: "queen",
    rank: 25,
    suit: "diamonds",
    suitColour: "red",
    suitSymbol: "♦️",
  },
  {
    deadwoodValue: 1,
    discard: false,
    displayName: "A",
    name: "ace",
    rank: 27,
    suit: "clubs",
    suitColour: "black",
    suitSymbol: "♣️",
  },
  {
    deadwoodValue: 3,
    discard: false,
    displayName: "3",
    name: "3",
    rank: 29,
    suit: "clubs",
    suitColour: "black",
    suitSymbol: "♣️",
  },
  {
    deadwoodValue: 6,
    discard: false,
    displayName: "6",
    name: "6",
    rank: 32,
    suit: "clubs",
    suitColour: "black",
    suitSymbol: "♣️",
  },
  {
    deadwoodValue: 10,
    discard: false,
    displayName: "Q",
    name: "queen",
    rank: 38,
    suit: "clubs",
    suitColour: "black",
    suitSymbol: "♣️",
  },
  {
    deadwoodValue: 10,
    discard: false,
    displayName: "K",
    name: "king",
    rank: 39,
    suit: "clubs",
    suitColour: "black",
    suitSymbol: "♣️",
  },
]

const findCardIndex = function (arrayOfCards, value) {
  const cardIndex = arrayOfCards.map(e => e.rank).indexOf(value);
  return cardIndex;
}

const autoPass = async function (game, response) {
  const randomIndexForPassing = getRandomIndex(2);
  console.log('randomIndexForPassing', randomIndexForPassing)

  if(randomIndexForPassing === 0){
    response.send({
      id: game.id,
      playerHand: game.gameState.round.playersHand,
      score: game.gameState.score,
      playerDeadwood: game.gameState.round.playersDeadwoodValue,
      discardCardForPicking: game.gameState.round.discardPileToShow,
    });
  }

  else {
    const playersHand = game.gameState.round.playersHand;
    const player1Hand = game.gameState.round.playersHand[0]; 
    const discardPile = game.gameState.round.discardPile; 
    player1Hand.push(discardPile.pop()); 

    const player1Deadwood = getDeadwoodinHand(player1Hand); 
    const isHighestDeadwood = player1Deadwood.pop(); 
    const cardIndexToDiscardFromHand = findCardIndex(player1Hand, isHighestDeadwood.rank); 
    const discardedCard = player1Hand.splice(cardIndexToDiscardFromHand, 1); 

    discardPile.push(discardedCard[0]);
    const playersDeadwoodValue = getDeadwoodSum(playersHand);
    const discardPileToShow = discardPile[discardPile.length - 1];

    await game.update({
      gameState: {
        round: {
          discardPile,
          playersHand,
          playersDeadwoodValue,
          discardPileToShow,
        },
      },
    })

    response.send({
      id: game.id,
      playerHand: game.gameState.round.playersHand,
      score: game.gameState.score,
      playerDeadwood: game.gameState.round.playersDeadwoodValue,
      discardCardForPicking: game.gameState.round.discardPileToShow,
    });
  }
}

const drawingFromDeck = async function (game, response) {
  const playersHand = game.gameState.round.playersHand;
  const playerHand = game.gameState.round.playersHand[1]; 
  const cardDeck = game.gameState.round.cardDeck; 
  playerHand.push(cardDeck.pop()); 

  const playersDeadwoodValue = getDeadwoodSum(playersHand);

  await game.update({
    gameState: {
      round: {
        cardDeck,
        playersHand,
        playersDeadwoodValue,
      },
    },
  })

  response.send({
      id: game.id,
      playerHand: game.gameState.round.playersHand,
      score: game.gameState.score,
      playerDeadwood: game.gameState.round.playersDeadwoodValue,
      discardCardForPicking: game.gameState.round.discardPileToShow,
    });

}

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

    let player1Score = 0; 
    let player2Score = 0; 
    let discardPile = [];

    // deal out a new shuffled deck for this game.
    const cardDeck = shuffleCards(makeDeck());
    const playersHand = dealPlayerCards(cardDeck);
    discardPile.push(cardDeck.pop());
    const playersDeadwoodValue = getDeadwoodSum(playersHand);
    const discardPileToShow = discardPile[discardPile.length - 1];
    

    const newGame = {
      gameState: {
        status: 'started',
        score: {
          player1: player1Score,
          player2: player2Score
        },
        round: {
          cardDeck,
          discardPile,
          playersHand,
          playersDeadwoodValue,
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
      autoPass(game, response);
      
    } catch (error) {
      response.status(500).send(error);
      console.log(error);
    }
  };

  const drawDeck = async (request, response) => {
    try {
      // get the game by the ID passed in the request
      const game = await db.Game.findByPk(request.params.id);
      drawingFromDeck(game, response);
      
    } catch (error) {
      response.status(500).send(error);
      console.log(error);
    }
  }



//   // deal two new cards from the deck.
//   const deal = async (request, response) => {
//     try {
//       // get the game by the ID passed in the request
//       const game = await db.Game.findByPk(request.params.id);

//       // make changes to the object
//       const player1Card = game.gameState.cardDeck.pop();
//       const player2Card = game.gameState.cardDeck.pop();
//       const playerHand = [player1Card, player2Card];

//       if (player1Card.rank > player2Card.rank) {
//         game.gameState.result = 'Player 1 wins!!';
//         game.gameState.score.player1 += 1;
//       } else if (player1Card.rank < player2Card.rank) {
//         game.gameState.result = 'Player 2 wins!!';
//         game.gameState.score.player2 += 1;
//       } else {
//         game.gameState.result = 'Draw';
//       }

//       // update the game with the new info
//       await game.update({
//         gameState: {
//           cardDeck: game.gameState.cardDeck,
//           playerHand,
//           result: game.gameState.result,
//           score: {
//             player1: game.gameState.score.player1,
//             player2: game.gameState.score.player2
//           },
//         },

//       });

//       // send the updated game back to the user.
//       // dont include the deck so the user can't cheat
//       response.send({
//         id: game.id,
//         playerHand: game.gameState.playerHand,
//         result: game.gameState.result,
//         score: game.gameState.score,
//       });
//     } catch (error) {
//       response.status(500).send(error);
//     }
//   };

  // return all functions we define in an object
  // refer to the routes file above to see this used
  return {
//     deal,
    createGame,
    pass,
    drawDeck,
    // index,
  };
}
