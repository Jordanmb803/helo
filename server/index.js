const express = require('express')
    , bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.json())




const port = 3005
app.listen(port, () => console.log(`Port ${port} is now listening`))