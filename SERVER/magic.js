const express = require('express');
const server = express();
const port = 3000;

const magic8BallResponses =
["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


 server.get('/magic/:question', (req, res) => {
  const question = decodeURI(req.params.question);

  // Generate a random response from the Magic 8 ball responses array
  const randomResponse =
    magic8BallResponses[Math.floor(Math.random() * magic8BallResponses.length)];


  res.send(`<h1>Question: ${question}</h1><h1>Response: ${randomResponse}</h1>`);
});

 server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});