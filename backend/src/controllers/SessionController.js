//Dentro do controle
//index, show, store, update, destroy
//index = listagem de todas
//show = unica sessao
//store = criar
//update = alterar
//destroy = deletar
const User = require('../models/User');

module.exports = {
    async store(req, res){
        //return res.json({message : 'Hello World!'})
        const { email } = req.body;
        //Com chaves, quer dizer que ele está buscando a chave EMAIL no req.body

        const user = await User.create({ email });

        return res.json(user);
    }

    //async = significa que é uma função assincrona
    //await = significa que ele vai esperar executar, finalizar a ação do banco
};