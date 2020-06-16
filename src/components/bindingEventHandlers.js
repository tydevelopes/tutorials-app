import React, { Component } from "react";

export default class MyCounter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
		};
		this.counterHandlerBindInConstructor = this.counterHandlerBindInConstructor.bind(this);
	}

	// Handlers
	// 1) Handler bind to this in the render method
	counterHandlerBindInRender() {
		this.setState((prevState, props) => ({
			counter: prevState.counter + props.countBy,
		}));
	}

	// 2) Handler in arrow function in the render method
	counterHandlerInArrowFuncInRender() {
		this.setState((prevState, props) => ({
			counter: prevState.counter + props.countBy,
		}));
	}

	// 3) Handler bind to this in the constructor method
	counterHandlerBindInConstructor() {
		this.setState((prevState, props) => ({
			counter: prevState.counter + props.countBy,
		}));
	}

	// 4) Arrow function as class property
	counterHandlerWithClassProperty = () => {
		this.setState((prevState, props) => ({
			counter: prevState.counter + props.countBy,
		}));
	};

	render() {
		return (
			<div>
				<h2>{this.state.counter}</h2>
				<button onClick={this.counterHandlerBindInRender.bind(this)}>increment</button>
				<button onClick={() => this.counterHandlerInArrowFuncInRender()}>increment</button>
				<button onClick={this.counterHandlerBindInConstructor}>increment</button>
				<button onClick={this.counterHandlerWithClassProperty}>increment</button>
			</div>
		);
	}
}
