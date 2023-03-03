const express = require('express');


const hubsRouter = require('./hubs/hubs.js')

const lessonsRouter = require('./lessons/lessons.js')

const server = express();



server.use(express.json())

server.use('/hubs', hubsRouter)
server.use('/lessons',lessonsRouter)

server.get("/", (req,res) => {
  const nameInsert = (req.name) ? `${req.name}` : '';

  console.log('req.name is:', req.name)

  res.send(`
  <h2>Lambda Hubs API</h2>
  <p>Welcome: ${nameInsert},to the Lambda Hubs API</p>
  `)
})

module.exports = server;