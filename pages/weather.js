import React, { useState } from "react";
import Head from "next/head";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import HomeButton from "../components/HomeButton";
import WeatherCard from "../components/WeatherCard";
import ErrorToast from "../components/ErrorToast";
import { getWeatherByCity } from "../api/weather.service";

const CityInput = withStyles({
  root: {
    minWidth: "100%",
    marginTop: "2.5rem",
    color: "white",
    '& .MuiFormLabel-root': {
      color: "white"
    },
    '& .MuiOutlinedInput-input': {
      color: "white"
    },
    '& label.Mui-focused': {
      color: "white"
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  }
})(TextField);

const SearchButton = withStyles({
  root: {
    minWidth: "100%",
    margin: "1rem 0",
  }
})(Button);

export default function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  const handleCityInputChange = (e) => {
    setCity(e.target.value);
  }

  const handleErrorClose = () => {
    setError(false);
  }

  const searchCity = async () => {
    const data = await getWeatherByCity(city);
    if (data) {
      setWeatherData(data);
    } else {
      setError(true);
    }
  };

  return (
    <div className="page">
      <Head>
        <title>M. Khairul Makirin</title>
      </Head>
      <HomeButton />
      <CityInput
        id="city-input"
        label="Enter a city's name"
        variant="outlined"
        onChange={handleCityInputChange}
      />
      <SearchButton
        variant="contained"
        size="medium"
        onClick={() => { searchCity() }}
      >
        Search
      </SearchButton>
      {
        weatherData ? <WeatherCard data={weatherData} /> : null
      }
      <ErrorToast open={error} handleClose={handleErrorClose} duration={5000} />
    </div>
  )
}