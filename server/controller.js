const getAll = (req, res, next) => {
  const db = req.app.get('db');

  db.get_listings()
    .then(response => {
      res.status(200).send(response);
      console.log(response);
    })
    .catch(err => {
      res.status(500).send(err);
      console.log(`Something went wrong!`);
    });
};

const create = (req, res, next) => {
  const db = req.app.get('db');
  const { name, address, city, state, zip } = req.body;

  db.create_listings([name, address, city, state, zip])
    .then(() => {
      res.status(200).send('Sweet');
    })
    .catch(err => {
      res.status(500).send(err);
      console.log(`Something went wrong!!`);
    });

  db.create_listing;
};

const del = (req, res, next) => {
  const db = req.app.get('db');
  console.log(req.params.id)

  db.delete_listing(req.params.id)
    .then(() => {
      res.status(200).send('Sweet');
    })
    .catch(err => {
      res.status(500).send(err);
      console.log(`Somthing went wrong!`);
    });
};

module.exports = {
  getAll,
  create,
  del
};
