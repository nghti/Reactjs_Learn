import React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList'

class App extends React.Component {
    render(){
        console.log('asd')
        return(
            <div>
                <VisibleTodoList/>
            </div>
        )
    }
}

export default App