import React from "react";

class DogButtons extends React.Component {
  render() {
    return (
      <div>
        <button className="btn-primary mr-2" type="button" onClick={this.props.woofButtonPress}>Woof</button>
        <button className="btn-danger ml-2" type="button" onClick={this.props.doNotWoofButtonPress}>Do Not Woof</button>
      </div>
    );
  }
}

export default DogButtons;
