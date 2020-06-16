import React, { Component } from "react";
import ComponentC from "./ComponentC";
import UserContext from "./userContext";

export default class ComponentB extends Component {
	// can also use public class field
	static contextType = UserContext;
	render() {
		return (
			<>
				{this.context.name}
				<ComponentC />
				);
			</>
		);
	}
}

// ComponentB.contextType = UserContext;
