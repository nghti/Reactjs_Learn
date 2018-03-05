import React from 'react';

class Lists extends React.Component {

  render() {
    const numbers = [1, 2, 3, 4];
    const listItem = numbers.map(number =>
      <li key={number.toString()}>{number}</li>
    )
    return (
      <ul>
        {listItem}
      </ul>
    )
  }
}

export default Lists;