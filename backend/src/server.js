const express = require('express');

const app = express();

app.use(express.json());

// GET, POST, PUT, DELETE   
app.get('/', (req, res) => {
    return res.json({"message": "Hello Wolrd!"});
});

// req.query = acessasr os req params (para filtros)
// mandando parametro => blau/users?idade=5
app.get('/usersidade', (req, res) => {
    return res.json({idade: req.query.idade});
});

// req.params = acessar route params (para edição e deletes)
// blau.com/users/2
app.put('/users/:id', (req, res) => {
    return res.json({id: req.params.id});
});

//req.body = acessar corpo da requisição (JSON, ediçao e criação)
//no body, manda um json
app.post('/users', (req, res) => {
    return res.json(req.body);
});

app.listen(3333);