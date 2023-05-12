const express = require('express');
const axios = require('axios');
require('dotenv').config();

app.get('/api/dadjoke', async (req, res) => {
    try {
      const response = await axios({
        method: 'GET',
        url: 'https://dad-jokes.p.rapidapi.com/random/joke',
        headers: {
          'x-rapidapi-key': ac36004e64msh2f03d5e28e75ab5p1a32bfjsn9dc87404b637,
          'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
          'useQueryString': true
        }
      });
      const joke = {
        setup: response.data.setup,
        punchline: response.data.punchline
      };
      res.json(joke);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
