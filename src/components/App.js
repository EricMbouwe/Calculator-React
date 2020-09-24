import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "../App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    const calcData = calculate(this.state, buttonName);
    this.setState({
      total: calcData.total,
      next: calcData.next,
      operation: calcData.operation,
    });
  };

  render() {
    return (
      <div className="App">
        <Display result={this.state.total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
