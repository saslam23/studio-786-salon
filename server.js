require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const cors = require("cors");
const sendMail = require("./mail");
const path = require("path");



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

  const key = process.env.API_KEYY;
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

  const email = req.body.email;
  const subject = req.body.subject;
  const text = req.body.message;

  sendMail(email, subject, text, function (err, data) {
    if (err) {
      res.status(500).json("Internal Error")
    } else {
      res.json("Email has been sent!")
    }
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
