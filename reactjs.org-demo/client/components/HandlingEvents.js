/*
  ./client/components/HandlingEvents.js
  - Chú ý có phần ID cuối bài
*/

import React from 'react';

class HandlingEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      so: 4,
      isToggleOn: true
    };

    this.handleClick = this.handleClick.bind(this)
    this.handleClick1 = this.handleClick1.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  handleClick1(e) {
    e.preventDefault();
    this.setState(prevState => ({
      so: 4
    }));
  }

  componentWillMount() {
    console.log('componentWillMount');
    this.setState((prevState, prop) => ({
      so: 2 + 1
    }));
  }

  render() {
    console.log('render');
    return (
      <div className="body">
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <br />
        <a href="#" onClick={this.handleClick1}>click</a>
        <div>
          {this.state.so}
        </div>
      </div>
    );
  }

}

export default HandlingEvents;