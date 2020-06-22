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

/* Over 18 routing - V1.2
router.post('/v1-2/name', function (req, res) {

  var install = req.session.data['18orover']

  if (install == "No"){
    res.redirect('/v1-2/under18')
  }
  else {
    res.redirect('/v1-2/name')
  }

})
*/

// Over 18 routing from DOB - V1.2
router.post('/v1-2/name', function (req, res) {

  var install = req.session.data['dob-year']

  if (install > "2002"){
    res.redirect('/v1-2/under18')
  }
  else {
    res.redirect('/v1-2/name')
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
  if (install == "None of these"){
    res.redirect('/v1-2/outside-uk')
  }
  else {
    res.redirect('/v1-2/postcode')
  }

})

// Permission routing - V1.2
router.post('/v1-2/hear-from-nhsd', function (req, res) {

  var install = req.session.data['give-permission']

  if (install == "I do not give my permission"){
    res.redirect('/v1-2/no-permission')
  }
  else {
    res.redirect('/v1-2/hear-from-nhsd')
  }

})


// Over 18 routing from DOB - V2
router.post('/v2/are-you-pregnant', function (req, res) {

  var install = req.session.data['dob-year']

  if (install > "2002"){
    res.redirect('/v2/under18')
  }
  else {
    res.redirect('/v2/are-you-pregnant')
  }

})

// Pregnant routing - V2
router.post('/v2/name', function (req, res) {

  var install = req.session.data['areyoupregnant']

  if (install == "Yes"){
    res.redirect('/v2/pregnant')
  }
  else {
    res.redirect('/v2/name')
  }

})

// Tested routing - V2
router.post('/v2/test-results', function (req, res) {

  var install = req.session.data['tested']

  if (install == "Yes"){
    res.redirect('/v2/test-results')
  }
  else {
    res.redirect('/v2/cancer')
  }

})

// Northern Ireland routing - V2
router.post('/v2/postcode', function (req, res) {

  var install = req.session.data['country']

  if (install == "Northern Ireland"){
    res.redirect('/v2/NI-postcode')
  }
  if (install == "None of these"){
    res.redirect('/v2/outside-uk')
  }
  else {
    res.redirect('/v2/postcode')
  }

})

// Permission routing - V2
router.post('/v2/hear-from-nhsd', function (req, res) {

  var install = req.session.data['give-permission']

  if (install == "No, I do not agree to give my permission"){
    res.redirect('/v2/no-permission')
  }
  else {
    res.redirect('/v2/hear-from-nhsd')
  }

})

// Ethnicity question routing - V2
router.post('/v2/email', function (req, res) {

  var install = req.session.data['ethnic-group']

  if (install == "White"){
    res.redirect('/v2/ethnic-group-white')
  }
  if (install == "Mixed or multiple ethnic groups"){
    res.redirect('/v2/ethnic-group-mixed')
  }
  if (install == "Asian or Asian British"){
    res.redirect('/v2/ethnic-group-asian')
  }
  if (install == "Black, African, Black British or Caribbean"){
    res.redirect('/v2/ethnic-group-black')
  }
  if (install == "Another ethnic group"){
    res.redirect('/v2/ethnic-group-other')
  }
  else {
    res.redirect('/v2/email')
  }

})

// Opt out confirm email - v1
router.post('/opt-out-v1/opt-out-confirm', function (req, res) {

  var install = req.session.data['opt-out-confirm-email']

  if (install == "No, that is not my email address"){
    res.redirect('/opt-out-v1/opt-out')
  }
  else {
    res.redirect('/opt-out-v1/opt-out-confirm')
  }

})

module.exports = router;
