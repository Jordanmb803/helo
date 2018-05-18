require('dotenv').config()
const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , controller = require('./controller')

const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env

const app = express()
app.use(bodyParser.json())

massive(CONNECTION_STRING).then( db => {
    app.set('db', db)
})

app.post('/register', controller.register)
app.post('/login/:username/:password', controller.login)

app.listen(SERVER_PORT, () => console.log(`Port ${SERVER_PORT} is now listening`))