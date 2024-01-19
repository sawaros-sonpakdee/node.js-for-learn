//Blocking
const fs = require('fs')

//อ่านไฟล์ input.txt
const data = fs.readFileSync('file/sampleFile.txt','utf-8')
console.log(data)

//write file
const   outputText  = `Hello Node.js\n${data}\nไฟล์ถูกเขียนเมื่อ ${new Date()}`
fs.writeFileSync("file/sampleFile.txt",outputText)
console.log("เขียนไฟล์เรียบร้อย")