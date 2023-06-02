const AppError = require('../utils/appError');

const catchAsync = require('../utils/catchAsync');

const PerfilEntrada = require('../models/PerfilEntrada');

const getPerfiles=catchAsync(async(req,res,next)=>{
    try{
        const Usuarios=await PerfilEntrada.findAll({attributes: {
            exclude: ['createdAt','updatedAt']
        }});
        res.status('200').json({
            status:'success',
            data:{
                Usuarios
                }});
    }catch(error){
        return next("No hay usuarios",404)
    }
})
module.exports = {  getPerfiles };

