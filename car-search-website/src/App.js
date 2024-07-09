import React, { Component } from 'react';
import './App.css';
class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: '0', // The current input/display value
      prevValue: '', // The previous value entered
      operator: '', // The current operator (+, -, *, /)
      isOperatorClicked: false, // To track if an operator is clicked
    };
  }

  // Handle number button click
  handleNumberClick = (num) => {
    const { display, isOperatorClicked } = this.state;

    if (display === '0' || isOperatorClicked) {
      this.setState({ display: num, isOperatorClicked: false });
    } else {
      this.setState({ display: display + num });
    }
  };

  // Handle operator button click
  handleOperatorClick = (operator) => {
    const { display, prevValue, operator: prevOperator } = this.state;

    if (prevValue === '') {
      this.setState({
        prevValue: display,
        operator,
        isOperatorClicked: true,
      });
    } else if (prevOperator !== '') {
      this.calculateResult();
      this.setState({
        prevValue: display,
        operator,
        isOperatorClicked: true,
      });
    } else {
      this.setState({ operator, isOperatorClicked: true });
    }
  };

  // Handle equal button click
  handleEqualClick = () => {
    this.calculateResult();
  };

  // Calculate the result
  calculateResult = () => {
    const { display, prevValue, operator } = this.state;
    let result;

    switch (operator) {
      case '+':
        result = parseFloat(prevValue) + parseFloat(display);
        break;
      case '-':
        result = parseFloat(prevValue) - parseFloat(display);
        break;
      case '*':
        result = parseFloat(prevValue) * parseFloat(display);
        break;
      case '/':
        result = parseFloat(prevValue) / parseFloat(display);
        break;
      default:
        return;
    }

    this.setState({ display: result.toString(), prevValue: '', operator: '' });
  };

  // Handle clear button click
  handleClearClick = () => {
    this.setState({
      display: '0',
      prevValue: '',
      operator: '',
      isOperatorClicked: false,
    });
  };

  render() {
    const { display } = this.state;

    return (
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <div className="row">
            <button onClick={() => this.handleClearClick()}>C</button>
            <button onClick={() => this.handleOperatorClick('/')}>/</button>
            <button onClick={() => this.handleOperatorClick('*')}>*</button>
            <button onClick={() => this.handleNumberClick('7')}>7</button>
          </div>
          {/* Create similar rows for other buttons */}
          {/* ... */}
          <div className="row">
            <button onClick={() => this.handleNumberClick('0')}>0</button>
            <button onClick={() => this.handleOperatorClick('+')}>+</button>
            <button onClick={() => this.handleOperatorClick('-')}>-</button>
            <button onClick={() => this.handleEqualClick()}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
