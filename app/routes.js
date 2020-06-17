// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// Nation routing - V1
router.post('/v1/name', function (req, res) {

  var install = req.session.data['nation']

  if (install == "Scotland"){
    res.redirect('/v1/nation-redirect')
  }
  if (install == "Wales"){
    res.redirect('/v1/nation-redirect')
  }
  if (install == "Northern Ireland"){
    res.redirect('/v1/nation-redirect')
  }
  else {
    res.redirect('/v1/name')
  }

})

// Tested routing - V2
router.post('/v2/test-results', function (req, res) {

  var install = req.session.data['tested']

  if (install == "Yes"){
    res.redirect('/v2/test-results')
  }
  else {
    res.redirect('/v2/check-answers')
  }

})

module.exports = router;
