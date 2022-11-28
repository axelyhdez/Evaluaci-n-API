const express = require('express')
const app = express()
const port=3000;

app.use(express.static(__dirname+'/templates'));

/*
app.get('/', function (req, res) {
    let salida={
        nombre: 'Axel',
        edad: 22,
        url: req.url
    }
  res.send(salida)
});

app.get('/otroServicio', function(req,res){
    res.send('Hello World');
});
*/

app.listen(port,()=>{
    console.log(`Escuchando servicio en el puerto ${port}`)
});