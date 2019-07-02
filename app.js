const http = require('http');  
const server = http.createServer(   //Estamos pasándole a la función createServer una función anónima.
    
    (req, res) => {if(req.url === '/'){res.write('hello world');res.end();}

if(req.url === '/api/courses'){ // 
res.write(JSON.stringify([1,2,3])); // 
res.end(); // 
}
});

server.listen(3000) // puerto por donde escucha el servidor las peteciones

console.log('Listening on port 3000..'); // mostrara un mensaje en consola (Listening on port 3000..)
