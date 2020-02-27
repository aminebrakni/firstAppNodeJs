var nodemailer  = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'amine.brakni@gmail.com',
        pass: 'Onepiece12251992'
        }
});

var mailOptions = {
    from: 'amine.brakni@gmail.com',
    to: 'trunks_night@msn.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});