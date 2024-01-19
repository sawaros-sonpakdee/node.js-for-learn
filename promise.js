//สร้าง promiss

const connect = false //สมมุติว่าต่อเน็ตหรือเปล่า

const url1= "sawaros.com/file1.json"
const url2 = "https://github.com/sawaros-sonpakdee2"
const url3 = "https://github.com/sawaros-sonpakdee3"

function dowloading(url){
    return new Promise(function(resolve,reject){ 
        // if(connect){
        //     // console.log(`โหลด ${url} เรียบร้อย`)///** ในกรณีที่ connect เป็น true **/
        // }
        // else{
        //     // console.log(`เกิดข้อผิดพลาด`)///** ในกรณีที่ connect เป็น false **/
        // }
         // console.log(`โหลด ${url} เรียบร้อย`)///** ในกรณีที่ connect เป็น true **/
         console.log(`กำลังโหลดไฟล์จาก ${url}`)
         setTimeout(()=>{
            if(connect){
                resolve(`โหลด ${url} เรียบบร้อย`)
            }
            else{
                reject(`เกิดข้อผิดพลาด`)
            }
        },3000)
    })
}

// dowloading(url1).then(result=>{
//     console.log(result);
// }).catch(err=>{ //ถ้าเข้าเงื่อนไข reject  ให้เก็บสถานะใน err
//     console.log(err)
// }).finally(()=>{
//     console.log("จบการทำงาน")
// })


//ในกรณีที่มีหลายไฟล์ (promiss hell)
// dowloading(url1).then(result=>{
//     console.log(result)
//     dowloading(url2).then(result=>{
//         console.log(result)
//         dowloading(url3).then(result=>{
//             console.log(result)
//         })
//     })
// })

dowloading(url1).then(function(result){
    console.log(result)  
    return dowloading(url2)
}).then(function(result){
    console.log(result)
    return dowloading(url3)
}).then(function(result){
    console.log(result)
})
//ทำต่อไปเรื่อยๆ...