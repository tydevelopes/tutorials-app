import React, { Component, createRef } from "react";

export default class RefDemo extends Component {
	constructor(props) {
		super(props);
		this.inputRef = createRef();
		this.callbackRef = null;
		this.setCallbackRef = element => (this.callbackRef = element);
	}

	componentDidMount() {
		// this.inputRef.current.focus();
		// console.log(this.inputRef);

		if (this.callbackRef) {
			this.callbackRef.focus();
		}
	}

	render() {
		return (
			<div>
				<label>With React.createref</label>
				<input type="text" ref={this.inputRef} />
				<label>With callbackref</label>
				<input type="text" ref={this.setCallbackRef} />
			</div>
		);
	}
}
