// function Clock(){
//     return(
//          <>
//              {/* Rendering time */}
//              <h2> Now Time is : {new Date()toLcaleTimeString()} </h2>
//          </>
//      )
// }


import React from "react";

class Clock extends React.Component {
  // Constructor
  constructor(props) {
    // Super is used to invoke the parent class constructor
    super(props);
    // 'this' is a keyword used to refer to class variables
    this.state = { date: new Date() };
  }

  // It's called automatically when the component gets mounted
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // It's called automatically when the component gets unmounted
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // Update date value using setState()
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <>
        Welcome to Class Component
        <p> Now time is: {this.state.date.toLocaleTimeString()} </p>
      </>
    );
  }
}

export default Clock;
