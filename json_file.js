const { writeFile } = require("fs ")

fs=require("fs")
var b={"m":1,"o":2,"n":3,"i":4}
var a=JSON.stringify(b)
fs.writeFile("monika.tex",a,(err)=>{
})