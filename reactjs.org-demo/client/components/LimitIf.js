import React from 'react';

class Limit extends React.Component {
  render() {
    console.log(this.props.limit);
    const { limit } = this.props;
    if (parseFloat(limit) > 10) {
      return <p>The water would boil</p>;
    }
    return <p>The water would not boil</p>;
  }
}

class limitIf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 1
    }
    this.ClickNum = this.ClickNum.bind(this);
  }

  ClickNum(e) {
    e.preventDefault();
    this.setState({
      limit: e.target.value
    })
  }

  render() {
    const { limit } = this.state;
    return (
      <div>
        <form>
          <div>
            <label>Number of guests:</label>
            <input value={limit} type="number" onChange={this.ClickNum} />
          </div>
          <Limit {...this.state} />
        </form>
      </div>
    )
  }
}

export default limitIf;