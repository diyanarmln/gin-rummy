import db from './models/index.mjs';

import initGamesController from './controllers/games.mjs';
import initUsersController from './controllers/users.mjs';

export default function bindRoutes(app) {
  const GamesController = initGamesController(db);
  const UserController = initUsersController(db);
  // main page
  app.get('/', GamesController.index);
  // create a new game
  app.post('/games', GamesController.create);
  // update a game with new cards
  app.put('/games/:id/deal', GamesController.deal);

  app.get('/user', UserController.dashboard);
  app.post('/login', UserController.login);
}
