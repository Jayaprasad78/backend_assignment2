const express = require('express');
const router = express.Router();
const Astrologer = require('../models/astrologer');
const User = require('../models/user');
const FlowDistribution = require('../services/flowDistribution');

const astrologers = [];
const flowDistribution = new FlowDistribution(astrologers);

// Endpoint to add an astrologer
router.post('/astrologers', (req, res) => {
  const { id, name, flowRate } = req.body;
  console.log(req.body)
  const astrologer = new Astrologer(id, name, flowRate);
  astrologers.push(astrologer);
  res.status(201).send(astrologer);
});

// Endpoint to distribute a user to an astrologer
router.post('/users', (req, res) => {
  const { id, name } = req.body;
  const user = new User(id, name);
  const astrologer = flowDistribution.distributeUser(user);
  res.status(200).send({ user, astrologer });
});

// Endpoint to set flow rate for a top astrologer
router.put('/astrologers/:id/flowRate', (req, res) => {
  const { id } = req.params;
  const { flowRate } = req.body;
  flowDistribution.setTopAstrologerFlowRate(parseInt(id), flowRate);
  res.status(200).send({ id, flowRate });
});

module.exports = router;
