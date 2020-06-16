import React, { Component } from "react";

export default class HoverCounter extends Component {
	render() {
		const { count, incrementCount } = this.props;
		return (
			<div>
				<div>
					<h2 onMouseOver={incrementCount}>Hover {count} times</h2>
				</div>
			</div>
		);
	}
}
