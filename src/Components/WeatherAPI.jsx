import { useEffect } from "react";
import { setBackgroundImage } from "./SetBackgroundImage";
const WeatherAPI = (props) => {
  const [latitude, longitude] = props.selectedCoordinates;

  useEffect(() => {
    const weatherData = async () => {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?q=${longitude},${latitude}&key=b84c9728db8a49fa997115315241104`
      );
      const data = await response.json();
      props.setWeatherInfo(data);
      setBackgroundImage(
        data.current.condition.code,
        data.current.condition.text,
        props.setBgImageURL
      );

      console.log(data);
    };
    weatherData();
  }, [props.selectedCoordinates]);
};

export default WeatherAPI;

// `https://api.weatherapi.com/v1/current.json?q=${roundedLat},${roundedLon}&key=b84c9728db8a49fa997115315241104`
// `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=072198bb56c4ce7420eebbd149ebfdb9&units=metric`
