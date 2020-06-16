import React, { Component } from "react";

export default class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	// 	• Always make use of setState and never modify the state directly.
	increment() {
		this.setState({
			count: this.state.count + 1,
		});
	}

	// to execute code after the state has been updated? Place that code in the call back function which is the second argument to the setState method
	// setState with callback
	decrement() {
		this.setState(
			{
				count: this.state.count - 1,
			},
			() => console.log(`Counter decremented, count is now: ${this.state.count}`)
		);
	}

	// When you have to update state based on the previous state value, pass in a function as an argument instead of regular object
	trippleCount() {
		this.setState((prevState, props) => ({
			count: prevState.count * 3,
		}));
	}

	render() {
		return (
			<div>
				<h2>{this.state.count}</h2>
				<button onClick={() => this.increment()}>increase</button>
				<button onClick={() => this.decrement()}>decrease</button>
				<button onClick={() => this.trippleCount()}>tripple</button>
			</div>
		);
	}
}
