import express from "express"
import bodyParser from "body-parser"
import {  dirname  } from "path"
import { fileURLToPath } from "url"
const __dirname=dirname(fileURLToPath(import.meta.url))


const app=express();
const PORT=3000;

app.use(bodyParser.urlencoded({extended:true}));//it will act on every request whose url is encoded

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"public/index.html");
})
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });


app.use(express.json())
