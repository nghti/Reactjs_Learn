class Note extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			HocVien: 10
		}
		this.ThemHocVien = this.ThemHocVien.bind(this);
	}
	ThemHocVien(){
		this.setState({HocVien: this.state.HocVien + 1});
	}
	render() {
		return (
			<div>
				<p>{this.props.txt}</p>
				<p>So Hoc Vien: {this.state.HocVien}</p>
				<button onClick={this.ThemHocVien}>Add</button>
			</div>	
		);
	}
}

Note.defaultProps = {
	txt: 'HoangTu'
}

ReactDOM.render(
	<div>
		<Note/>
		<Note txt="NodeJS"/>
	</div>, 
	document.getElementById('root'));