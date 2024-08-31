//write 2 texts 
const { log } = require("console");
const fs=require("fs");
fs.writeFileSync("message2.txt","Hello from Mush",(err)=>{
    if(err) throw err;
    console.log("File saved Successfully")
})
let myString=fs.readFileSync("message2.txt",{encoding:"utf-8"});
//if you do not use the call back then you would have to save the return type somewhere and work 
//over it 
fs.writeFileSync("message.txt",myString,(err)=>{
    if(err) log(err);
    else log("Succesfully wrote the file ")
})


