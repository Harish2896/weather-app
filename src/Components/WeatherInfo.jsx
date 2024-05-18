const WeatherInfo = (props) => {
  const { current, location } = props.weatherInfo;

  console.log(current, location);
  return (
    <section className="flex items-end space-x-4 text-xl text-white pb-8 ml-6">
      <article className="text-8xl">{current.temp_c}°</article>
      <article className="text-xl h-full flex space-x-8">
        <div className="flex flex-col mt-auto mb-2 space-y-2">
          <span className="text-3xl text-left">
            {location.name},{location.region}
          </span>
          <span className="text-sm text-left">{location.localtime}</span>
        </div>
        <div className="flex flex-col mt-auto mb-2">
          <span className="m-auto">
            <img
              className="w-12 h-12"
              src={current.condition.icon}
              alt="weather-image"
            />
          </span>
          <span className="text-sm">{current.condition.text}</span>
        </div>
      </article>
    </section>
  );
};

export default WeatherInfo;
