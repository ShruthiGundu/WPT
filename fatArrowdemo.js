  /*//function expression
  function greet(){   //named function
    console.log("Hello World <br>")
}

var greet1 = function(){
    console.log("Hello World <br>")
}

//lamda expression using fat arrow

var greet2 = () => console.log("Hello world")
greet2()

function greetUser(username){
    console.log("Hello " +  username + "<br>")
}

var greetUser2 = username => console.log("Hello " +  username)
greetUser2("Shruthi")

var greetUser1 = function(uname){
    console.log("Hello " +  uname + "<br>")
}

greetUser1("Praful")

function add(a, b){
    return a+b
}

var add1 = function(x, y){
return x + y
}
var add2 = (a,b) => a + b
console.log(add2(10,20))

var strOp = function(str){
    console.log("String Length", str.length)
    console.log("String first char", str.charAt(0))
    console.log("String in upper case", str.toUpperCase())
    
}

var strOp1 = str => { console.log("String Length", str.length)
console.log("String first char", str.charAt(0))
console.log("String in upper case", str.toUpperCase())
}

strOp1("Shruthi Gundu")
*/

setTimeout(()=>{
    console.log("Finished timeout")
},5000)
