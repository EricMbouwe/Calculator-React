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

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    let calcData = { ...this.state };

    if (calcData.total === 'E') {
      calcData = calculate(calcData, 'AC');
    } else {
      calcData = calculate(calcData, buttonName);
    }

    this.setState({ ...calcData });
  }

  render() {
    const { operation, next, total } = this.state;
    return (
      <div className="App">
        <Display operation={operation} next={next} result={total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
