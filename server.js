//creating a web server
var http = require("http")


/*function process_request(){
    console.log("request has been recieved from browser")
}*/
var d1 = new Date()
function process_request(req, resp){
    var str = "<html><body bgcolor = 'lightblue'>"
    str += "<h1>Hello,welcome to node</h1>"
    str += "Today is " + d1
    str += "</body></html>"
    var len = str.length

    resp.writeHead(200, {
        'content-Length' : len,
        'content-Type' :'text/html'
    })
    resp.write(str)
    resp.end()
}


var server = http.createServer(process_request)
server.listen(3000,'127.0.0.1')
console.log("Server is listining on http://localhost:3000")