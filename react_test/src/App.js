import React from "react";
import DogImage from "./DogImage.js";
import DogButtons from "./DogButtons.js";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      woofs: 0,
      doNotWoofs: 0
    };
    this.woofButtonPress = this.woofButtonPress.bind(this);
    this.doNotWoofButtonPress = this.doNotWoofButtonPress.bind(this);
  }

  componentWillMount() {
    this.loadNewDog();
  }

  loadNewDog() {
    fetch("http://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          this.setState({ image: data.message });
        }
      })
      .catch((error) => console.log("ERROR: " + error));
  }

  woofButtonPress(event) {
    this.setState({ woofs: this.state.woofs + 1 });
    console.log(this.state.woofs);
    this.loadNewDog();
  }

  doNotWoofButtonPress(event) {
    this.setState({ doNotWoofs: this.state.doNotWoofs + 1 });
    console.log(this.state.doNotWoofs);
    this.loadNewDog();
  }

  render() {
    return (
      <div id="main">
        <DogImage image={this.state.image}/>
        <DogButtons woofButtonPress={this.woofButtonPress} doNotWoofButtonPress={this.doNotWoofButtonPress}/>
      </div>
    );
  }
}

export default App;
