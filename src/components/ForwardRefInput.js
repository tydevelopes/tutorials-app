import React from "react";

const ForwardRefInput = React.forwardRef((props, ref) => {
	return (
		<div>
			<input ref={ref} />
		</div>
	);
});

export default ForwardRefInput;
