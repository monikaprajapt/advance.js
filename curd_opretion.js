fs=require("fs")
fs.writeFile("monika.txt","my name is monika",(err)=>{
    console.log("file create")
    console.log(err)
})


fs=require("fs")
fs.readFile("monika.txt","utf8",(err,d)=>{
    console.log(d)

})


fs=require("fs")
fs.appendFile("monika.txt","my age 12",(err)=>{
    console.log(err)

})


fs=require("fs")
fs.rename("monika.txt","sona.txt",(err)=>{
    console.log(err)

})


fs=require("fs")
fs.unlink("sona.txt",(err)=>{
    console.log("delith.txt")

})