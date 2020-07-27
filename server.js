require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const cors = require("cors");
const nodemailer = require("nodemailer");



const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8080;

app.post("/signup", (req, res) => {
  const email = req.body.email;

  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed"
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  const key = process.env.API_KEY;
  const id = process.env.LIST_ID;


  //Used basic http authentication
  const options = {
    url: "https://us4.api.mailchimp.com/3.0/lists/" + id,
    method: "POST",
    headers: {
      Authorization: "Saad1 " + key
    },
    body: jsonData
  };

  request(options, (error, response, body) => {
    if (error) {
      console.log(error);
    } else {
      if (response.statusCode === 200) {
        console.log(response.statusCode);
        res.json("successfully subscribed!")
      } else {
        console.log(response.statusCode)
        res.json("something went wrong")
      }
    }
  });
});

app.post("/email", (req, res) => {
  const pass = process.env.PASS_KEY;
  const htmlEmail = `
    <h3>Contact Details</h3>
    <ul>
      <li>Email: ${req.body.email}</li>
      <li>Phone:${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>  
    `

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'studio786inquiry@gmail.com',
      pass: pass
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  let mailOptions = {
    from: "person@s786salon.com",
    to: 'studio786inquiry@gmail.com',
    replyTo: "",
    subject: "New Message",
    text: req.body.message,
    html: htmlEmail
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(err);
    }
    console.log("preview URL: %s",
      nodemailer.getTestMessageUrl(info));
    console.log("Message sent :%s", info.messageId)
    res.json("Message sent successfully")
  })
});


if (process.env.NODE_ENV === "production") {
  app.use(express.static("studio-frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "studio-frontend", "build", "index.html"))
  })
}


app.listen(PORT, () => {
  console.log(`Successfully running server on port ${PORT}`);
});
