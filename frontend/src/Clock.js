import React from "react";

class Clock extends React.Component {
  constructor(props) {
    console.log("This is constructor");
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    console.log("Component in mount");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("Component unmounted");
    clearInterval(this.timerID);
  }

  tick() {
    console.log("Tick is being called");
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
