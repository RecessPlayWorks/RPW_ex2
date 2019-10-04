const express = require('express')
const bodyParser = require('body-parser');
// const exHBars = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

// STATIC FOLDER
app.use('/dist', express.static(path.join(__dirname, 'dist')))

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



/* route */
// app.get('/', (req, res) => {
    // console.log('res from index.js: n/', res.status)
    // res.status
// })
// app.post('/send', (req, res) =>{
//    console.log("body: ", req.body);
// })

app.use(express.static('dist'))

app.listen(3000, () => console.log('Listening on port 3000!'))