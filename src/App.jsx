import { useState } from "react";
import { useEffect } from "react";
import SearchBox from "./Components/SearchBox";
import WeatherAPI from "./Components/WeatherAPI";
import WeatherInfo from "./Components/WeatherInfo";
import WeatherDetails from "./Components/WeatherDetails";

function App() {
  // mapboxgl.accessToken =
  // "pk.eyJ1Ijoic3ViYXNoMTEiLCJhIjoiY2wyMWc0cmRqMGptdTNqbW1seHp1OXpxdCJ9.mYw90uvW9IHOKSxq9_4jZA";
  //geocode accesstoken="0a28def107fe42c2a33c12eaf4141029"
  const [searchString, setSearchString] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSuggestionOpen, setIsSuggestionOpen] = useState(false);
  const [coordinatesArray, setCoordinatesArray] = useState();
  const [selectedCoordinates, setSelectedCoordinates] = useState();
  const [weatherInfo, setWeatherInfo] = useState();
  const [bgImageURL, setBgImageURL] = useState(
    "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  // console.log(searchString);
  // console.log(isSuggestionOpen);
  useEffect(() => {
    if (searchString) {
      const fetchCoordinatesArray = async () => {
        try {
          const response = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchString}.json?limit=4&autocomplete=true&access_token=pk.eyJ1Ijoic3ViYXNoMTEiLCJhIjoiY2wyMWc0cmRqMGptdTNqbW1seHp1OXpxdCJ9.mYw90uvW9IHOKSxq9_4jZA`
          );
          const { features } = await response.json();

          setSuggestions(
            features.map((data) => {
              return data.place_name;
            })
          );
          setCoordinatesArray(
            features.map((data) => {
              return data.center;
            })
          );
          // console.log(bgImageURL);
        } catch (error) {
          // console.log(error.message);
        }
      };
      fetchCoordinatesArray();
    }
  }, [searchString]);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  // console.log(weatherInfo);
  const titleClickHandler = () => {
    setIsSuggestionOpen(false);
    setCoordinatesArray("");
    setSearchString("");
    setSelectedCoordinates("");
    setSuggestions([]);
    setWeatherInfo("");
    setBgImageURL(
      "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
  };
  return (
    <main
      style={{
        backgroundImage: `url(${bgImageURL})`,
      }}
      className={
        "md:flex-row flex flex-col justify-between w-screen h-screen bg-black font-roboto bg-cover bg-center transition-all duration-500"
      }
    >
      <section className="md:w-8/12 md:h-auto md:justify-between  w-full h-[55%] bg-[rgba(0,0,0,0.3)] text-3xl text-center tracking-wider flex flex-col justify-normal">
        <header
          className="text-white text-left w-full text-[22px] italic pl-4 pt-4 cursor-pointer hover:text-gray-900"
          onClick={titleClickHandler}
        >
          WEATHER.io
        </header>
        {!weatherInfo && (
          <div className="text-white text-8xl text-left pl-4 lg:flex w-[500px] pb-24 relative hidden">
            Know your Weather...{" "}
            <span className="absolute left-[100%] top-[16%]">→</span>
          </div>
        )}
        <div>{weatherInfo && <WeatherInfo weatherInfo={weatherInfo} />}</div>
      </section>
      <section className="md:w-4/12 md:h-auto w-full h-[45%]  flex flex-col justify-between bg-[rgba(110,110,110,0.35)] border-white border-l-[1px] border-opacity-20 shadow-[rgba(0,0,0,0.3)] shadow-xl backdrop-blur-sm backdrop-brightness-[70%]">
        <form onSubmit={submitHandler} autoComplete="off">
          <SearchBox
            searchString={searchString}
            setSearchString={setSearchString}
            suggestions={suggestions}
            coordinatesArray={coordinatesArray}
            setSelectedCoordinates={setSelectedCoordinates}
            setIsSuggestionOpen={setIsSuggestionOpen}
            isSuggestionOpen={isSuggestionOpen}
          />
        </form>
        {weatherInfo && (
          <div>
            <WeatherDetails weatherInfo={weatherInfo} />
          </div>
        )}
        {selectedCoordinates && (
          <WeatherAPI
            selectedCoordinates={selectedCoordinates}
            setWeatherInfo={setWeatherInfo}
            setBgImageURL={setBgImageURL}
          />
        )}
      </section>
    </main>
  );
}

export default App;
