import React from "react";

class DogImage extends React.Component {
  render() {
    return (
      <div>
        <h1>Woof?</h1>
        <img src={this.props.image} alt="Dog"></img>
      </div>
    );
  }
}

export default DogImage;
