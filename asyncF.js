const { throws } = require('assert');
const { log, error } = require('console');
const fs=require('fs');
//we use async when steps that are dependent on the other
//steps that depend upon the result of the previous step.

// we have the file name in a file , and we need that name to open that file 
//I will get the file name first 
fs.readFile('./txt/start.txt','utf-8',(err,data)=>{ //we get the file name 
    if (err) console.log('something Just exploded')//doing error handling
    fs.readFile(`./txt/${data}.txt`,'utf-8',(err,data2)=>{//we read that file
        console.log(data2);
        fs.readFile('./txt/append.txt','utf-8',(err,data3)=>{//we have access to data 2 and data 3 at the same time 
            //writing the file 
            fs.writeFile('./txt/newFile.txt',`${data2} \n ${data3}`,'utf-8',(err)=>{
                if (err) throw error
                console.log(data3);
        console.log("Your file has been written");
        })
    })
    })
})

//the first parameter for the callbakc is always error , It works over the data 
    //and stores them on the second argument
