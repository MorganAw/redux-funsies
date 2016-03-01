export default function use_routes(server, router) {
  server.get('/', (req, res) => {
    res.status(200).render('index');
  });
}