import React, { Component } from "react";
import WeatherBody from "./WeatherBody/WeatherBody";
import Loader from "./Loader/Loader";
import SearchBar from "./SearchBar/SearchBar";
import "./App.css";
import "./FontAwesomeIcons/index";
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: [],
      city: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.setState({
      isLoaded: true,
    });
  }

  searchCity = async (city) => {
    await axios
      .get(`http://api.weatherbit.io/v2.0/current?city=${city}&key=4174064e0e114421b454d4ab2a53dbfa&lang=pl`)
      .then((response) => {

        console.log(response)
        // const temp = response.data;
        // const city = response.data.city_name;
      
        // this.setState({
        //   temp,
        //   city,
        //   isLoaded: true,
        // });
      })
      .catch(function(error){
        console.log("connection error", error)
      })
  };

  render() {
    console.log(this.state.temp)

    // const icon = this.state.temp.map((element) => {
    //   return element.weather.code;
    // });

    // const description = this.state.temp.map((element) => {
    //   return element.descriptions;
    // });

    // Loader
    // if (this.state.isLoaded) {
    //   return <Loader msg={"Loading..."} />;
    // }

    return (
      <div className="App">
        <React.Fragment>
          <SearchBar city={this.state.city} searchCity={this.searchCity} />
        </React.Fragment>
        <div className="weatherContainer">
          <span className="cityName">{this.state.city}</span>
          <WeatherBody
            day={"Today"}
            icon={"SUNNY"}
            // minTemp={temperature}
            // maxTemp={temperature}
            description={"SŁONECZNIE"}
          />
          
        </div>
      </div>
    );
  }
}

export default App;
