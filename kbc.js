question_list = ["1).how many continents are there?",              

                "2).What is the capital of India?",          

                "3).NG mei kaun se course padhaya jaata hai?"

]
options_list = [
    ["1.Four", "2.Nine", "3.Seven", "4.Eight"],
    ["1.Chandigarh", "2.Bhopal", "3.Chennai", "4.Delhi"],
    ["1.Software Engineering", "2.Counseling", "3.Tourism", "4.Agriculture"]
]
solution=[3,4,1]
answer_list=[
    ["(1)foue","(3)seven"],
    ["(4)delhi","(2)bhupal"],
    ["(4)agriculture","(1)software engineering"]     
]
console.log("welcome to kon banega crocrepati")
var i=0
var s=0
var count=0
while(i<question_list.length){
    console.log(question_list[i])
    var a=0
    var b=i
    while(a<options_list[i].length){
        k=options_list[b][a]
        console.log(a+1,k)
        a=a+1

    }
    var a=require("readline-sync")
    var num=a.question("do you want lifeline")
    if(num=="yes"){
        console.log("5050 life line")
        if(count<1){
            console.log(answer_list[b])
            var b=require("readline-sync")
            var num2=b.questionInt("enter the answer")
            if(num2==solution[i]){
                s=s+10000
                console.log("right your answer")
                console.log("you win rs/",s)
            }
            else{
                console.log("your answer is rong")
                console.log("you can piay again")
                console.log("you win rs/",s)
                break
            }
            count++                
        
        }
        else{
            console.log("you already use lifeline")
            m=a.questionInt("anter your answer")
            if(m==solution[i]){
                console.log("congres right answer")
                s=s+10000
                console.log("you win rs/",s)

            }
            else{
                console.log("no chance")
                console.log("your answer is worng")
                console.log("you win rs/",s)
                break

            }

        }
    }
    else{
        k=a.questionInt("enter you won answer")
        if (k==solution[i]){
          console.log("congres right answer")
          s=s+10000
          console.log("you are win rs/",s)
        }
        else{
            console.log("no chance")
            console.log("your answer is worng")
            console.log("you are win rs/",s)
            break  
        }

    }
    i++

}
console.log("congrescutionl you are big part kon banega crorrpati")
console.log("you are win rs/",s)
console.log("thank you are part of this aap jit gye")

