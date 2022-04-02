const router = require('express').Router()

router.get('/', (req, res) => {
  let places = [{
    name: 'My Burger Cafe',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/burger.jpg'
  }, {
    name: 'Italian Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/pizza.jpg'
  }]
  res.render('places/index', { places })
})

router.get('/new', (req,res) => {
  res.render('places/new')


})
module.exports = router