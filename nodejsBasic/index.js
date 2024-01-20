//สร้าง web server

const http = require('http')

const server = http.createServer(function(req,res){
    res.writable("Hello Node.js")
    res.end()
})

server.listen(3000)