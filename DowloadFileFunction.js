//Download Files function
const url1 = "https://github.com/sawaros-sonpakdee1"
// const url2 = "https://github.com/sawaros-sonpakdee2"
// const url3 = "https://github.com/sawaros-sonpakdee3"


function dowloading(url1,callback){
    console.log(`กำลังโหลดไฟล์จาก ${url1}`)
    setTimeout(()=>{
        callback(url1)
    },3000)
}

function complete(){
    console.log(`ดาวน์โหลด ${url1} เรียบร้อย!`)
}


// dowloading(url1,complete)
// complete()


dowloading(url1,function(result){
    console.log(`ดาวน์โหลด ${result} เรียบร้อย`)
})