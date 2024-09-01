/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import {input} from '@inquirer/prompts';
import fs from 'fs';
import qr from 'qr-image'

//getting the input
const answer=await input({message:"Whats your URL"});
//making the qr
let qr_image=qr.image(answer,{type:'png'});
qr_image.pipe(fs.createWriteStream("your-entered-qr.png"));

//making the file 
fs.writeFileSync("Your-Entered-url.txt",answer,(err)=>{
    if (err) {
        console.log("Enter a valid URL")
    }else console.log("Successful ");
    
})












