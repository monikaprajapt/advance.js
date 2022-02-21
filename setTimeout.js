// // function greet() {
// //     console.log('Hello world');
// // }

// // setTimeout(greet, 5000);
// // console.log('This message is shown first')




// // function greet() {
// //     console.log('Hello world');
// // }

// // let intervalId = setTimeout(greet, 3000);
// // console.log('Id: ' + intervalId);   


function showTime(){
    let dateTime= new Date();
    let time = dateTime.toLocaleTimeString();

    console.log(time)
     setTimeout(showTime, 3000);
}
showTime();


























