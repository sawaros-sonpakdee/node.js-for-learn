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

//จัดการ Routing
const express = require('express')
const router = express.Router()

//เรียกใช้งานโมเดล
const Product = require('../models/products')

//อัพโหลดไฟล์
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/products')//ตำแหน่งจัดเก็บไฟล์
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + ".jpg")//เปลี่ยนชื่อไฟล์ ป้องกันชื่อซ้ำ
    }
})
//เริ่มต้น upload
const upload = multer({
    storage: storage
})
//logout
router.get('/logout', (req, res) => {
    // res.clearCookie('username')
    // res.clearCookie('password')
    // res.clearCookie('login')
    // res.redirect('manage')
    req.session.destroy((err)=>{
        res.redirect('manage')
    })
    
})

router.get('/', async (req, res) => {
    // const name_data = "send propperty data"
    // const products = [
    //     { name: "เสื้อผ้า", price: 500, image: "images/products/product1.png" },
    //     { name: "เสื้อ", price: 200, image: "images/products/product2.png" },
    //     { name: "พัดลม", price: 30000, image: "images/products/product3.png" }
    // ]
    // res.render('index', { products: products })
    try {
        const doc = await Product.find().exec();
        res.render('index', { products: doc })
    } catch (error) {
        console.error(error);
    }
})

router.get('/addForm', (req, res) => {
    // if (req.cookies.login) {
    //     res.render('form') //save data
    // }
    // else{
    //     res.render('admin') //login
    // }
    // res.render('form')
    // res.render('admin')
    if (req.session.login) {
        res.render('form') //save data
    }
    else {
        res.render('admin') //login
    }
})

router.get('/manage', async (req, res) => {

    // if (req.cookies.login) {
    //      //save data
    //     try {
    //         const doc = await Product.find().exec();
    //         res.render('manage', { products: doc })
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    // else {
    //     res.render('admin') // login
    // }


    if (req.session.login) {
        //save data
        try {
            const doc = await Product.find().exec();
            res.render('manage', { products: doc })
        } catch (error) {
            console.error(error);
        }
    }
    else {
        res.render('admin') // login
    }


    // try {
    //     console.log("รหัส session = " ,req.sessionID)
    //     console.log("ข้อมูล session = ")
    //     const doc = await Product.find().exec();
    //     res.render('manage', { products: doc })
    // } catch (error) {
    //     console.error(error);
    // }

})

router.get('/delete/:id', async (req, res) => {
    console.log("Delete ID = ", req.params.id)
    try {
        Product.findByIdAndDelete(req.params.id, { useFindAndModify: false }).exec()
        res.redirect('/manage')
    } catch (error) {
        console.error(error);
    }
})

router.post('/insert', upload.single("image"), async (req, res) => {

    //callback fuction deprecated
    console.log(req.file);
    //สร้างสินค้าชิ้นใหม่
    try {
        let data = new Product({
            name: req.body.name,
            price: req.body.price,
            image: req.file.filename,
            description: req.body.description
        })
        Product.saveProduct(data)
        res.redirect('/')
    } catch (err) {
        console.log(err);
    }
    // res.render('form')
})

router.get('index/:id', async (req, res) => {
    const product_id = req.params.id
    // console.log(product_id)
    try {
        const result = await Product.findOne({ _id: product_id }).exec()
        res.render('product', { product: result })
    } catch (error) {
        console.error(error);
    }
})

router.post('/edit', async (req, res) => {
    const edit_id = req.body.edit_id
    console.log(edit_id)
    try {
        const result = await Product.findOne({ _id: edit_id }).exec()
        //นำข้อมูลที่ต้องการแก้ไข ไปแสดงในแบบฟอร์ม
        res.render('edit', { product: result })
        console.log(result)
    } catch (error) {
        console.log(error)
    }
})
router.post('/update', (req, res) => {
    //ข้อมูลใหม่ที่ส่งมาจากฟอร์มแก้ไข
    const Update_id = req.body.update_id
    try {
        let data = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        }
        Product.findByIdAndUpdate(Update_id, data, { useFindAndModify: false }).exec()
        res.redirect('/manage')
        //    console.log("ข้อมูลที่ส่งจากฟอร์ม = ",data)
        //    console.log("รหัสอัพเดต = ",update_id)
    } catch (err) {
        console.log(err);

    }
})

router.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const timeExpire = 30000 // 10 วินาที

    if (username === "admin" && password === "123") {
        //สร้าง cookie
        // res.cookie('username', username, { maxAge: timeExpire })
        // res.cookie('password', password, { maxAge: timeExpire })
        // res.cookie('login', true, { maxAge: timeExpire }) //true => login เข้าสู่ระบบหลังบ้าน
        // res.redirect('manage')

        //สร้าง session
        req.session.username = username
        req.session.password = password
        req.session.login = true
        req.session.cookie.maxAge = timeExpire
        res.redirect('/manage')
    }
    else {
        res.render('404')
    }
})

module.exports = router