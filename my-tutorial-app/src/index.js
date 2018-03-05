import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* B2
const user = {
	name: "Hoang",
	email: "nghti8020@gmail.com"
};
// const element = <h1> hello tu, my name is: {user.name}, and email: {user.email} </h1>
const element = (
	<div>
		<h1 className="hello">hello tu</h1>
		<h2>hello tu, my name is: {user.name}, and2 email: {user.email}</h2>
	</div>
);
var numbers = [1,2,3,4,5];
var doubleNumbers = numbers.map((eachNumber) => eachNumber * 2 + ", ");
ReactDOM.render(<h1> doubleNumbers is : {doubleNumbers} </h1>,
				document.getElementById('root'));


*/

/* B3
function updateTimer() {
	counter = counter + 1;
	console.log("Updating..." + counter);
}

var counter = 0;
setInterval(updateTimer, 1000);
*/

/* B3-1
function updateTimer() {
	const element = (
		<div>
			<h1>Timer update example</h1>
			<h2>Curent timer is: {new Date().toLocaleTimeString()}</h2>
		</div>
	);
	ReactDOM.render(
		element,
		document.getElementById('root')
	);
}

setInterval(updateTimer, 1000);
*/

/* B4
function UserInfo(props) {
	return (
		<div>
			<p>Name: {props.name} </p>
			<p>Name: {props.email} </p>
		</div>
	);
}
const element = <UserInfo name="Tu" email="nghti8020@gmail.com"/>;
ReactDOM.render(
	element,
	document.getElementById('root')
);
*/

/*
class UserDetail extends React.Component {
	render() {
		return (
			<div>
				<p>Name: {this.props.name} </p>
				<p>mail: {this.props.email} </p>
			</div>
		);
	}
}
class Info extends React.Component {
	render() {
		return (
			<div>
				<p>info: {this.props.info} </p>
			</div>
		);
	}
}
class UserInfo extends React.Component {
	render() {
		return (
			<div>
				<UserDetail name={this.props.name} email={this.props.email}/>
				<Info info={this.props.info}/>
			</div>
		);
	}
}
const element = <UserInfo name="Mup" email="Gym@gmail.com" info="I love Gym"/>;
ReactDOM.render(
	element,
	document.getElementById('root')
);
*/

/* B5
class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {seconds: 0};
	}
	incrementCounter() {
		this.setState(
			(prevState, props) => ({
				seconds: prevState.seconds + 1
			})
		);
	}
	componentDidMount() {
		this.timerID = setInterval(
			() => this.incrementCounter(),
			1000
		);
	}
	conponentWillUnmount() {
		clearInterval(this.timerID);
	}
	render() {
		return (
			<div>
				<h1>This is a counting machine!</h1>
				<h2>seconds: {this.state.seconds} s </h2>
			</div>
		);
	}
}

ReactDOM.render(
	<Counter />,
	document.getElementById('root')
);
*/

/*
class ToggleButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isOn: true};
	}
	buttonClick = () => {
		this.setState(preState => (
			{
				isOn: !preState.isOn
			}
		))
	}
	render() {
		return (
			<button className="ToggleButton" onClick={this.buttonClick}>
				Submit: 
				{this.state.isOn ? "On": "OFF"}
			</button>
		);
	}
}
ReactDOM.render(
	<ToggleButton />,
	document.getElementById('root')
);
*/

class LoginComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isLoggedIn: false};
	}
	handleLogout = () => {
		this.setState({isLoggedIn: false});
	}
	handleLogin = () => {
		this.setState({isLoggedIn: true});
	}
	render() {
		let myButton = null;
		if(this.state.isLoggedIn) {
			myButton = <button onClick={this.handleLogout}>Logout</button>
		} else {
			myButton = <button onClick={this.handleLogin}>Login</button>
		}
		return (
			<div>
				{myButton}
			</div>
		)
	}
}

ReactDOM.render(
	<LoginComponent />,
	document.getElementById('root')
);

// registerServiceWorker();
