import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../action'

class AddTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
        };
        
        this.AddChange = this.AddChange.bind(this);
        this.AddClick = this.AddClick.bind(this);
    }

    AddChange(e){
        this.setState({
            name: e.target.value
        });
    }

    AddClick(e){
        e.preventDefault();
        this.props.addTodo(this.state.name)
        this.setState({name: ''})
    }

    render(){
        return(
            <div>
                <form>
                    <input type="text" value={this.state.name} onChange={this.AddChange} />
                    <button onClick={this.AddClick}>Add</button>
                </form>

            </div>
        )
    }
}

const mapDispatchToProps = {
    addTodo
}

export default connect(null, mapDispatchToProps)(AddTodo)