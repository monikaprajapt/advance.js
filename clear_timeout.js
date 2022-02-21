let count = 0;

// function creation
function Count(){

    // increasing the count by 1
    count += 1;
    console.log(count)
}

let id = setTimeout(Count, 3000);

// clearTimeout
// clearTimeout(id); 
console.log('setTimeout is stopped.');