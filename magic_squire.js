//  


magic_squire=[
    [8,3,4],
    [1,5,9],
    [6,7,2]
]
var i=0
while(i<magic_squire.length){
   var k=0
   sum=0
   while(k<magic_squire.length){
       sum=sum+magic_squire[k][i]
       k++
   }
   i++
   console.log(sum)
}
var j=0
while(j<magic_squire.length){
    var s=0
    sum1=0
    while(s<magic_squire.length){
        sum1=sum1+magic_squire[j][s]
        s++
    }
    j++
    console.log(sum1)
}
var n=0
sum2=0
while(n<magic_squire.length){
    sum2=sum2+magic_squire[n][n]
    n++
}
console.log(sum2)
var p=0
sum3=0
while(p<magic_squire.length){
    c=(magic_squire.length-1)-p
    while(c<magic_squire.length-p){
        sum3=sum3+magic_squire[p][c]
        c++
    }
    p++
}
console.log(sum3)
// if(i==15 && k==15&& s==15&& j==15 &&n==15 && p==15 &&c==15 ){





















// var i=0
// while (i<magic_squire.length){
//     var j=0
//     var sum=0
//     while(j<magic_squire.length){
//         sum=sum+magic_squire[i][j]
//         j++
//     }
//     i++
// }
// console.log(sum)
// var r=0
// while(r<magic_squire.length){
//     var k=0
//     var sum1=0
//     while(k<magic_squire.length){
//         sum1=sum1+magic_squire[r][k]
//         k++
//     }
//     r++
// }
// console.log(sum1)
