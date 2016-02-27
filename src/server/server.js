import express from 'express';
import add_routes from './config/routes';


const server = new express();

use_routes(server);

server.listen(8080, () => {
  if (error) {
    console.error(error);
  } else {

  }
});

server.listen(process.env.PORT || 8080, () => {
  var host = server.address().address;
  var port = server.address().port;
  var mode = app.settings.env;

  console.log('App listening at http://%s:%s in %s mode', host, port, mode);
});
