if(process.env.NODE_ENV !== 'production'){
 require('dotenv').config()
}


const WEATHER_API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY;
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.post('/weather', (req,res) => {

})

app.listen(3000, () => {
 console.log("server started");
});