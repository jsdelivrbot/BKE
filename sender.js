const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

//View Engine Setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static Folder
app.use("/public", express.static('public'));
app.use("/node_modules", express.static('node_modules'));
app.use("/js", express.static('js'));

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.render('home');
});

app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/pricing', (req, res) => {
    res.render('pricing');
});

app.get('/events', (req, res) => {
    res.render('events');
});

app.get('/bke_e01', (req, res) => {
    res.render('bke_e01');
});

app.get('/bke_e02', (req, res) => {
    res.render('bke_e02');
});

app.get('/bke_e03', (req, res) => {
    res.render('bke_e03');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/send', (req,res) => {
    const output = `
    <p>You have a new contact request!</p>
    <h3>Contact Details</h3>
    <ul>
        <li>First Name: ${req.body.FirstName}</li>
        <li>Last Name: ${req.body.LastName}</li>
        <li>Email: ${req.body.Email}</li>        
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'nickrhollenbeck@gmail.com', // generated ethereal user
            pass: 'vbfadmin2251'  // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Nodemailer Contact 👻" <nickrhollenbeck@gmail.com>', // sender address
        to: 'nick@justweb.design', // list of receivers
        subject: 'Node Contact Request', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);        
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));        
        res.render('contact', {msg: 'Email has been sent!'});
    });
});

app.listen(3001, () => console.log('Server started...'));