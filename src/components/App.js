import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// import calculate from "../logic/calculate";
import '../App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(buttonName) {
    // const calcData = calculate(this.state, buttonName);
    // this.setState({
    //   total: calcData.total,
    //   next: calcData.next,
    //   operation: calcData.operation,
    // });
    // this.setState((state) => ({
    //   total: state.total + 1,
    //   next: state.total,
    //   operation: state.operation,
    // }));

    console.log('clicked from APP');
  }

  render() {
    return (
      <div className="App">
        <Display result={`${this.state.total}`} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
