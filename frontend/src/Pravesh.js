import React, { Component } from "react";

class Pravesh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pravesh: "Pravesh Chapagain"
    };
  }

  render() {
    return (
      <div>
        <h4 style={{ backgroundColor: this.props.color }}>
          {this.state.pravesh}
        </h4>
      </div>
    );
  }
}
export default Pravesh;
