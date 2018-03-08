import React from "react";
import "./App.css";

class DogButtons extends React.Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.props.woofButtonPress}>Woof</button>
        <button type="button" onClick={this.props.doNotWoofButtonPress}>Do Not Woof</button>
      </div>
    );
  }
}

export default DogButtons;
