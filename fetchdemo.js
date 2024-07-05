fetch("http://jsonplaceholder.typicode.com/tados")
.then(resp => resp.json())
.then(data => console.log(data))
.catch(arr => console.log(err))
