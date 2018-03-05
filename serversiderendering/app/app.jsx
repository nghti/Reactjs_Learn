var React = require('react');
var ReactDOM = require('react-dom');

// var Note = React.createClass({
// 	del(){
// 		this.props.remove(this.props.index);
// 	},
// 	render(){
// 		return (
// 			<div>
// 				<p>{this.props.children}</p>
// 				<button onClick={this.del}>Delete</button>
// 			</div>
// 		);
// 	}
// });

// var List = React.createClass({
// 	add(text){
// 		this.state.mang.push(text);
// 		this.setState(this.state);
// 	},
// 	del(index){
// 		this.state.mang.splice(index, 1);
// 		this.setState(this.state);
// 	},
// 	getInitialState(){
// 		return {mang: ["Android", "IOS"]}
// 	},
// 	render(){
// 		return (
// 			<div>
// 				<NoteFrom addNote={this.add}/>
// 				{this.state.mang.map((e, i) => {
// 					return <Note key={i} remove={this.del} index={i}>{e}</Note>
// 				})}
// 			</div>
// 		);
// 	}
// });

// var NoteFrom = React.createClass({
// 	add(){
// 		var v = this.refs.txt.value;
// 		this.refs.txt.value = '';
// 		this.props.addNote(v);
// 	},
// 	render(){
// 		return (
// 			<div>
// 				<input type="text" ref="txt" placeholder="Enter your note!"/>
// 				<br/><br/>
// 				<button onClick={this.add}>Add</button>
// 			</div>
// 		);
// 	}
// });


var List = require('./comps/List.jsx');

ReactDOM.render(
	<List/>,
	document.getElementById('root')
)