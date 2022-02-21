const you1=function(){
    console.log("thank you")
}
you1()


const youtube={name:"thapa",qualify:function(){
    console.log("i did")
}}
youtube.qualify()




// 2pass a function as an agrument

function my_name(){
    return  "hello"
}
function greating(sayhi,name){
    console.log(sayhi(),name)
}
greating(my_name,"monika")



3returning function
function a(){
    return function b(){
        console.log("thank you so much")
    }
}
// a()()
const c=a()
c()









