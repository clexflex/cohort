const fs= require("fs");
console.log("Before writing data");
fs.readFile("text.txt","utf-8", (err,data)=>{ console.log(data)});
console.log("AFter writing data");
fs.writeFile("text.txt", "Adding through fs write function..", (err,data)=>{
    if(err){
        console.log("Error writing File..",err);
    }
    console.log("\ndata written Successfully...");
    
});
fs.readFile("text.txt","utf-8", (err,data)=>{ console.log(data)});