const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places ctm')
})

module.exports = router