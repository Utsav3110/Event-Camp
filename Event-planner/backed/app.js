const express = require('express');
const app = express();


app.listen(3000, ()=>{
    console.log("server is listening on port 3000");
}
);

app.get('/', function(req ,res){
    res.sendFile('C:\\Event-planner\\index.html');
});


app.get('/about', function(req ,res){ 
    res.sendFile('about us\\learnmore.html',{root:__dirname});
});


app.get('/gallery', function(req ,res){ 
    res.sendFile('views\\learnmore.html',{root:__dirname});
});



app.get('/Login.html', function(req ,res){ 
    res.sendFile('Registraation\\Login\\Login.html',{root:__dirname});
});


app.get('/Signup.html', function(req ,res){ 
    res.sendFile('../Registraation/Signin/signin.html',{root:__dirname});
});



function getSignup(req,res){
    res.sendFile('../Registaration/Signin/signin.html',{root:__dirname});
}


function postSignup(req,res){

    console.log('backend', obj)

    let obj = req.body;
 
    res.josn ({
        message : "user signed up",
        data: obj
    });

}