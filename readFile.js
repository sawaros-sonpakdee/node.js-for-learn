//Blocking
const fs = require('fs')

//read File
const data = fs.readFileSync('file/sampleFile.txt','utf-8')
console.log(data)
console.log("จบการทำงาน")