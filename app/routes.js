// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// Country routing - V1.1
router.post('/v1-1/postcode', function (req, res) {

  var install = req.session.data['country']

  if (install == "Scotland"){
    res.redirect('/v1-1/nation-redirect')
  }
  if (install == "Wales"){
    res.redirect('/v1-1/nation-redirect')
  }
  if (install == "Northern Ireland"){
    res.redirect('/v1-1/nation-redirect')
  }
  else {
    res.redirect('/v1-1/postcode')
  }

})

// Tested routing - V1.1
router.post('/v1-1/test-results', function (req, res) {

  var install = req.session.data['tested']

  if (install == "Yes"){
    res.redirect('/v1-1/test-results')
  }
  else {
    res.redirect('/v1-1/check-answers')
  }

})

// Over 18 routing - V1.1
router.post('/v1-1/country', function (req, res) {

  var install = req.session.data['18orover']

  if (install == "Yes"){
    res.redirect('/v1-1/country')
  }
  else {
    res.redirect('/v1-1/under18')
  }

})

// Over 18 routing - V1.2
router.post('/v1-2/name', function (req, res) {

  var install = req.session.data['18orover']

  if (install == "Yes"){
    res.redirect('/v1-2/name')
  }
  else {
    res.redirect('/v1-2/under18')
  }

})

// Tested routing - V1.2
router.post('/v1-2/test-results', function (req, res) {

  var install = req.session.data['tested']

  if (install == "Yes"){
    res.redirect('/v1-2/test-results')
  }
  else {
    res.redirect('/v1-2/permission')
  }

})

// Northern Ireland routing - V1.2
router.post('/v1-2/postcode', function (req, res) {

  var install = req.session.data['country']

  if (install == "Northern Ireland"){
    res.redirect('/v1-2/NI-postcode')
  }
  else {
    res.redirect('/v1-2/postcode')
  }

})

module.exports = router;
