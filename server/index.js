const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')

// Express
const app = express()
const router = require('./router')

// Database
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:auth/auth', { useNewUrlParser: true })

// Boilerplate
app.use(morgan('combined')) // Logging middleware
app.use(bodyParser.json({ type: '*/*' })) // Parse incoming requests to json
router(app)

//Server
const port = process.env.PORT || 3000
const server = http.createServer(app)

server.listen(port, () => {
  console.log(`Server running on ${port}`)
})