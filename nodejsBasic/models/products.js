//เชื่อมฐานข้อมูล และการออกแบบ shema
// *********************************

//ใช้งาน mongoose

const { strict } = require('assert')
const mongoose = require('mongoose')


//เชื่อมไปยัง MongoDB
const dbUrl = 'mongodb://localhost:27017/productDB'
mongoose.connect(dbUrl, {
     useNewUrlParser: true,
      useUnifiedTopology: true 
}).catch(err=>console.log(err))


//ออกแบบ Schema (ฟิลล์)
let productsSchema = mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    description:String
})

//สร้างโมเดล
let Product = mongoose.model("products",productsSchema)

//ส่งออกโมเดล
module.exports = Product

//ออกแบบฟังก์ชันสำหรับบันทึกข้อมูล
module.exports.saveProduct = function(model,data){
    model.save(data)
}