import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lists: ['tu', 'trinh', 'hoang']
    };
    this.AddChange = this.AddChange.bind(this);
    this.AddClick = this.AddClick.bind(this);
  }

  AddChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  AddClick(e) {
    this.state.lists.push(this.state.name);
    this.setState({ name: '' });
    e.preventDefault();
  }

  DelClick(index) {
    this.state.lists.splice(index, 1);
    this.setState(this.state);
  }

  render() {
    const { lists } = this.state;
    const ListName = lists.map((item, i) =>
      <li key={i}>{item} <button onClick={this.DelClick.bind(this, i)}>X</button></li>
    );
    console.log(this.state);
    return (
      <div>
        <h1>Todo</h1>
        <ul>
          {ListName}
        </ul>
        <form>
          <input type="text" value={this.state.name} onChange={this.AddChange} />
          <button onClick={this.AddClick}>Add</button>
        </form>
      </div>
    )
  }
}

export default Todo;