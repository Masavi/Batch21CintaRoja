const request = require('request')
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/'

function createAuthor(nombre,apellidos,nacionalidad,biografia,genero,edad){
    const URI = 'authors/'
    var urlFinal = URL_BASE + URI
    var jsonSend = {
        "name":nombre,
        "last_name":apellidos,
        "nacionalidad":nacionalidad,
        "biography":biografia,
        "gender":genero,
        "age":edad
    }
    return new Promise((resolve,reject)=>{
        request.post({url:urlFinal,form:jsonSend},(err,response,body)=>{
            let json = JSON.parse(body)
            response.statusCode == 201
            ? resolve(json)
            : reject('Error')
        })
    })
}

createAuthor('Raul','Amador','MX','Un vato','M',24)
    .then(author => console.log(author))
    .catch(err => console.log(err))
