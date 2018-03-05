import React from 'react';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
    this.ClickSubmit = this.ClickSubmit.bind(this);
    this.ClickChange = this.ClickChange.bind(this);

  }
  ClickChange(e) {
    e.preventDefault();
    this.setState({ value: e.target.value })
  }
  ClickSubmit(e) {
    console.log(this.state.value)
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.ClickSubmit}>
          {/* <label>Name</label>
                    <input type="text" value={this.state.value} onChange={this.ClickChange} />
                    <input type="submit" /> */}
          <label>Name</label>
          <select value={this.state.value} onChange={this.ClickChange}>
            <option value="red">red</option>
            <option value="black">black</option>
            <option value="white">white</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Forms;