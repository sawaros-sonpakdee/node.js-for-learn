function calculate(x,y,callback){
    setTimeout(()=>{
        // console.log("กำลังคำนวณ....")
        const sum = x+y 
        callback(sum)
    },3000)
}

function display(result){
    console.log(`ผลบวก ${result}`)
}

//normal function 
// const sum = calculate(100,50)
// display(sum)


//callback function
calculate(100,50,function(result){
    console.log(`ผลบวก = ${result}`)
})