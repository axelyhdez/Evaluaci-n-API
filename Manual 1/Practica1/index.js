const http=require('http')

http.createServer((req,res)=>{
    res.writeHead(200, {'content-Type':'application/json'});
    let salida={
        nombre: 'Axel',
        edad:22,
        url: req.url
    }
    //res.write('Hola mundo')
    res.write(JSON.stringify(salida));
    res.end();
}).listen(3000);

console.log('Escuchando en el puerto 3000')