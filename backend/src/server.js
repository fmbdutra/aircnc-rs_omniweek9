const express = require('express');
const routes = require('./routes');

const app = express();

// req.query = acessasr os req params (para filtros)
// req.params = acessar route params (para edição e deletes)
// req.body = acessar corpo da requisição (JSON, ediçao e criação)

app.use(express.json());
app.use(routes);



app.listen(3333);