const { log } = require('console')
const fs=require('fs')
// let txtIn=fs.readFileSync('./txt/input.txt','utf-8')
// console.log(txtIn);
// const txtOut=`this is what we know about avocado ${txtIn}. \nCreated on ${Date.now()} `

// //we will write the file with it synchornously
// fs.writeFileSync('./txt/input.txt',txtOut);
// console.log('file created');

//The callback function runs when the action is ready 
fs.readFile('./txt/start.txt','utf-8',(err,data)=>{
    console.log(data);
    if (err){throw new err}
})

















