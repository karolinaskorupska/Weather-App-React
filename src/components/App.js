import React, { Component } from "react";
import WeatherBody from "./WeatherBody/WeatherBody";
import Loader from "./Loader/Loader";
import SearchBar from "./SearchBar/SearchBar";
import "./App.css";
import "./FontAwesomeIcons/index";
import axios from "axios";
import { parse } from "@fortawesome/fontawesome-svg-core";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: [],
      city: "",
      isLoaded: false,
    };
    this.searchCity();
  }

  componentDidMount() {
    this.setState({
      isLoaded: true,
    });
  }

  searchCity = async (city) => {
    try {
      const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
      const apiKey = "3bf8770f15db4889a6689ddd9eaf3560";
      const response = await axios.get(
        `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}&include=minutely`
      );
          const temp = response.data.data;
          const city = response.data.city_name;

        this.setState({
          temp,
          city,
          isLoaded: true,
        });
      

      this.setState({
        temp,
        city,
        isLoaded: true,
      });
    } catch (error) {
      console.log(error);
    }

  };

  render() {
    const icon = this.state.temp.map((element) => {
      return element.weather.code;
    });

    const description = this.state.temp.map((element) => {
      return element.descriptions;
    });

    const minTemp = this.state.temp.map(element=>{
      return parseInt(element.low_temp)
    });

    const maxTemp= this.state.temp.map(element=>{
      return parseInt(element.max_temp)
    });

    // Loader
    if (!this.state.isLoaded) {
      return <Loader msg={"Loading..."} />;
    }

    return (
      <div className="App">
        <React.Fragment>
          <SearchBar city={this.state.city} searchCity={this.searchCity} />
        </React.Fragment>
        <div className="weatherContainer">
          <span className="cityName">{this.state.city}</span>
          {/* <WeatherBody
            day={"Today"}
            icon={icon}
            minTemp={minTemp}
            maxTemp={maxTemp}
            description={description}
          /> */}
          <WeatherBody
            day={"Today"}
            icon={icon}
            minTemp={15}
            maxTemp={20}
            description={"opis opis"}
          />
        </div>
      </div>
    );
  }
}

export default App;
