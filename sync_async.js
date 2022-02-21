// sync//
 const fun =()=>{
    console.log("monika")
}
const fun1 =()=>{
    console.log("prajapati")
    fun()
    console.log("kumawat")
}
fun1()







const fun =()=>{
    setTimeout(()=>{
        console.log("monika")  
    }),3000;
    // console.log("monika")
}
const fun1 =()=>{
    console.log("prajapati")
    fun()
    console.log("kumawat")
}
fun1()