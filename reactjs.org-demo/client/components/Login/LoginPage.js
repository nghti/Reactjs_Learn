import React from 'react';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      email: '',
      pass: ''
    }
    this.onClickIn = this.onClickIn.bind(this);
    this.onClickOut = this.onClickOut.bind(this);
    this.onEmail = this.onEmail.bind(this);
    this.onPass = this.onPass.bind(this);
  }

  onEmail(e) {
    e.preventDefault();
    this.setState({
      email: e.target.value
    })
  }

  onPass(e) {
    e.preventDefault();
    this.setState({
      pass: e.target.value
    })
  }

  onClickIn(e) {
    this.setState({
      isLoggedIn: false
    })
  }

  onClickOut() {
    this.setState({
      isLoggedIn: true
    })
  }

  render() {
    if(!this.state.isLoggedIn && this.state.email == 'nghti8020@gmail.com' && this.state.pass == '123456'){
      return (
        <div>
          <button onClick={this.onClickOut}>
            Logout
          </button>
          <h1>Page Logout</h1>
        </div>
      )
    }
    return (
      <div>
        <h1>Page Login</h1>
        <p>email: nghti8020@gmail.com</p>
        <p>pass: 123456</p>
        <form onSubmit={this.onClickIn}>
            <div>
                <label>Email</label>
                <input type="text" value={this.state.email} onChange={this.onEmail}/>
            </div>
            <div>
                <label>Pass</label>
                <input type="pass" value={this.state.pass} onChange={this.onPass}/>
            </div>
            <button>
                Login
            </button>
        </form>
      </div>
    )
  }
}

export default LoginPage;