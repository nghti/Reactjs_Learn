import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const Todo = {
  lists: ''
}
console.log(Todo)

class AddTodo extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      messenger: ''
    }
    this.AddChange = this.AddChange.bind(this)
  }

  AddChange(e){
    this.setState({
      messenger: e.target.value
    })
  }

  AddSubmit(e){
    e.preventDefault();
    store.dispatch({ type: 'ADDTODO' });
  }

  render(){
    return(
      <div>
          <form onSubmit={AddSubmit}>
            <input type="text" value={this.state.messenger} onChange={this.AddChange}/>
            <button>Add</button>
          </form>
      </div>
    )
  }
}

ReactDOM.render(<AddTodo />, document.getElementById('root'));