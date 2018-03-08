import React from "react";

import "../style/DogImage.css";

class DogImage extends React.Component {
  render() {
    return (
      <div>
        <h1 className="my-3">Woof?</h1>
        <div className="dog_image-container mb-3">
          <img className="dog_image-image" src={this.props.image} alt="Dog"></img>
        </div>
      </div>
    );
  }
}

export default DogImage;
