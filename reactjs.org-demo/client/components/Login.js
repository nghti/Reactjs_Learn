import React from 'react';

class PageLogin extends React.Component {
  render() {
    const {onClickIn} = this.props
    return (
      <div>
        <button onClick={onClickIn}>
          Login
        </button>
        <h1>Page Login</h1>
      </div>
    )
  }
}

class PageLogout extends React.Component {
  render() {
    const {onClickOut} = this.props
    return (
      <div>
        <button onClick={onClickOut}>
          Logout
        </button>
        <h1>Page Logout</h1>
      </div>
    )
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Login',
      isLoggedIn: true
    }
    this.onClickIn = this.onClickIn.bind(this);
    this.onClickOut = this.onClickOut.bind(this);
  }

  onClickIn() {
    this.setState({
      isLoggedIn: false
    })
  }

  onClickOut() {
    console.log('out');
    this.setState({
      isLoggedIn: true
    })
  }

  render() {
    const { isLoggedIn } = this.state
    // if(isLoggedIn) {
    //   return (<PageLogin onClickIn={this.onClickIn}/>)
    // }
    // return (<PageLogout onClickOut={this.onClickOut}/>)

    return (isLoggedIn ? <PageLogin onClickIn={this.onClickIn}/> : <PageLogout onClickOut={this.onClickOut}/>)
  }
}

export default Login;