const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Gracias por visitarme cuate'));

app.get('/authors/', (req, res) => res.send('Accediste a la lista de autores'));

let json = {
  "name": "la chona",
  "edad": 20
}
app.post('/lachona/', (req, res) => res.send("hiciste un post"));
app.get('/lachona/', (req, res) => res.send(statusCode));


app.listen(3000, () => console.log('Example app listening on port 3000!'))
