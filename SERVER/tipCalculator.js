const express = require('express');
const server = express();
const port = 3000;

server.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = parseFloat(req.params.total);
    const tipPercentage = parseFloat(req.params.tipPercentage);

    const tipamount = (total * tipPercentage) /100;

    res.send(`Tip Amount: ${tipamount}`)
})


server.listen(port, () => {
    console.log(`server is listing on port ${port}`)
})

