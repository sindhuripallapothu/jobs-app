import React, { useState, useEffect } from "react";
import axios from "axios";
import { FormControlLabel, Checkbox } from "@material-ui/core";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";

import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";
// import PopupMock from "./components/PopupMock";
import Header from "./components/Header";
// import mock from "./mockData";

// function InvalidSearchAlert(props) {
//   const { text } = props;
//   return (
//     <Alert elevation={6} variant="filled" {...props}>
//       {text}
//     </Alert>
//   );
// }
function App() {
  const [state, setState] = useState({
    s: "",
    location: "",
    checkedFT: false,
    results: [],
    selected: {},
  });
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  var config = {
    headers: { "Access-Control-Allow-Origin": "*" },
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?lat=${position.coords.latitude}?long=${position.coords.longitude}`,
          config
        )
        .then((response) => {
          const onLoadData = response.data;

          setState(() => {
            return { ...state, results: onLoadData };
          });
        });
    });
  }, []);

  const search = (e) => {
    var baseURL =
      "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

    baseURL = state.checkedFT ? baseURL + "?full_time=true" : baseURL;
    baseURL =
      state.location !== "" ? baseURL + "?location=" + state.location : baseURL;
    baseURL = state.s !== "" ? baseURL + "?search=" + state.s : baseURL;

    axios(baseURL, config).then(({ data }) => {
      setState(() => {
        return { ...state, results: data };
      });
    });
  };

  const handleInputLocation = (e) => {
    let location = e.target.value;
    setState((prevState) => {
      return { ...prevState, location: location };
    });
  };

  const handleInput = (e) => {
    let s = e.target.value;
    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const handleChangeCheckBox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    var filteredResults = state.results.filter(
      (result) => result.type === "Full Time"
    );
    console.log(state.results);
    console.log(filteredResults);
    setState({ ...state, results: filteredResults });
  };

  const openPopup = (id) => {
    axios(
      "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/" +
        id +
        ".json",
      config
    ).then(({ data }) => {
      let result = data;

      setState(() => {
        return { ...state, selected: result };
      });
    });
  };

  const closePopup = () => {
    setState(() => {
      return { ...state, selected: {} };
    });
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <Header id="Header" handleTheme={themeToggler} />

          <main>
            {typeof state.selected.title === "undefined" && (
              <div>
                <span>
                  <div id="searchbar">
                    <Search
                      handleInput={handleInput}
                      text="Filter by Title, Company, Expertise..."
                      icon="search"
                    />
                    <Search
                      handleInput={handleInputLocation}
                      text="Filter by Location.."
                      icon="location"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedB}
                          onChange={handleChangeCheckBox}
                          name="checkedFT"
                          color="primary"
                        />
                      }
                      label="Full Time only"
                    />

                    <input
                      type="button"
                      onClick={search}
                      className="appSubmit"
                      value="Submit"
                    />
                  </div>
                </span>
                <Results results={state.results} openPopup={openPopup} />
                {/* <Results results={mock} openPopup={openPopup} /> */}
              </div>
            )}

            {typeof state.selected.title != "undefined" && (
              <>
                <Header id="Header" handleTheme={themeToggler} />
                <Popup selected={state.selected} closePopup={closePopup} />
              </>
            )}
          </main>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
