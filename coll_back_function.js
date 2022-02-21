function show(a){
    console.log("i am monika prajapat",+a)
}
function geeky(callback){
    var a=101
    callback(a)
}
geeky(show)





function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);





// right


function perone(friand){
    console.log(`i am busy right now .i am talking to ${friand}`)
    // callfrnd
setTimeout(function (){
    // console.log(`i am busy right now .i am talking to ${friand}`)
    console.log(`hey what up .i call back you dekha`)
},3000)
    
}
function pertwo(){

    // console.log(`hey what up .i call back you dekha`)
}
perone("thapa")
pertwo()



function perone(friand,callfrnd){
    console.log(`i am busy right now .i am talking to ${friand}`)
    callfrnd()
    setTimeout=(()=>{

    },3000)

    
}
function pertwo(){
    console.log(`hey what up .i call back you dekha`)
}
perone("thapa",pertwo)
pertwo()
argument me function ko pass karna hi call back hai