import React from 'react';

class ChildrenOne extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

class Children extends React.Component {

  render() {
    return (
      <ChildrenOne>
        <h1>Title</h1>
      </ChildrenOne>
    )
  }
}

export default Children;