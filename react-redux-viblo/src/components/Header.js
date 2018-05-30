import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "haha"
    };
    const { addTodo } = this.props;
    this.AddChange = this.AddChange.bind(this);
    this.AddClick = this.AddClick.bind(this);
  }

  AddChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  AddClick(e) {
    this.addTodo.push(this.state.text);
    this.setState({text: ''});
    e.preventDefault();
  }

  render() {
    return (
      <header className="App-header">
        <h1>add</h1>
        <form>
          <input type="text" value={this.state.text} onChange={this.AddChange}/>
          <button onClick={this.AddClick}>add</button>
        </form>
      </header>
    )
  }
}

export default Header;