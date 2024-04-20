request = require('request');
const host = '127.0.0.1';
const port = 7000;

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
        console.log(body);
    });
}
//Authorize('root','root');
Registrate('user1',	'123',	'mary',	'limonova',	21,	164.6,	45.5, 1 ,0)