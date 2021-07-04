import React, { useState, useEffect } from "react";
//get api key from API.js
import { API } from "./API/API";
//components

import SearchBar from "./components/SearchBar";
import NewsCards from "./components/NewsCards";
import EmptySearchMessage from "./components/EmptySearchMessage";
import InputError from "./components/InputError"

function App() {
  const [data, setData] = useState([]); //set data from gNews API
  const [inputText, setInputText] = useState(""); //set input text as search term
  const [inputErrors, setInputErrors] = useState(false); // checks if  input search text validation is valid

  //fetch gNews data using useEffect
  useEffect(() => {
    //fetches data from gNews after timeout
    const apiGet = async () => {
      await fetch(
        `https://gnews.io/api/v4/search?q=${inputText}&max=9&token=${API}`
      )
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json.articles);
        });
    };
    //search word/words validation rules
    const timer = setTimeout(() => {
      //if inputText is empty set inputErrors to False
      if (!inputText) {
        setInputErrors(false);
      }
      //if inputText includes space or NOT aphanumeric characters set InputErrors to TRUE
      else if (inputText.indexOf(' ') >= 0 || !inputText.match((/^[0-9a-z]+$/)) || !inputText) {
        setInputErrors(true);
      }
      //if inputText contains at least one (allowed) character execute apiGet
      else if (inputText) {
        setInputErrors(false);
        apiGet();
      }
    }, 2000);

    //clears timeout
    return () => clearTimeout(timer);
  }, [inputText]);

  return (
    <>
      {inputErrors ? <InputError /> : null}
      <SearchBar onChange={(value) => setInputText(value)} />
      {!inputText ? <EmptySearchMessage /> : null}
      <NewsCards data={data} />
    </>
  );
}

export default App;
