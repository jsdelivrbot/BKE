const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 5000;

const app = express();

app.set('port', (PORT));

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

app.get('/bke_e04', (req, res) => {
    res.render('bke_e04');
});

app.get('/bke_e05', (req, res) => {
    res.render('bke_e05');
});

app.get('/parties', (req, res) => {
    res.render('parties');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});


app.post('/JrPackage', (req, res) => {
    console.log(req);
    const output = `
    <p>You have a new party request!</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Party Type: ${req.body.PackageType}</li>
        <li>Full Name: ${req.body.FullName}</li>
        <li>Email: ${req.body.Email}</li>
        <li>Phone: ${req.body.Phone}</li>  
        <li>Date & Time: ${req.body.DateTime}</li>  
        <li>Child's Name: ${req.body.ChildName}</li>        
        <li>Number of Kids: ${req.body.NumberOfKids}</li>  
        <li>Pizza Type: ${req.body.Pizza}</li>  
        <li>Shirt Size: ${req.body.ShirtSize}</li>  
    </ul>
    `;

    var api_key = 'key-5fa47c8dc8ba51f3151371d4a4ed670b';
    var domain = 'sandbox84d129036ae14795bbf72dada597e65e.mailgun.org';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
    
    var data = {
    from: 'BKE Party Reservation <postmaster@sandbox84d129036ae14795bbf72dada597e65e.mailgun.org>',
    to: 'nick@justweb.design',
    subject: 'Jr Kart A Package Party Reservation',
    text: 'Hello',
    html: output
    };
    
    mailgun.messages().send(data, function (error, body) {
    console.log(data);
    console.log(body);
    if(!error){
        res.render('parties', {msg: 'Email has been sent!'});
    } else{
        res.render('parties', {msg: 'There was an issue sending this message please try again later.'});
    }
    });
});

app.post('/AdultPackage', (req, res) => {
    const output = `
    <p>You have a new party request!</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Party Type: ${req.body.PackageType}</li>
        <li>Full Name: ${req.body.FullName}</li>
        <li>Email: ${req.body.Email}</li>
        <li>Phone: ${req.body.Phone}</li>  
        <li>Date & Time: ${req.body.DateTime}</li>  
        <li>Child's Name: ${req.body.ChildName}</li>        
        <li>Number of Kids: ${req.body.NumberOfKids}</li>  
        <li>Pizza Type: ${req.body.Pizza}</li>  
        <li>Shirt Size: ${req.body.ShirtSize}</li>  
    </ul>
    `;

    var api_key = 'key-5fa47c8dc8ba51f3151371d4a4ed670b';
    var domain = 'sandbox84d129036ae14795bbf72dada597e65e.mailgun.org';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
    
    var data = {
    from: 'BKE Party Reservation <postmaster@sandbox84d129036ae14795bbf72dada597e65e.mailgun.org>',
    to: 'nick@justweb.design',
    subject: 'Adult A Package Party Reservation',
    text: 'Hello',
    html: output
    };
    
    mailgun.messages().send(data, function (error, body) {
    console.log(data);
    console.log(body);
    if(!error){
        res.render('parties', {msg: 'Email has been sent!'});
    } else{
        res.render('parties', {msg: 'There was an issue sending this message please try again later.'});
    }
    });
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
    <h3>Message:</h3>
    <p>${req.body.Message}</p>
    `;

    var api_key = 'key-5fa47c8dc8ba51f3151371d4a4ed670b';
    var domain = 'sandbox84d129036ae14795bbf72dada597e65e.mailgun.org';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
    
    var data = {
    from: 'BKE Contact Inquiry <postmaster@sandbox84d129036ae14795bbf72dada597e65e.mailgun.org>',
    to: 'nick@justweb.design',
    subject: 'Hello From Mailgun App',
    text: 'Hello',
    html: output
    };
    
    mailgun.messages().send(data, function (error, body) {
    console.log(data);
    console.log(body);
    if(!error){
        res.render('contact', {msg: 'Email has been sent!'});
    } else{
        res.render('contact', {msg: 'There was an issue sending this message please try again later.'});
    }
    });
});

app.listen(PORT, () => console.log('Server started on PORT' + PORT));