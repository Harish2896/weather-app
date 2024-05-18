const WeatherDetails = (props) => {
  return (
    <section className="w-[85%] flex flex-col pt-6 mb-[25%] ml-[7.5%] text-white text-2xl border-t-2 border-gray-200 ">
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
