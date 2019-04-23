// Require needed modules
let express = require('express')
let request =  require('request')

//Declare an express router
let router = express.Router()

// Reference the models
let db = require('../models')

//GET/edit/:id
router.get('/edit/:id', (res, req) => {

  res.render('profile/edit')
})

//GET /profile
router.get('/', (req, res) => {
  res.send('PROFILE STUB CREATED')
})

// GET /results
router.get('/results', function(req, res) {
      res.render('results')
})
// DELETE /remove/faves
router.delete('/remove', (req, res) => {
  res.destroy({ where: { id: req.body.id}})
  .then(deletedRecipe => {
    res.redirect('/results/faves')
  })
  .catch(err => {
    console.log(err)
    res.render('404')
  })
})

module.exports = router