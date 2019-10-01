const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello Wolrd!');
});

app.listen(3333);