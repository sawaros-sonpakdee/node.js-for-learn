//สร้าง web server

const http = require('http')
const path = require('path')

// //สร้าง server(callback function(request,respon))
// const server = http.createServer(function(req,res){
//     res.write("Hello Node.js update")//ถ้ามีการเปลี่ยนแปลงข้อมูล ต้อง restart server
//     res.end()//บอกจุดสิ้นสุดในการรับ-ส่งข้อมูล
// })

// server.listen(3000)



// http.createServer((req, res) => {
//     res.write("Hello Node.js update")//ถ้ามีการเปลี่ยนแปลงข้อมูล ต้อง restart server
//     res.end()//บอกจุดสิ้นสุดในการรับ-ส่งข้อมูล
// }).listen(8080,()=>{
//     console.log("start server in port 8080")
// })



// const server = http.createServer((req, res) => {
//     res.write("<h1>Hello Node.js update</h1>")//ถ้ามีการเปลี่ยนแปลงข้อมูล ต้อง restart server
//     res.end()//บอกจุดสิ้นสุดในการรับ-ส่งข้อมูล
// })
// server.listen(8080,'localhost',()=>{
//     console.log("start server in port 8080")
// })



// //****การ respon ข้อมูล */
// const server = http.createServer((req, res) => {
//     const myhtml = `
//     <h1>Hello Node.js update</h1>
//     <p style="color:blßue">By Sawaros Sonpakdee</p>`

//     res.write(myhtml)//ถ้ามีการเปลี่ยนแปลงข้อมูล ต้อง restart server
//     res.end()//บอกจุดสิ้นสุดในการรับ-ส่งข้อมูล
// })
// server.listen(8080,'localhost',()=>{
//     console.log("start server in port 8080")
// })


//****การ routing  */
const server = http.createServer((req, res) => {
    const pathName = req.url
    console.log("url = ",req)
    if(pathName === "/" || pathName === "/home"){
        const myhtml = `
        <h1>Hello Node.js update</h1>
        <p style="color:blue">By Sawaros Sonpakdee</p>`
        res.write(myhtml)//ถ้ามีการเปลี่ยนแปลงข้อมูล ต้อง restart server
    }
    else if(pathName === "/product"){
        res.end("<h1>Hello Product</h1>")
    }
    else{
        res.writeHead(404)
        res.end("<h1>Not Found</h1>")
    }
    
  
    res.end()//บอกจุดสิ้นสุดในการรับ-ส่งข้อมูล
})
server.listen(8080,'localhost',()=>{
    console.log("start server in port 8080")
})
