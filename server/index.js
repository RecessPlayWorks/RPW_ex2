const express = require('express')
const bodyParser = require('body-parser');
const exHBars = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');




const app = express();

// view engine setup
// app.engine('handlebars', exHBars());
// app.set('view engine', 'handlebars');

// STATIC FOLDER
app.use('/dist', express.static(path.join(__dirname, 'dist')))

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



/* route */
app.get('/', (req, res) => {
    console.log('res: ', res.status)
    // res.status
})

app.use(express.static('dist'))

app.listen(3000, () => console.log('Listening on port 3000!'))