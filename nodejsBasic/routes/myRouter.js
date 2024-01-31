//สร้าง โมดูลการจัดการ รับ-ข้อมูล (Routing)
const express = require('express')
const router = express.Router()
const path = require('path')



//อ้างอิงตำแหน่งไฟล์
router.get("/",(req,res)=>{
    //send details of file
    res.status(200)
    res.type('text/html')
    res.sendFile(path.join(__dirname,"../templates/index.html"))
})
router.use("/product",(req,res)=>{
    res.sendFile(path.join(__dirname,"../templates/product1.html"))
})

module.exports = router
