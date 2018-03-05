import React from 'react'
import { connect } from 'react-redux'
import { delTodo } from '../action'

class ListTodo extends React.Component {

  constructor (props) {
    super(props)

    this.DelClick = this.DelClick.bind(this)
  }
  
  DelClick(index){
    this.props.delTodo(index)
  }

  render(){
    const {items} = this.props
    const ListName = items.map((item, i) =>
      <li key={i}>{item} <button onClick={(e) => this.DelClick(i)}>X</button></li>
    )
    return(
      <div>
        <h1>Todo</h1>
        <ul>{ListName}</ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.listItems
  }
}

const mapDispatchToProps =  {
  delTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo)
