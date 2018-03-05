/*
  ./client/components/ComponentsProps.js
  - Xem nó đứng ở đâu, đã triền dự liệu lấy props chưa
*/

import React from 'react';

const Footer = (props) => (
  <div className="footer">
    Hello, {props.name02}
  </div>
)

const Body = (props) => (
  <h3 className="body">
    Hey, {props.ho} {props.ten}
  </h3>
)

const user = {
  ten: 'tu',
  ho: 'trinh',
  thich: 'gym',
  author: {
    firtname: 'Hoang',
    lastname: 'Thien',
  }
};

class ComponentsProps extends React.Component {
  constructor(props) { // Lấy all props khai báo ở ComponentsProps.js (render ComponentsProps)
    super(props);
    console.log(this.props) // Log all props của ComponentsProps
  }

  render() {
    return (
      <div>
        <div>
          <h1>ComponentsProps</h1>
          {/* <h2>Chao {this.props.name}</h2> */}
        </div>
        <div className="header">
        Hello, {this.props.hoten}
        </div>
        <div className="body">
          <h3>{user.thich}</h3>
          <Body ho={user.ho} ten={user.ten} />
        </div>
        <div className="footer">
          <Footer name02="HoangTu02" />
        </div>
      </div>
    );
  }

}

export default ComponentsProps;