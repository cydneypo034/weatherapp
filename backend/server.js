const express = require("express");
const dotenv = require("dotenv");
const app = express();
const path = require("path");
const cors = require("cors");

dotenv.config(); // add this to configure variables in .env file

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

//Routes
// Get weather data based on city name from OpenWeatherApi
app.get('/search-location', (res, req) => {
    // Get weather data from external API
    // Process and send client data
    const apiKey = process.env.WEATHER_APP_API_KEY;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=${apiKey}&units=imperial&lang=en`;
    
})

// When info appears, we then want to save the data to a DB 
app.post('/search-location', (res, req) => {
      // Save weather data to database
})

//port 5000 to listen to
const port = process.env.PORT;
app.listen(port, (error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("Server running on port " + port)
    }
});