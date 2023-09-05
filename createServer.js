const http=require('http');
const url=require('url');


////server '
const server=http.createServer((req,res)=>{
    const pathName=req.url ;
    if (pathName==='/overview') {
        res.end('<h1>Welcome to our Server </h1>');
    }else if(pathName==='/a'){
    res.end('<div><h1>Hello from the server</h1><button>Click me </button></div>');
    }else {
        res.end('Thats not a correct url');
    }
    console.log(req.url);   
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to requests on port 8000');
})






