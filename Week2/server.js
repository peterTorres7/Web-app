// imports 
const https = require('https');
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

// Post request
const info = JSON.stringify({
    name:"Peter Torres",
})

const options = {
    hostname:'reqres.in',
    path: '/api/users',
    method: 'POST',
    header: {
        'Content-Type':'application/json'
    }
}

const req = https.request(options, (res) => {
    let info = '';
    console.log("Status Code:", res.statusCode)

    res.on('data', (chunk)=> {
        info += chunk;
    })

    res.on('end', ()=>{
        console.log("Parsed:", JSON.parse(info));
        console.log(`Info: ${JSON.stringify(info)}`);
    })
})

req.write(info)
req.end();

//Create web server
const requestListener = function (req, res) {
    
    req.on('data', chunk => {
        console.log(`Data chunk: ${chunk}`)
    })

    res.writeHead(200);
    res.end('Hello, World!');
}



const server = http.createServer(requestListener);
server.listen(7777);