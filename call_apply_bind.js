var jethalal={wife:"deya",age:50}
var bihede={wife:"madvi",age:50}
function poptlal(a,b){
    console.log(this.wife)
    console.log("a="+a,"b="+b)
}
poptlal.call(jethalal,"hello",12)
// poptlal.apply(jethalal,["hello",12]) only arry
fu=poptlal.bind(jethalal,"hello",12)
fu()