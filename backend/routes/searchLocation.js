//Routes
// Get weather data based on city name from OpenWeatherApi
// Process and send client data
app.get('/', (req, res) => {
    // res.send('PORT 5000');
    // const apiKey = process.env.WEATHER_APP_API_KEY;
    // const cityname = process.env.CITY_NAME;
    // const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=${apiKey}&units=imperial&lang=en`;

    // res.send(url)

})

// When info appears, we then want to save the data to a DB 
app.post('/', (res, req) => {
      // Save weather data to database
})