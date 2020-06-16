import React, { Component } from "react";
import { UserConsumer } from "./userContext";

export default class ComponentC extends Component {
	render() {
		// UserConsumer accepts a function as a child with the value from UserProvider passed as a parameter to the function
		return (
			<UserConsumer>
				{({ name, age }) => (
					<div>
						{name} is {age} younger
					</div>
				)}
			</UserConsumer>
		);
	}
}
