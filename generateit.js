

function *gener(){
      console.log("m")
      yield
      console.log("n")
      yield
}
let a=gener()
console.log(a.next())
console.log(a.next())