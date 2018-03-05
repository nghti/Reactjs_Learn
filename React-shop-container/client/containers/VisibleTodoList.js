import React from 'react'
import { connect } from 'react-redux'
import { delTodo, addTodo } from '../actions'
import { ListTodo }  from '../components/ListTodo'
import { AddTodo }  from '../components/AddTodo'

const mapStateToProps = (state) => {
  return {
    items: state.listItems
  }
}

const mapDispatchToProps = (dispatch) =>  {
  return {
    deClick: (index) => {
      dispatch(delTodo(index))
    },

    AddClick: (e) => {
      e.preventDefault()
      dispatch(addTodo(name))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)

export default VisibleTodoList