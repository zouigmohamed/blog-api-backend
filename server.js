const http = require('http');
const express = require('express')

//! server 
const app = express()
const server = http.createServer(app)
//? start the server 👍
const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`server is running in port ${PORT}`)
})