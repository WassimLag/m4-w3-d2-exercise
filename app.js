'use strict'

const express = require('express')
const app = express()
const helmet = require('helmet')

app.use(helmet())
app.get('/', (req, res) => {
    console.log('route \'/\' called')
    res.send({res: 'sending 200 as a response'})
})

app.listen(3000)
console.log('express is running on port 3000')