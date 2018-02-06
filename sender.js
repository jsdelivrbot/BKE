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

app.get('/parties', (req, res) => {
    res.render('parties');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});


app.post('/JrAPackage', (req, res) => {
    const output = `
    <p>You have a new party request!</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Party Type: Jr. Kart Party Package A</li>
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
        from: '"BKE Website" <nickrhollenbeck@gmail.com>', // sender address
        to: 'nick@justweb.design', // list of receivers
        subject: 'Jr. Kart Party Submission | Package A 👍', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
            res.render('parties', {msg: 'There was an error sending the message. Please try again another time.'});
        }
        console.log('Message sent: %s', info.messageId);        
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));        
        res.render('parties', {msg: 'Email has been sent!'});
    });
});

app.post('/JrBPackage', (req, res) => {
    const output = `
    <p>You have a new party request!</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Party Type: Jr. Kart Party Package B</li>
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
        from: '"BKE Website" <nickrhollenbeck@gmail.com>', // sender address
        to: 'nick@justweb.design', // list of receivers
        subject: 'Jr. Kart Party Submission | Package B 👍', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
            res.render('parties', {msg: 'There was an error sending the message. Please try again another time.'});
        }
        console.log('Message sent: %s', info.messageId);        
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));        
        res.render('parties', {msg: 'Email has been sent!'});
    });
});

app.post('/AdultAPackage', (req, res) => {
    const output = `
    <p>You have a new party request!</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Party Type: Adult Kart Party Package A</li>
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
        from: '"BKE Website" <nickrhollenbeck@gmail.com>', // sender address
        to: 'nick@justweb.design', // list of receivers
        subject: 'Adult Kart Party Submission | Package A 👍', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
            res.render('parties', {msg: 'There was an error sending the message. Please try again another time.'});
        }
        console.log('Message sent: %s', info.messageId);        
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));        
        res.render('parties', {msg: 'Email has been sent!'});
    });
});

app.post('/AdultBPackage', (req, res) => {
    const output = `
    <p>You have a new party request!</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Party Type: Adult Kart Party Package B</li>
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
        from: '"BKE Website" <nickrhollenbeck@gmail.com>', // sender address
        to: 'nick@justweb.design', // list of receivers
        subject: 'Adult Kart Party Submission | Package B 👍', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
            res.render('parties', {msg: 'There was an error sending the message. Please try again another time.'});
        }
        console.log('Message sent: %s', info.messageId);        
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));        
        res.render('parties', {msg: 'Email has been sent!'});
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

app.listen(PORT, () => console.log('Server started on PORT' + PORT));