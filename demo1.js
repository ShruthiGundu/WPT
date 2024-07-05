/*var arr = [10,20,30,40,50]
var sum = 0
for(i of arr)
    sum += i


console.log("sum of values in array", sum)*/

/*
var str = "Hello World"

var d1 = new Date()
console.log(str.indexOf("H"))
console.log(d1)*/

/*function greetUser(username){
    console.log("Hello",username)
}
greetUser("Shruthi")*/

/*var n = 10
for(var i=0;i<n;i++){
    for(var j = 0;j < i; j++){
        console.log(i," ")
    }
    console.log()
}*/

//timer  objects
setTimeout(function(){
    console.log("Hello")
},5000)

setImmediate((arg) => {
    console.log("executing immediate : ${arg}")
})