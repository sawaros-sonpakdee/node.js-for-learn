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


const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    // const name = "send propperty data"
    // res.render('index.ejs',{data:name,age:18})

    const products = ["เสื้อ","พัดลม","หูฟัง","คีย์บอร์ด"]
    res.render('index',{products:products})
})
module.exports = router