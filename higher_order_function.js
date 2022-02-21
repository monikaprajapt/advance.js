function sum(a,b){
    return a+b
}
function power(a,b){
    return Math.pow(a,b)
}


function operation(a,b,fn){
    let result=fn(a,b)
    console.log(result)
}
operation(4,5,sub)
operation(2,4,power)



function outer(){
    function inner(){                                                                                                           
        console.log("monika")
    }

    return inner
}
outer()()



const interviewquestion=(name)=>{
    if(name==="vinod"){
        return function (topic){
            console.log(`hii ${name}.what is topic ${topic}?.plz explain it`)
        }
    }
    if(name==="thapa"){
        return function(topic){
            console.log(`hii ${name}.what is ${topic}?.plz explain it`)
        }
    }
    if (name==="thapatecnical"){
        return function(topic){
            console.log(`hii ${name}.what is ${topic}?.plz explain`)
        }
    }
    else{
        return function(){
            console.log("welcome to interviw")
        }
    }
}
// interviewquestion("monika")("java")

// interviewquestion("thapa")("python")



const cand1=interviewquestion("thapa")
cand1("java")
cand1("js")
cand1("python")














    



var jethalal={wife:"deya",age:50}
var bihede={wife:"madvi",age:50}
function poptlal(){
console.log(this.wife)
}
poptlal.call(jethalal)1