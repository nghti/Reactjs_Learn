/*
  ./client/components/StateLifecycle.js
  - nếu không lap hết all thì dùng Lifecycle
  - thay đổi state === setState
*/

import React from 'react';

class StateLifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString(),
    };
  }

  tick() {
    console.log('tick')
    this.setState({
      date: new Date().toLocaleTimeString()
    })
  }

  render() {
    console.log('render');
    return (
      <div className="body">
        <div>
          {this.state.date}
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
    setInterval(
      () => this.tick(),
      1000
    );
  }

}

export default StateLifecycle;