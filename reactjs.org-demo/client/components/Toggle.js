import React from 'react';

class Warning extends React.Component {
  render() {
    const { Warn } = this.props
    if (!Warn) {
      return null
    }
    return (
      <div className="Warning">
        Warning
            </div>
    )
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWarning: true
    }
    this.ClickWarning = this.ClickWarning.bind(this);
  }

  ClickWarning() {
    this.setState(prevState => ({
      isWarning: !prevState.isWarning
    }));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Warning Warn={this.state.isWarning} />
        <button onClick={this.ClickWarning}>Click</button>
      </div>
    )
  }
}

export default Toggle;