import React, { Component } from "react";

export default class ClickCounter extends Component {
	render() {
		const { count, incrementCount } = this.props;
		return (
			<div>
				<div>
					<button onClick={incrementCount}>Clicked {count} times</button>
				</div>
			</div>
		);
	}
}
