// imports http
const http = require('http');

// Gets user info
http.get('http://jsonplaceholder.typicode.com/users', (response) => {
   
    let data = '';
    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        console.log(data);
    });
})

.on('error', (error) => {
    console.log(error);
})


const requestListener = function (req, res) {
    
    req.on('data', chunk => {
        console.log(`Data chunk: ${chunk}`)
    })

    res.writeHead(200);
    res.end('Hello, World!');
}



const server = http.createServer(requestListener);
server.listen(7777);