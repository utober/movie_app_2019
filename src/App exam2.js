import React from 'react';
// import PropTypes from 'prop-types';

let num = 0;

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor start");
  }
  state = {
    count: 0
  };
  add = () => {
    console.log("add")
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    console.log("minus");
    this.setState(current => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("componentDidMount start");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate start");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount start");
  }
  render() {
    num++;
    console.log("render start", num);
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
