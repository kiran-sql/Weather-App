if(process.env.NODE_ENV !== 'production'){
 require('dotenv').config()
}

const WEATHER_API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY;
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/weather', async (req,res) => {
 const response = await fetch(`https://community-open-weather-map.p.rapidapi.com/find?q=mumbai%2CIndia&cnt=1&mode=null&lon=${req.body.longitude}&type=link%2C%20accurate&lat=${req.body.latitude}&units=imperial%2C%20metric`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": WEATHER_API_KEY
	}
})
const data = await response.json();
console.log(data);
console.log(req.body);
res.json(data);
});

app.listen(3000, () => {
 console.log("server started");
});