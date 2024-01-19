//Non-Blocking หรือ Asynchronouns
const fs = require('fs')

//อ่านนไฟล์ input.txt
fs.readFile("file/input.txt",'utf-8',(err,data)=>{
    if(err) return console.log("เกิดข้อผิดพลาด",err)
    const outputText = `Hello Node.js\n${data}\nไฟล์ถูกเขียนเมื่อ ${new Date()}`
    fs.writeFile("file/output2.txt",outputText,err=>{
        if(err) return console.log("เกิดข้อผิดพลาด",err)
        console.log("เขียนไฟล์เรียบร้อย")
    })

 })

console.log("จบการทำงาน")
 