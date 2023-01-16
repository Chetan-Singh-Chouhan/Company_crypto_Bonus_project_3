const cryptoModel=require("../models/cryptoModel");

const assets = async function(req,res){
    try{
        let duplicateData = cryptoModel.find($or[req.symbol,req.name])
        if (!duplicateData){
            if(req.marketCapUsd==String){
                let cryptoData = cryptoModel.create(data)
            }
            else{
                res.send('marketCapUsd must be string only')
            }
        }
        
        else{
            res.send('Symbol and name must be unique')

        }
        

    }
    catch(error){
        return res.status(500).send({status:false,msg:error.message})
    }
     
    
     

};







module.exports={assets};