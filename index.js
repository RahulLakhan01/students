const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/api/users/get', db.getUsers)
app.get('/api/users/get/:id', db.getUserById)
app.post('/api/users/create', db.createUser)
app.put('/api/users/update/:id', db.updateUser)
app.delete('/api/users/delete/:id', db.deleteUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});