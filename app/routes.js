// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// Nation routing - V1.1
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

// Tested routing - V1.2
router.post('/v1-2/test-results', function (req, res) {

  var install = req.session.data['tested']

  if (install == "Yes"){
    res.redirect('/v1-2/test-results')
  }
  else {
    res.redirect('/v1-2/check-answers')
  }

})

module.exports = router;
