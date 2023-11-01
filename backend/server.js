const express = require("express");
const dotenv = require("dotenv");
const app = express();
const path = require("path");
const cors = require("cors");

dotenv.config(); // add this to configure variables in .env file

const apiKey = process.env.WEATHER_APP_API_KEY;
//const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}&units=imperial&lang=en`;

const port = process.env.PORT;
app.listen(port, (error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("Server running on port " + port)
    }
});
//app.listen(port, () => console.log(`Server running on ${port}`))