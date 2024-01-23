//สร้าง web server

const http = require('http')
const pathName = require('path')
const fs = require('fs') 
const url = require('url')

// ระบุตำแหน่งไฟล์  
const indexPage = fs.readFileSync(`${__dirname}/templates/index.html`,`utf-8`)

const productPage = fs.readFileSync(`${__dirname}/templates/product1.html`,`utf-8`)

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

    console.log(url.parse(req.url,true))
     
    // console.log("url = ",req)
    if(pathName === "/" || pathName === "/home"){
       res.end(indexPage)
    }
    else if(pathName === "/product"){
        res.end(productPage)
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
