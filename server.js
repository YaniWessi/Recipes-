const express = require('express');

const morgan = require('morgan');

const helmet = require('helmet')


const hubsRouter = require('./hubs/hubs.js')

const lessonsRouter = require('./lessons/lessons.js')

const server = express();


// global middleware 
server.use(helmet()) // 3
server.use(morgan("dev")) // built-in middleware: no need to npm install 
server.use(logger)
server.use(express.json()) // third party, needs to be npm installed ---- this line is teaching expresss how to parse json. 



server.use('/hubs', hubsRouter)
server.use('/lessons',lessonsRouter)

server.use(addName)

server.get("/", (req,res) => {
  const nameInsert = (req.name) ? `${req.name}` : '';

  console.log('req.name is:', req.name)

  res.send(`
  <h2>Lambda Hubs API</h2>
  <p>Welcome: ${nameInsert},to the Lambda Hubs API</p>
  `)
})

server.use(function(req, res, next){
  res.status(404).json({message: "Opps, did not find what you're looking for"})
})

function logger(req, res, next) {
  const method = req.method;
  const endpoint = req.originalUrl;

  console.log(`${method} to ${endpoint}`)

  next();
}

function addName(req, res, next) {
   req.name = "web27";

   next();
}

module.exports = server;