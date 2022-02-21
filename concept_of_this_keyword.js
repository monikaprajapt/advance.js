var obj={monika:12,mona:13,sonam:function(){
    console.log(this)
    console.log(this.monika+" "+this.mona)
}
}
let obj2={monika:100,mona:200,sonam:function(){
    console.log(this)
    console.log(obj.monika+" "+this.mona)
}
}
obj.sonam();
obj2.sonam();




