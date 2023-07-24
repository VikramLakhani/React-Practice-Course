import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

export class SeasonIndex extends Component {
  // constructor(props) {
  //   super(props);

  //   // THIS IS THE ONLY TIME: we do direct assignment to this.state
  //   this.state = { lat: null, errorMessage: "" };
  // }
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we called setState!!
        this.setState({
          lat: position.coords.latitude,
        });
        // we did not!!
        // this.state.lat = position.coords.latitude
      },
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  renderContent() {
    // Season App code
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />; //<div>Latitude: {this.state.lat}</div>;
    }
    return <Spinner message="Please accept location request" />;
  }
  // React says we have to define render!!
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default SeasonIndex;
