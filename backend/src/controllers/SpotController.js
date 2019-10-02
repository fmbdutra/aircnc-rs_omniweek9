const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
    async store(req, res){
       const {filename} = req.file;
       const {company, techs, price} = req.body;
       const {user_id} = req.headers;
       //Usuário vai pelo Header e não por qualqer form ou multipart
       //Verá melhor quando se fala em autenticação

       //Validação de usuário
        const user = await User.findById(user_id);

        if(!user){
            return res.status(400).json({error: 'Usuario nao encontrado'});
        } //Erro 400 => bad request
        //Fim validacao de usuário

       const spot = await Spot.create({
           user: user_id,
           thumbnail: filename,
           company,
           techs: techs.split(',').map(tech => tech.trim()),
           price
       })

        return res.json(spot);
    }    
};