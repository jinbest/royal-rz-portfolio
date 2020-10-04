const express = require('express');
const path = require('path');
const port = process.env.PORT || 8001;
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jb2685207@gmail.com',
    pass: 'm7H44*55'
  }
});

app.post("/api/send_email", function(req, res) {
  let data = req.body;
  console.log("data", data);
  res.set("Content-Type", "application/json");
  res.send(`{"message" : "Thank you for your message"`);
  res.end("ok");  
  
  const mailOptions = {
    from: "From Royal's Webite <jb2685207@gmail.com>",
    to: 'jin.bestvictoria718@gmail.com',
    subject: data.subject,
    text: JSON.stringify(data)
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
app.listen(port, () =>
  console.log(`This project is listening on port ${port}!`)
);