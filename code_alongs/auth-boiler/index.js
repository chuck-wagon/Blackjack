//******************* */
// node modules
//******************* */

// Require needed modules
let express = require('express')
let layouts = require('express-ejs-layouts')

// Create an app instance
let app = express()

/************
 * SETTINGS / MIDDLEWARE
 * ********************/
// Set template language to EJS
app.set('view engine', 'ejs')

// Tell express to use the layouts module
app.use(layouts)

// set up the static folder with 
app.use(express.static("static"))

// Decrypt the variables coming in via POST routes (from forms)
app.use(express.urlencoded({ extended: false }))


// ROUTES*******************
// create a homepage route
//controllers
app.use('/auth', require('./controllers/auth'))

app.get('/', (req, res) => {
    res.render('home')
})

// Create a wildcard (catch-all) make this last
app.get('*', (req, res) => {
    res.render('error')
})

// Listen

// pick a por to listen on
app.listen(3000)