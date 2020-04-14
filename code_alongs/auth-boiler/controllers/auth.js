// node modules/variables

let router = require('express').Router()

// Routes
router.get('/login', (req, res) => {
    res.render('auth/login')
})

// Post /auth/login - this is a place for the login form to post to
router.post('/login', (req, res) => {
    console.log('DATA', req.body)
    res.send('Hello from the post route!')
})

router.get('/signup', (req, res) => {
    res.send('auth/signup')
})

// export (allow me to include this another page)
module.exports = router