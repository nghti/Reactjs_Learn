import React from 'react';
import AddTodo from './AddTodo'
import ListTodo from './ListTodo'
import { connect } from 'react-redux'

class App extends React.Component {
    render(){
        return(
            <div>
                <ListTodo/>
                <AddTodo />
            </div>
        )
    }
}

export default App