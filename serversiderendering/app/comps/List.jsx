var React = require('react');
var Note = require('./Note.jsx');
var NoteFrom = require('./NoteFrom.jsx');
var List = React.createClass({
	add(text){
		this.state.mang.push(text);
		this.setState(this.state);
	},
	del(index){
		this.state.mang.splice(index, 1);
		this.setState(this.state);
	},
	getInitialState(){
		return {mang: ["Android", "IOS"]}
	},
	render(){
		return (
			<div>
				<NoteFrom addNote={this.add}/>
				{this.state.mang.map((e, i) => {
					return <Note key={i} remove={this.del} index={i}>{e}</Note>
				})}
			</div>
		);
	}
});
module.exports = List;