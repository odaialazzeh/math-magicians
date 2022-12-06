import React from 'react';
import Button from './Button';
import Screen from './Screen';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (

      <div className="main">
        <Screen />
        <div className="operators">
          <div className="row-0">
            <Button label="AC" />
            <Button label="+/-" />
            <Button label="%" />
            <span>
              <Button label="/" />
            </span>
          </div>
          <div className="row-1">
            <Button label="7" />
            <Button label="8" />
            <Button label="9" />
            <span>
              <Button label="*" />
            </span>
          </div>
          <div className="row-2">
            <Button label="4" />
            <Button label="5" />
            <Button label="6" />
            <span>
              <Button label="-" />
            </span>
          </div>
          <div className="row-3">
            <Button label="1" />
            <Button label="2" />
            <Button label="3" />
            <span>
              <Button label="+" />
            </span>
          </div>
          <div className="row-4">
            <div className="zero">
              <Button label="0" />
            </div>
            <Button label="." />
            <span>
              <Button label="=" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
