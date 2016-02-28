import express from 'express';
import add_routes from './config/routes';


const server = new express();
const router = express.Router();

use_routes(server, router);

server.listen(process.env.PORT || 8080, () => {
  if (error) {
    console.error(error);
  } else {
    let host = server.address().address;
    let port = server.address().port;
    let mode = server.settings.env;

    console.log('App listening at http://%s:%s in %s mode', host, port, mode);
  }
});
