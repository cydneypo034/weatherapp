const express = require("express"); //create the server and serve your API
const dotenv = require("dotenv"); //access hidden keys in the .env file
const bodyParser = require("body-parser"); //parse incoming request bodies in a middleware
const request = require("request"); //help make http calls
const app = express();
const cors = require("cors");

dotenv.config(); // add this to configure variables in .env file

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

//port 5000 to listen to
const port = process.env.PORT;
app.listen(port, (error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("Server running on port " + port)
    }
});