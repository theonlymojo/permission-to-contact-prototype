// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// Nation routing - V1
router.post('/v1/name', function (req, res) {

  var install = req.session.data['nation']

  if (install == "Scotland"){
    res.redirect('/nation-redirect')
  }
  if (install == "Wales"){
    res.redirect('/nation-redirect')
  }
  if (install == "Northern Ireland"){
    res.redirect('/nation-redirect')
  }
  else {
    res.redirect('/v1/name')
  }

})

module.exports = router;
