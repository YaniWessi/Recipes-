const express = require('express');
const shortid = require('shortid');

const server = express();

let hubs = []

let lessons = []

server.use(express.json())

server.get("/", (req,res) => {
    res.status(200).json({api:"running..."})
})

server.get("/hello", (req,res) => {
    res.status(200).json({hello: "web 27"})
})

server.post("/api/hubs", (req, res) => {
    const hubInfo = req.body;

    hubInfo.id = shortid.generate();
    hubs.push(hubInfo)

    res.status(201).json(hubInfo);
})

server.post("/api/lessons", (req,res) => {
    const lesson = req.body;

    lesson.id = shortid.generate();

    lessons.push(lesson)

    res.status(201).json(lesson);
})

const PORT = 5000;
server.listen(PORT, () => console.log(`\n ** API on http://localhost:${PORT} **\n`));