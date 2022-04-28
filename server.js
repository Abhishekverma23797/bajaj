// import express
const express = require('express')

// create an express application
const app = express()
app.use(express.json())
// routes
app.get('/', (request, response) => {
  response.send('<h1>Welcome to the Application Backend</h1>')
})

// import router modules
const routerUser = require('./routes/user')


// add the routes
app.use('/user', routerUser)


// start the express application to listen on port 4000
app.listen(4000, '0.0.0.0', () => {
  console.log('server has started successfully on port 4000')
})
