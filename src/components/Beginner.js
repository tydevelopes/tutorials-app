import React, { Component } from "react";

// funtional component without props and state
export const Greeting = () => (
	<div>
		<h1>Hello Guest!</h1>
	</div>
);

// functional component with props, no state
export const Welcome = props => {
	return (
		<div>
			<p>Welcome {props.name} to the amazing world of programming</p>
			<p>You have {props.stars} to begin</p>
		</div>
	);
};

// with destructuring props, alt 1
export const WelcomeAlt1 = ({ name, stars }) => {
	return (
		<div>
			<p>Welcome {name} to the amazing world of programming</p>
			<p>You have {stars} to begin</p>
		</div>
	);
};

// with destructuring, alt 2
export const WelcomeAlt2 = props => {
	const { name, stars } = props;
	return (
		<div>
			<p>Welcome {name} to the amazing world of programming</p>
			<p>You have {stars} to begin</p>
		</div>
	);
};

// functional component with children props
export const Info = props => <div>{props.children}</div>;

// class equivalent of Welcome component
export class Hello extends Component {
	render() {
		return (
			<div>
				<p>Welcome {this.props.name} to the amazing world of programming</p>
				<p>You have {this.props.stars} to begin</p>
			</div>
		);
	}
}

// class component with state
export class Message extends Component {
	constructor() {
		super();
		this.state = {
			message: "Welcome guest",
		};
	}
	changeMessage() {
		this.setState({
			message: "Thank you for subscribing",
		});
	}
	render() {
		return (
			<div>
				<p>{this.state.message}</p>
				<button onClick={() => this.changeMessage()}>Subscribe</button>
			</div>
		);
	}
}

// class component with state using destructuring
export class MessageAlt extends Component {
	constructor() {
		super();
		this.state = {
			message: "Welcome guest",
		};
	}
	changeMessage() {
		this.setState({
			message: "Thank you for subscribing",
		});
	}
	render() {
		const { message } = this.state;
		return (
			<div>
				<p>{message}</p>
				<button onClick={() => this.changeMessage()}>Subscribe</button>
			</div>
		);
	}
}
