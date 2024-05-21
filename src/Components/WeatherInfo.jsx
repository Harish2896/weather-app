const WeatherInfo = (props) => {
  const { current, location } = props.weatherInfo;

  // console.log(current, location);
  return (
    <section className="md:flex md:flex-row md:justify-start md:items-end md:mt-0 md:ml-6 md:space-x-4 md:space-y-0 ml-0 mt-20 flex flex-col justify-center space-y-4 space-x-0 text-xl text-white pb-8">
      <article className="md:text-8xl text-6xl">{current.temp_c}°</article>
      <article className="md:flex md:flex-row md:space-x-8 md:space-y-0 flex flex-col space-y-2 text-xl h-full m-0">
        <div className="flex flex-col mt-auto mb-2 space-y-2">
          <span className="md:text-left text-3xl">
            {location.name},{location.region}
          </span>
          <span className="md:text-left text-center text-sm">
            {location.localtime}
          </span>
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
