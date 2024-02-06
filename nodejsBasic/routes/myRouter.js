// //สร้าง โมดูลการจัดการ รับ-ข้อมูล (Routing)
// const express = require('express')
// const router = express.Router()
// const path = require('path')


// router.get("/", (req, res) => {
//     //send details of file
//     res.status(200)
//     res.type('text/html')
//     res.sendFile(path.join(__dirname, "../templates/index.html"))
// })
// router.use("/product/:id", (req, res) => {
//     res.sendFile(path.join(__dirname, "../templates/product1.html"))
//     const productID = req.params.id

//     // const myhtml = `<h1>Product ${productID}</h1>`
//     // res.send(myhtml)

//     if (productID === "1") {
//         res.sendFile(path.join(__dirname, "../templates/product1.html"))
//     }
//     else if(productID === "2") {
//         res.sendFile(path.join(__dirname, "../templates/product2.html"))
//     }
//     else if(productID === "3") {
//         res.sendFile(path.join(__dirname, "../templates/product3.html"))
//     } 
//     else{
//         // res.status(404)
//         // res.send("<h1>Page Not Found</h1>")
//         res.redirect('/')
//     }

// })

// module.exports = router


// const express = require('express')
// const router = express.Router()

// router.get('/',(req,res)=>{
//     const name_data = "send propperty data"
//     // res.render('index.ejs',{data:name,age:18})

//     // const products = ["เสื้อ","พัดลม","หูฟัง","คีย์บอร์ด"]
//     // res.render('index',{products:products})

//     const products = [ 
//         {name:"เสื้อผ้า",price:500,image:"images/products/product1.png"},
//         {name:"เสื้อ",price:200,image:"images/products/product2.png"},
//         {name:"พัดลม",price:30000,image:"images/products/product3.png"}
//     ]
//     res.render('index',{products:products})  
    
// })
// module.exports = router

const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    const name_data = "send propperty data"
    const products = [ 
        {name:"เสื้อผ้า",price:500,image:"images/products/product1.png"},
        {name:"เสื้อ",price:200,image:"images/products/product2.png"},
        {name:"พัดลม",price:30000,image:"images/products/product3.png"}
    ]
    res.render('index',{products:products})  
})

router.get('/addForm',(req,res)=>{
    res.render('form')
})

router.get('/manage',(req,res)=>{
    res.render('manage')
})

// router.get('/insert',(req,res)=>{
//     console.log(req.query )
//     res.render('form')
// })

router.post('/insert',(req,res)=>{
    console.log(req.body )
    res.render('form')
})

module.exports = router