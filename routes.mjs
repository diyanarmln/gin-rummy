import { resolve } from 'path';
import db from './models/index.mjs';

import initGamesController from './controllers/games.mjs';
import initUsersController from './controllers/users.mjs';

export default function bindRoutes(app) {
  const GamesController = initGamesController(db);
  const UserController = initUsersController(db);
  // main page
  app.get('/', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
  // create a new game and round
  app.post('/games', GamesController.createGame);
  // create a new round
  // app.post('/games/:gameId/:roundId', GamesController.createRound);
  // update round when player pass
  app.put('/games/:id/pass', GamesController.pass);
  // update round when player draws from deck
  app.put('/games/:id/drawDeck', GamesController.drawDeck);
  // update round when player draws from discard pile
  app.put('/games/:id/drawDiscard', GamesController.drawDiscard);


  // update round when player discards from hand
  
  // update round and game when player knocks

  // update round and game when player gins

  // update round and game when player bigGins

  // user login
  app.get('/user', UserController.dashboard);
  app.post('/login', UserController.login);
}
