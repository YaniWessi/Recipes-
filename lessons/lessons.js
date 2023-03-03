const express = require('express');
const shortid = require('shortid');

let lessons = []

const router = express.Router();

router.post("/", (req, res) => {
  const lessonsInfo = req.body;

  lessonsInfo.id = shortid.generate();
  lessons.push(lessonsInfo)

  res.status(201).json(lessonsInfo);
})

router.get("/", (req, res) => {
  res.status(200).json(lessons)
})

module.exports = router