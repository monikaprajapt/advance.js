// let c=false;
// let prom= new Promise(function(resolve,reject){
//     if(c){
//         resolve("i am sussecfull")
//     }
//     else{
//         reject("i am filed")

//     }

// })
// async function get(){
//     const data=await prom;
//     console.log(data)
//     const bio=await getdata(data[1])
//     console.log(bio)
// }
// get()
// console.log(prom)

    


// function prom(c){
//     return new Promise(function(resolve,reject){
//         if(c){
//             resolve("i am sussecfull")
//         }
//         else{
//             reject("i am filed")
//         }
//   })




// const probj= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         col_no=[1,2,3,4,5]
//         sum=0
//         i=0
//         while (i<col_no.length){
//             sum=sum+col_no[i]
//             i++
//         }
//         resolve(sum)
//     },2000)

// })
// probj.then((sum1)=>{
//     console.log(sum1,"sum")    

// })





 



//  


const probj= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let roll_no=[1,2,3,4,5]        
        resolve(roll_no)
        // reject("monika")

    },2000)
})
const getdata=(index)=>{
    return new Promise((resolve,reject)=>{
        setTimeout((index)=>{
            let biodata={name:"monika",age:18}
            resolve (`my roll_no is ${index}.my name is ${biodata.name} and i am ${biodata.age} year old`)

        },2000,index)
    })

}


probj.then((rollno)=>{
    console.log(rollno)
    getdata(rollno[1]).then((kuch)=>{
        console.log(kuch)
    })
}).catch((t)=>{
  console.log(t)
})



// async function get(){
//     const data=await probj;
//     console.log(data)
//     const bio=await getdata(data[1])
//     console.log(bio)
// }
// get()