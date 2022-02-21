// const arrValue = ['My', 'name', 'is', 'Jack'];

// // console.log(arrValue);   // ["My", "name", "is", "Jack"]
// console.log(...arrValue); 


// function sum(x, y ,z,u) {
//     console.log(x + y + z+u);
// }

// const num1 = [1, 3, 4, 5];

// sum(...num1)



// spread
// var a=[1,2,3]
// var b=[4,5,6]
// var c=[...a,...b]
// console.log(c)





// function sum(num1,num2){
//     console.log(num1+num2)    
// }
// sum(12,23,34,44,)


function sum(name,...arr){
    var sum=0;
    for(i in arr){
        sum=sum+arr[i]
    }
    console.log(sum)
    console.log(name)
}
sum("monika",12,23,44,55,66,77)