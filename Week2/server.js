// Peter Torres
// HTTP Server GET/POST

// import
const http = require('http');

//Create web server
const requestListener = function (req, res) {
    
    //If get request
    if(req.url === '/users' && req.method == 'GET') {
        const users = [
            {user:'Clark Kent', id: 1, secretId: 'Superman'},
            {user:'Bruce Wayne', id: 2, secretId: 'Batman'},
            {user:'Barry Allen', id: 3, secretId: 'Flash'}
        ];
        res.write(`<h1>${JSON.stringify(users)}</h1>`);
        res.end();
    //If post request
    } else if (req.url === '/' && req.method === 'POST') {
        let data = "";
        req.on('data', (chunk) => {
            data += chunk.toString();
        });
        req.on('end', () => {
            const jsonData = JSON.parse(data);
            console.log(JSON.stringify(jsonData));
            res.write(`Data: ${jsonData.toString()}`);
            res.end();
        });
    }
}

//Creates server
const server = http.createServer(requestListener);
server.listen(7777);
