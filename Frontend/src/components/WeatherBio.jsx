import React from "react";

const WeatherBiodiversityComponent = ({ weatherData, biodiversityCount }) => {
  if (!weatherData || !biodiversityCount) {
    return <p>No Data Available</p>;
  }

  const {
    name,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    weather,
    wind: { speed, deg },
    sys: { country, sunrise, sunset },
    visibility,
    clouds: { all: cloudiness },
    coord: { lon, lat },
  } = weatherData;

  const weatherDescription =
    weather[0]?.description || "No description available";

  return (
    <div className="weather-biodiversity-box p-4 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold">
        Weather in {name}, {country}
      </h2>
      <p>
        Coordinates: {lat}, {lon}
      </p>
      <p>Temperature: {temp}°K</p>
      <p>Feels like: {feels_like}°K</p>
      <p>Min Temperature: {temp_min}°K</p>
      <p>Max Temperature: {temp_max}°K</p>
      <p>Pressure: {pressure} hPa</p>
      <p>Humidity: {humidity}%</p>
      <p>Weather: {weatherDescription}</p>
      <p>
        Wind: {speed} m/s at {deg}°
      </p>
      <p>Cloudiness: {cloudiness}%</p>
      <p>Visibility: {visibility} meters</p>
      <p>Sunrise: {new Date(sunrise * 1000).toLocaleTimeString()}</p>
      <p>Sunset: {new Date(sunset * 1000).toLocaleTimeString()}</p>

      <div className="biodiversity-count mt-4 p-2 bg-green-100 rounded-md">
        <h3 className="text-xl font-semibold">Biodiversity Count</h3>
        <p>Total species observed: {biodiversityCount}</p>
      </div>
    </div>
  );
};

export default WeatherBiodiversityComponent;
