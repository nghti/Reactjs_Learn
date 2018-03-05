import React from 'react';

class FormsNum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 1
    }
    this.ClickNum = this.ClickNum.bind(this);
  }

  ClickNum(e) {
    e.preventDefault();
    this.setState({
      value1: e.target.value
    })
  }

  render() {
    const { value1 } = this.state;
    return (
      <div>
        <form>
          <div>
            <label>Number of guests:</label>
            <input value={value1} type="number" onChange={this.ClickNum} />
            <p>{value1}</p>
          </div>
        </form>
      </div>
    )
  }
}

export default FormsNum;