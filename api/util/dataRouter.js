const express = require('express');
const router = express.Router();

const Incidents = require('../incidents/incidentsModel');
const { dsFetch } = require('../dsService/dsUtil');

router.post('/createincidents', (req, res) => {
    req.body.forEach((incident) => {
      Incidents.createIncident(incident)
        .then((post) => {
          res.status(201).json(post);
        })
        .catch((err) => {
          res.status(500).json({ message: 'Error creating Record' });
        });
    });
  });
  
  router.post('/dailyupdate', async (req, res) => {
    try {
      const result = await dsFetch();
      res.status(201).json({ message: 'Operation Success', result: result })
    } catch (e) {
      res.status(500).json({ message: 'Operation Failed', error: e})
    }
  })

  module.exports = router;