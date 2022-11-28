var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/proyecto', (err,res)=>{
    if(err){
        throw err;
    }else{
        console.log("conexión exitosa");
    }
})

