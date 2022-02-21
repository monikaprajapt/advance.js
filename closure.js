const outerfun=(a)=>{
    let b=10;
    const innerfun=()=>{
        sum=a+b
        console.log(`sum of the two number ${sum}`)
    }
    innerfun()
}
outerfun(5)




function outerfun(a){
    let b=10;
    function innerfun(){
        sum=a+b
        console.log(`sum of the two number ${sum}`)
    }
    innerfun()
}
outerfun(5)