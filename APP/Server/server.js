const cookieParser = require('cookie-parser');

request = require('request');
expressSession = require('express-session');
express = require('express');

const host = '127.0.0.1';
const port = 7000;
var app = express();


let secretCode = 'fridge';
app.use(cookieParser(secretCode));
app.use(expressSession({
    secret: secretCode,
    resave: true,
    saveUninitialized: true
}));

app.get("/registration",(req,res) =>{
    res.json({"users":[""]})
})

app.listen(port,()=>{console.log("server started on post $port")})

function Authorize(log,pas){
    const options = {
        url: 'http://localhost:8080/users/getin',
        json: true,
        body: {
            login: log,
            password: pas
        }
    };
    
    request.get(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(body);
    });
}



function Registrate(Login, Password, Name, Surname, Age, Height, Weight, Activity_level, Sex ){
    const options = {
        url: 'http://localhost:8080/users/add',
        json: true,
        body: {
            login: Login,
            password: Password,
            name: Name,
            surname: Surname,
            age: Age,
            height: Height,
            weight: Weight,
            activity_level: Activity_level,
            sex: Sex
        }
    };
    
    request.post(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        
        req.session.UserLogin = Login;
        console.log(body);
        let test = req.session.UserLogin;
        console.log(test);
    });
    
}




//document.getElementById("b").onclick = function(){
 //   Authorize('user12',	'123');
 // }

//Registrate('user12',	'123',	'mary',	'limonova',	21,	164.6,	45.5, 1 ,0)

//Authorize('user12',	'1234');
//Authorize('user21',	'1234');