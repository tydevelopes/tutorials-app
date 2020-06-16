import React, { Component } from "react";

// inline styling
const styleProperties = {
	color: "purple",
	fontSize: "2rem",
};

export default class User extends Component {
	constructor() {
		super();
		this.state = {
			isAdmin: true,
		};
	}

	render() {
		// 1) with if/else
		// if (this.state.isAdmin) {
		// 	return <h1>Welcome Admin</h1>;
		// } else {
		// 	return <h1>Welcome user</h1>;
		// }

		// 2) with element variable
		// let message = null;
		// if (this.state.isAdmin) {
		// 	message = <h1>Welcome Admin</h1>;
		// } else {
		// 	message = <h1>Welcome user</h1>;
		// }
		// return <div>{message}</div>;

		// 3) with ternary operator
		// return this.state.isAdmin ? <h1>Welcome Admin</h1> : <h1>Welcome user</h1>;

		// 4) with short circuit operator
		return this.state.isAdmin && <h1 style={styleProperties}>Welcome Admin</h1>;
	}
}
