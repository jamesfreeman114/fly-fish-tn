export const getWeatherForecast = () => {
    return fetch(`https://api.weather.gov/gridpoints/TOP/31,80/forecast`)
}

export const getDetailedForecast = async () => 
 {
    const response = await fetch('https://api.weather.gov/gridpoints/TOP/31,80/forecast');
    const data = await response.json();
    
    // The detailedForecast is in the periods array
    // Getting the first period (current/next forecast period)
    const detailedForecast = data.properties.periods[0].detailedForecast;
    
    return detailedForecast;
  } 


  export const getForecastByGPS = async (lat, lon) => 
 {
    const response = await fetch(`https://api.weather.gov/gridpoints/TOP/${lat},${lon}/forecast`);
    const data = await response.json();
    
    // The detailedForecast is in the periods array
    // Getting the first period (current/next forecast period)
    const detailedForecast = data.properties.periods[0].detailedForecast;
    
    return detailedForecast;
  } 

  export const getGridpoint = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.weather.gov/points/${lat},${lon}`,
      {
        headers: {
          'User-Agent': '(FlyFishTennessee, jamesfreeman114@gmail.com)'
        }
      }
    );
    const data = await response.json();
    
    // Extract the forecast URL from the response
    return data.properties.forecast;
  } catch (error) {
    console.error('Error getting gridpoint:', error);
    return null;
  }
};

export const getTheDetailedForecast = async (forecastUrl, numPeriods = 1) => {
  try {
    const response = await fetch(forecastUrl, {
      headers: {
        'User-Agent': '(FlyFishTennessee, jamesfreeman114@gmail.com)'
      }
    });
    const data = await response.json();
    
    // Get multiple periods (each period is roughly 12 hours - day/night)
    // numPeriods = 1 gets just the next period
    // numPeriods = 2 gets today and tonight
    // numPeriods = 6 gets about 3 days worth
    const periods = data.properties.periods.slice(0, numPeriods);
    
    // Return array of forecast objects with name and detailed forecast
    return periods.map(period => ({
      name: period.name,
      detailedForecast: period.detailedForecast,
      temperature: period.temperature,
      temperatureUnit: period.temperatureUnit,
      shortForecast: period.shortForecast
    }));
  } catch (error) {
    console.error('Error fetching forecast:', error);
    return null;
  }
};

export const getTheForecastByGPS = async (lat, lon, numPeriods = 6) => {
  // Step 1: Convert GPS to gridpoint and get forecast URL
  const forecastUrl = await getGridpoint(lat, lon);
  
  if (!forecastUrl) {
    return 'Unable to get forecast URL';
  }
  
  // Step 2: Get the detailed forecast(s)
  const forecast = await getTheDetailedForecast(forecastUrl, numPeriods);
  return forecast || 'Unable to get forecast';
};