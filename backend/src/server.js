const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');
// Banco feito em Mongo Atlas. Base de teste.
// Escolhido compatível com versao abaixo de 3.

const app = express();
mongoose.connect('mongodb://fabiano:qwe123@omniweek9-shard-00-00-y3gvn.mongodb.net:27017,omniweek9-shard-00-01-y3gvn.mongodb.net:27017,omniweek9-shard-00-02-y3gvn.mongodb.net:27017/semana09?ssl=true&replicaSet=omniweek9-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// req.query = acessasr os req params (para filtros)
// req.params = acessar route params (para edição e deletes)
// req.body = acessar corpo da requisição (JSON, ediçao e criação)

app.use(cors()); //app.use(cors(http:localhost:3333/)) seria apenas a nosso front para acessar essa apis 
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..','uploads'))); //rota virtual
app.use(routes);



app.listen(3333);