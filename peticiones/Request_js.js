const request = require('request')


// function getCharacter(id){
//     return new Promise((resolve,reject)=>{
//         request.get(`https://swapi.co/api/people/${id}`,(err,response,body)=>{
//             let json = JSON.parse(body)
//             if (response.statusCode == 200 ){
//                    resolve(json)
//             }else{
//                 reject('Error del personaje')
//             }
//         })
//     })
// }

// function getMovie(url){
//     return new Promise((resolve,reject)=>{
//         request.get(url,(err,response,body)=>{
//             let json = JSON.parse(body)
//             if (response.statusCode == 200 ){
//                    resolve(json)
//             }else{
//                 reject('Error de la pelicula')
//             }
//         })
//     })
// }


// getCharacter(9)
//     .then(character => {
//         console.log(character.name)
//         return getMovie(character.films[0])
//     })
//     .then(movie => console.log(movie.title) )
//     .catch(err => console.log(err))
