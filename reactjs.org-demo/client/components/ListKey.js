import React from 'react';

class Sidebar extends React.Component {
  render() {
    const items = this.props.List
    const listItems = items.map((item) =>
      <li key={item.id}>{item.name}</li>
    )
    const ListID = items.map((post) =>
      <div key={post.id}>
        <h3>{post.name}</h3>
        <p>{post.content}</p>
      </div>
    )
    return (
      <div>
        <ul>{listItems}</ul>
        {ListID}
      </div>
    )
  }
}

class ListKey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [
        {
          id: 1,
          name: 'tu',
          content: 'hah aha hah'
        },
        {
          id: 2,
          name: 'tu',
          content: 'hah aha hah'
        }
      ]
    }
  }

  

  render() {
    return (
      <div>
        <Sidebar {...this.state} />
      </div>
    )
  }
}

export default ListKey;