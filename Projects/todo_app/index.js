var express =require('express');
var app = express();
app.set('vie engine', 'ejs');
app.use(express.static("public"));

//to display the index.ejs file


var bodyParser =require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
var task = [];
app
var complete = [];

//post route for adding new task
app.post('/addtask', function(req, res){
    var newTask = req.body.newtask;
    task.push(newTask);
    res.redirect("/");
});

//post route for removing task
app.post('/removetask', function(req, res){
    var completeTask = req.body.check;
    if(typeof completeTask === "string"){
        complete.push(completeTask);
        task.splice(task.indexOf(completeTask), 1);
    } else if (typeof completeTask === "object"){
        for(var i = 0; i < completeTask.length; i++){
            complete.push(completeTask[i]);
            task.splice(task.indexOf(completeTask[i]), 1);
        }
    }
    res.redirect("/");
})

app.get("/", function(req, res) {    
  res.render("index.ejs", { task: task, complete: complete });
});

app.listen(3000, function(){
    console.log('Server is running on port 3000...');
});

