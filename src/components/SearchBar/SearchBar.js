import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {
    city: "",
  };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState !== this.state.city) {
//       this.setState({
//         city: this.state.city,
//       });
//     }
//   }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.city === "") {
      alert("City can not be empty");
    } else {
      this.props.searchCity(this.state.city);
    }
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBarChildren">
          <span className="text-white">Search weather in your city</span>

          <form onSubmit={this.onSubmit} className="formSearchCity">
            <input
              type="text"
              name="city"
              id="inputSearchCity"
              onChange={this.onChange}
              placeholder="type city name"
            />
            <button type="submit" className=" btn submit white-text">Search</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
