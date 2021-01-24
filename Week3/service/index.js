//imports
const express = require('express');
const app = express();
const port = 4000;

//route that responds 
app.get("/", (req, res) => {
    console.log("Success!");
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><h1>Main Page.</h1></body></html>');
    res.end();
})

//listens at given port
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
