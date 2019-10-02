const Spot = require('../models/Spot');

module.exports = {
    async store(req, res){
       const {filename} = req.file;
       const {company, techs, price} = req.body;
       const {user_id} = req.headers;
       //Usuário vai pelo Header e não por qualqer form ou multipart
       //Verá melhor quando se fala em autenticação

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