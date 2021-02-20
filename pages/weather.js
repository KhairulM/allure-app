import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const CityInput = withStyles({
  root: {
    minWidth: "100%"
  }
})(TextField);

export default function Weather() {
  const [city, setCity] = useState("jakarta"); // default city is Jakarta

  return (
    <div className="page">
      <CityInput
        id="city-input"
        label="enter a city's name"
        variant="filled"
      />
    </div>
  )
}