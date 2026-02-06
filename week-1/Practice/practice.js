const fs = require("fs");

console.log("hello")
const data = fs.readFileSync("./practice.txt","utf-8"); // blocking 
console.log(data);

fs.readFile("./practice.txt","utf-8",(err,res)=>{
    console.log(res);
}) // Non-Blocking
console.log("helo2")
