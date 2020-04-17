
// Routing API Using Node.js Express

const express = require("express");
const https = require ("https");
const bodyParser =require("body-parser");
const fetch = require ("node-fetch");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

      // Route to get the live Covid-19 data
    app.get("/api", async function(req, res){
      // const url = "https://api.covid19api.com/summary";
      // const fetch_response = await fetch(url);
      const url = `https://api.covid19api.com/summary`
      const response = await fetch(url);
      const result = await response.json();
      const country = result.Countries;
      //  console.log("successfully sent data");
       res.json(country);

    });

//listen to loscalhost at port 3000;    process.env.PORT ||
app.listen( process.env.PORT || 3000, function(){
  console.log("Server is running on localhost 3000");
})
