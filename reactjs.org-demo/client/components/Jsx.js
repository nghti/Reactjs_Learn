/*
  ./client/components/Jsx.js
  - Introducing JSX
    + 2 + 2, user.firstName, and formatName(user)
    + function getGreeting(user) {
        if (user) {
            return <h1>Hello, {formatName(user)}!</h1>;
        }
        return <h1>Hello, Stranger.</h1>;
      }
    + const element = <div tabIndex="0"></div>;
      const element = <img src={user.avatarUrl}></img>;
    + className
*/

import React from 'react';

function formatName(user) {
  return <h1>Xin chao {user.author.firtname + ' ' + user.author.lastname}</h1>;
}

const user = {
  author: {
      firtname: 'Hoang',
      lastname: 'Thien',
  }
};

class Jsx extends React.Component {

  render() {
    return (
      <div className="page-jsx">
        {formatName(user)}
      </div>
    );
  }
}

export default Jsx;
