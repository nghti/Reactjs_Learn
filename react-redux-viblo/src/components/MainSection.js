import React, { Component } from 'react';

class MainSection extends Component {
  render() {
    const {todos} = this.props;
    return (
      <section className="App-MainSection">
        {todos.map((todo, i) => 
          <div key={todo.id}>
            <h1>{todo.text}</h1>
          </div>
        )}
      </section>
    )
  }
}

export default MainSection;