async function greet(){     //turns into a promise
    return "hello user"
}

let greet1 = async function(){
    return "hello user"
}

let greet2 = async () => {return "hello user"}

greet().then( //consume promise
    val => console.log("Promise returns", val)
)