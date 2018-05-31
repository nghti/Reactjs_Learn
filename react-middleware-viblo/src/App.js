import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './action';

let styles

const App = (props) => {
  const {container, text, button, buttonText} = styles

  return (
    <div style={container}>
      <div style={text}>name 007</div>
      <div style={button}>
        <div style={buttonText}>Load data</div>
      </div>
    </div>
  );
}

styles = {
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    display: 'flex',
    minHeight: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  }
}

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)