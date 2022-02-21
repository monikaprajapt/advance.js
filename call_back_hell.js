//   


function getrollno(){
    setTimeout(()=>{
        console.log("api getting roll no")
        let roll_no=[1,2,3,4,5]
        console.log(roll_no)
        setTimeout(()=>{
            const biodata={name:"monika",age:12}
            console.log(`my name is ${biodata.name} and i  am ${biodata.age} years old`)
            setTimeout(()=>{
                biodata.gender="male"
                console.log((`my roll no is ${rollno} my name is ${biodata} and i am ${biodata.age}years old`))

            },2000,biodata.name)

        },2000,)

    },2000)
}
getrollno();