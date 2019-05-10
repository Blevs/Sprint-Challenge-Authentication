const axios = require('axios');
const bcrypt = require('bcrypt');
const db = require('../database/dbConfig.js');

const { authenticate, generateToken } = require('../auth/authenticate');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  const user = req.body;
  if (user.username && user.password) {
    user.password = bcrypt.hashSync(user.password, 10);
    db('users')
      .insert(user)
      .then(([id]) =>
            db('users').where({id}).first()
            .then(user => res.status(201).json(user)))
      .catch(error => res.status(500).json({
        message: "Error registering user",
        error
      }));
  } else {
    res.status(400).json({message: "Requires username and password"});
  }
}

function login(req, res) {
  const creds = req.body;
  db('users')
    .where({username: creds.username})
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({token});
      } else {
        res.status(401).json({
          message: "Invalid credentials"
        });
      }
    })
    .catch(() => res.status(401).json({message: "Invalid credentials"}));
}


function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
