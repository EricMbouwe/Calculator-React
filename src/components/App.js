import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
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
    let calcData = { ...this.state };

    if (calcData.total === 'E') {
      calcData = calculate(calcData, 'AC');
    } else {
      calcData = calculate(calcData, buttonName);
    }

    this.setState({
      total: calcData.total,
      next: calcData.next,
      operation: calcData.operation,
    });

    console.log(calcData);
  }

  render() {
    return (
      <div className="App">
        <Display
          operation={this.state.operation}
          next={this.state.next}
          result={this.state.total}
        />
        <ButtonPanel clickHandler={this.handleClick.bind(this)} />
      </div>
    );
  }
}

export default App;
