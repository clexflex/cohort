const fs= require("fs");

fs.readFile("text.txt", "utf-8", (err, data)=>{
    if(err){
        console.log("Error reading this file..", err);
        return;

    }
    console.log(data);
});