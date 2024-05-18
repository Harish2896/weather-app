import { useState } from "react";

const SearchBox = (props) => {
  const [value, setValue] = useState(props.searchString);

  const onChangeHandler = (e) => {
    props.setIsSuggestionOpen(true);
    props.setSearchString(e.target.value);
    setValue(e.target.value);
    props.searchString === "" && props.setIsSuggestionOpen(false);
  };

  const onClickHandler = (suggestion, index) => {
    props.setIsSuggestionOpen(false);
    setValue(suggestion);
    props.setSelectedCoordinates(props.coordinatesArray[index]);
  };

  return (
    <div className="w-full text-white text-center text-xl mt-4 space-y-2">
      <input
        type="text"
        className="w-[90%] md:w-[85%] h-12 bg-transparent border-b-2 border-gray-200 overflow-hidden focus:outline-none"
        name="q"
        id="searchBox"
        onChange={onChangeHandler}
        value={value}
        placeholder="search location..."
      />
      {props.searchString && (
        <div
          className={`${
            props.isSuggestionOpen ? "" : "hidden"
          } w-[90%] m-auto md:w-[84%] pt-2 text-left bg-transparent border-b-2 border-gray-200`}
        >
          {props.suggestions.map((suggestion, index) => {
            return (
              <div
                className="text-lg bg-transparent py-2 hover:text-gray-300 cursor-pointer"
                key={index}
                onClick={() => onClickHandler(suggestion, index)}
              >
                {suggestion}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
