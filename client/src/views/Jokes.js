import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Jokes = (props) => {
  const [jokes, setJokes] = useState([]);
  useEffect( () => {
    axios.get('/jokes')
      .then(res => setJokes(res.data))
      .catch(err => err.response.status === 401 && props.history.push('/login'));
  }, []);
  return (
    <div>
      {jokes.map(j => (
        <div key={j.id}>
          {j.joke}
        </div>
      ))}
    </div>
  );
};

export default Jokes;
