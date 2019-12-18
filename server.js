const http = require('http');
const app = require('./app');
const server = http.createServer(app);

const PORT =process.env.PORT || 3000;
console.log("SERVER LISTEN ON PORT "+PORT);
server.listen(PORT);