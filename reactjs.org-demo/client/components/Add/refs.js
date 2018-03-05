import React from 'react';

class Refs extends React.Component {
  constructor(props) {
    super(props);
    this.focusTextInput = this.focusTextInput.bind(this);

  }

  focusTextInput() {
    this.textInput.focus()
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          ref={(input) => { this.textInput = input; }} />
        <input 
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    )
  }
}

export default Refs;