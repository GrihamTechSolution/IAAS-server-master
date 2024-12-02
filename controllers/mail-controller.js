const nodemailer = require('nodemailer');

module.exports.sendMail = (req, res) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'firenetcontact@gmail.com',
          pass: 'kuebeecmkizhsmzf'
            // user: 'expro@iaasworld.org', 
            // pass: 'naapxmnuydrgbdyl' 
        }
      });
      
    const mailOptions = {
        from: 'expro@iaasworld.org',
        to: req.body.toEmail,
        // to: "president@iaasworld.org", 
        subject: "IAASWorld Contact form: " + req.body.subject,
        html: `<p>You have received a message from IAASWorld official website.</p>
                <p>Message came from: ${req.body.email}</p> 
                <p>Name: ${req.body.name}</p>
                <p>Phone: ${req.body.phoneNumber}</p>
                <p>Message: ${req.body.message}</p>`
    };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log('Send email ' + error + ' ' + mailOptions.to);
            res.send({
                status: -1, 
                error
            })
        } else {
            console.log('Send email success ' + mailOptions.to);
            res.send({
                status: 0
            })
        }
    });

}

module.exports.sendApplicationEmail = (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'firenetcontact@gmail.com',
          pass: 'kuebeecmkizhsmzf'
            // user: 'expro@iaasworld.org', 
            // pass: 'naapxmnuydrgbdyl' 
        }
      });

      const mailOptions = {
        from: 'firenetcontact@gmail.com',
        to: req.body.toEmail, 
        subject: "IAASWorld Student Application:",
        html: `<h1 style="color:#70ad47">Dear ExPro Team</h1>
                <p>
                A student has applied for an internship ${req.body.internshipName}, 
                check his/her application and start the process as soon as 
                possible. Don't waste this student's dream!
                Greetings from our team</p>
                <p>Greetings from our team</p>`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log('Send application email ' + error + ' ' + mailOptions.to);
            res.send({
                status: -1, 
                error
            })
        } else {
            console.log('Send application email success ' + mailOptions.to);
            res.send({
                status: 0
            })
        }
    });
}

module.exports.sendVotingNotificationEmail = (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          //user: 'firenetcontact@gmail.com',
          //pass: 'kuebeecmkizhsmzf'
          user: 'controlboard@iaasworld.org',
          pass: 'iqpzhmtxojupsgro'
            // user: 'expro@iaasworld.org', 
            // pass: 'naapxmnuydrgbdyl' 
        }
      });

      const mailOptions = {
        from: req.body.email,
        to: req.body.toEmail, 
        subject: req.body.subject,
        // html: `<h1 style="color:#70ad47">Voting notification</h1>
        //         <p>
        //         ${req.body.message}, 
        //         </p>`
        html: `${req.body.message}`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log('Send voting notification email ' + error + ' ' + mailOptions.to);
            res.send({
                status: -1, 
                error
            })
        } else {
            console.log('Send voting notification email success ' + mailOptions.to);
            res.send({
                status: 0
            })
        }
    });
}