const nodemailer = require('nodemailer');

module.exports.sendEmail = (
    reciever,
    subject, 
    body
) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_SUPPORT,
            pass: process.env.EMAIL_SUPPORT_PASSWORD
        }
      });
      
    const mailOptions = {
        from: process.env.EMAIL_SUPPORT,
        to: reciever,
        subject: subject,
        html: body,
        text: body
    };
      
    return new Promise(function(resolve, reject) {
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error)
                reject(error)
            }
            console.log(info)
            resolve(info)
        });
    })  
}