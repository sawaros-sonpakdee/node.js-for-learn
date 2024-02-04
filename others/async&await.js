
const url1= "sawaros.com/file1.json"
const url2 = "https://github.com/sawaros-sonpakdee2"
const url3 = "https://github.com/sawaros-sonpakdee3"
const url4 = "https://github.com/sawaros-sonpakde4"
const url5 = "https://github.com/sawaros-sonpakdee5"

const connect = true 

function dowloading(url){
    return new Promise(function(resolve,reject){
         console.log(`กำลังโหลดไฟล์จาก ${url}`)
         setTimeout(()=>{
            if(connect){
                resolve(`โหลด ${url} เรียบร้อย`)
            }
            else{
                reject(`เกิดข้อผิดพลาด`)
            }
         },1000)
    })
}

//Async & Await

async function start(){
    console.log(await dowloading(url1))
    console.log(await dowloading(url2))
    console.log(await dowloading(url3))
    console.log(await dowloading(url4))
    console.log(await dowloading(url5))
    //await คือให้รอการดาวน์โหลดลำดับก่อนหน้าเสร็จก่อนค่อยทำอันต่อไป
}

start()

//การประยุกต์ใช้
//api ภาพสินค้า(backend) -> fronted (แสดงภาพในเว็บ)
//api(promise) -> (pending) -> รอข้อมูลครบ (await) -> แสดงภาพ
//loading.......-> แสดงภาพ