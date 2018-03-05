import React from 'react';
import axios from 'axios';

class Load extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      isLoad: true
    }
  }

  componentDidMount(){
    let self = this;
    axios.get('https://599e7957d3276800116b9ceb.mockapi.io/user')
    .then(function (response) {
      self.setState({
        users: response.data,
        isLoad: false
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
    console.log(this.state.users)
    const {isLoad} = this.state;
    if(isLoad) {
      return (
        <div>Load...</div>
      )
    }
    return(
      <div>
        <h1>Page Load</h1>
        {this.state.users.map((user) =>
          <div key={user.id}>
            <li>{user.name}</li>
            <span>{user.imageUrl}</span>
          </div>
        )}
      </div>
    )
  }
}

export default Load;