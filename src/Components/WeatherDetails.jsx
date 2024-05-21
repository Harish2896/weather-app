const WeatherDetails = (props) => {
  return (
    <section className="md:w-[85%] md:border-t-2 md:border-gray-200 md:ml-[7.5%] md:pl-0 w-full border-0 mb-[25%] pl-5 flex flex-col pt-6  text-white text-2xl ">
      <div className="text-2xl pb-6">Weather Details</div>
      <div className="flex w-full text-xl space-x-12">
        <div className="flex flex-col space-y-3">
          <span>Cloud</span>
          <span>Humidity</span>
          <span>Wind</span>
          <span>Temp F</span>
        </div>
        <div className="flex flex-col space-y-3">
          <span>{props.weatherInfo.current.cloud} %</span>
          <span>{props.weatherInfo.current.humidity} %</span>
          <span>{props.weatherInfo.current.wind_kph} km/h</span>
          <span>{props.weatherInfo.current.temp_f} F</span>
        </div>
      </div>
    </section>
  );
};

export default WeatherDetails;
