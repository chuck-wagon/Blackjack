// node modules/variables

let router = require('express').Router()

// Routes
router.get('/login', (req, res) => {
    res.render('auth/login')
})

router.get('/signup', (req, res) => {
    res.send('STUB - sign up form')
})

// export (allow me to include this another page)
module.exports = router