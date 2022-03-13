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

// get a random index from an array given it's size
const getRandomIndex = function (size) {
  return Math.floor(Math.random() * size);
};

// cards is an array of card objects
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

const makeDeck = function () {
  // create the empty deck at the beginning
  const deck = [];

  const suits = ['hearts', 'diamonds', 'clubs', 'spades'];

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

          // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
          if (cardName === '1') {
            cardName = 'ace';
            shortForm = 'A';
          } else if (cardName === '11') {
            cardName = 'jack';
            shortForm = 'J';
          } else if (cardName === '12') {
            cardName = 'queen';
            shortForm = 'Q';
          } else if (cardName === '13') {
            cardName = 'king';
            shortForm = 'K';
          }

          // Create a new card with the current name, suit, and rank
          const card = {
            name: cardName,
            suit: currentSuit,
            rank: rankCounter,
            displayName: shortForm,
            suitSymbol: symbol,
            suitColour: color,
            discard: false,
          };

          deck.push(card);
        };
    }
  return deck;
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

  let player1Score = 0;
  let player2Score = 0;
  let result;

  // render the main page
  const index = (request, response) => {
    response.render('games/index');
  };

  // create a new game. Insert a new row in the DB.
  const create = async (request, response) => {
    // deal out a new shuffled deck for this game.
    const cardDeck = shuffleCards(makeDeck());
    const player1Card = cardDeck.pop();
    const player2Card = cardDeck.pop();
    const playerHand = [player1Card, player2Card];

    if (player1Card.rank > player2Card.rank) {
      result = 'Player 1 wins!!';
      player1Score += 1;
    } else if (player1Card.rank < player2Card.rank) {
      result = 'Player 2 wins!!';
      player2Score += 1;
    } else {
      result = 'Draw';
    }

    const newGame = {
      gameState: {
        cardDeck,
        playerHand,
        result,
        score: {
          player1: player1Score,
          player2: player2Score
        },
      },
    };

    try {
      // run the DB INSERT query
      const game = await db.Game.create(newGame);

      // send the new game back to the user.
      // dont include the deck so the user can't cheat
      response.send({
        id: game.id,
        playerHand: game.gameState.playerHand,
        result: game.gameState.result,
        score: game.gameState.score,
      });
    } catch (error) {
      response.status(500).send(error);
    }
  };

  // deal two new cards from the deck.
  const deal = async (request, response) => {
    try {
      // get the game by the ID passed in the request
      const game = await db.Game.findByPk(request.params.id);

      // make changes to the object
      const player1Card = game.gameState.cardDeck.pop();
      const player2Card = game.gameState.cardDeck.pop();
      const playerHand = [player1Card, player2Card];

      if (player1Card.rank > player2Card.rank) {
        game.gameState.result = 'Player 1 wins!!';
        game.gameState.score.player1 += 1;
      } else if (player1Card.rank < player2Card.rank) {
        game.gameState.result = 'Player 2 wins!!';
        game.gameState.score.player2 += 1;
      } else {
        game.gameState.result = 'Draw';
      }

      // update the game with the new info
      await game.update({
        gameState: {
          cardDeck: game.gameState.cardDeck,
          playerHand,
          result: game.gameState.result,
          score: {
            player1: game.gameState.score.player1,
            player2: game.gameState.score.player2
          },
        },

      });

      // send the updated game back to the user.
      // dont include the deck so the user can't cheat
      response.send({
        id: game.id,
        playerHand: game.gameState.playerHand,
        result: game.gameState.result,
        score: game.gameState.score,
      });
    } catch (error) {
      response.status(500).send(error);
    }
  };

  // return all functions we define in an object
  // refer to the routes file above to see this used
  return {
    deal,
    create,
    index,
  };
}
