import React, { Component } from "react";
import MyContext from "./MyContext";

export default class provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    };
  }

  updateSignal = (color) => {
    this.setState({
      color,
    });
  };
  updateCar = (colorString) => {
    this.setState(
      (state) => ({
        cars:{ ...state.cars, [colorString]: !state.cars[colorString]},
      }),
      () => console.log("lol")
    );
  };
  render() {
    const context = {
      ...this.state,
      changeSignal: this.updateSignal,
      moveCar: this.updateCar,
    };
    return (
      <MyContext.Provider value={context}>{this.props.children}</MyContext.Provider>
    );
  }
}
