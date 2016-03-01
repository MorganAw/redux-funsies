import path         from 'path';
import express      from 'express';
import use_routes   from './config/routes';

const server = new express();
const router = express.Router();

var port = process.env.PORT || 8080;

server.set(
  'views',
  path.join(__dirname, '..', '..', 'static', 'views', 'jades')
);
server.set('view engine', 'jade');

server.use(express.static(path.join(__dirname, '..', '..', 'static')));

use_routes(server, router);

server.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    let mode = server.settings.env;

    console.log('App listening on port %s in %s mode', port, mode);
  }
});
