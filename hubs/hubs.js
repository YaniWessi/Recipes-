const express = require('express');
const shortid = require('shortid');
let hubs = []
const router = express.Router();

router.post("/", (req, res) => {
  const hubInfo = req.body;

  hubInfo.id = shortid.generate();
  hubs.push(hubInfo)

  res.status(201).json(hubInfo);
})

router.get("/", (req, res) => {
  res.status(200).json(hubs)
})

module.exports = router;