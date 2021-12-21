import "./ClockDisplay.css";
import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  state = { time: "" };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    return (
      <div className="content">
        <h1 className="text">The time is:</h1>
        <h1 className="time">{this.state.time}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.querySelector("#root"));
