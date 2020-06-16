import React from "react";
import "./App.css";
// import { Greeting, Welcome, Info, Hello, Message } from "./components/Beginner";
// import Counter from "./components/setStateUsage";
// import MyCounter from "./components/bindingEventHandlers";
// import User from "./components/conditionalRendering";
// import styles from "./myStyles.module.css";
// import RefDemo from "./components/RefDemo";
// import FocusInput from "./components/FocusInput";
// import ForwardRefParentInput from "./components/ForwardRefParentInput";
// import PortalDemo from "./components/PortalDemo";
// import ErrorBoundary from "./components/ErrorBoundary";
// import ClickCounter from "./components/HOCDemo/ClickCounter";
// import HoverCount from "./components/HOCDemo/HoverCounter";
// import Counter from "./components/renderPropsDemo/Counter";
// import ClickCounter from "./components/renderPropsDemo/ClickCounter";
// import HoverCounter from "./components/renderPropsDemo/HoverCounter";
import ComponentA from "./components/contextDemo/ComponentA";
import { UserProvider } from "./components/contextDemo/userContext";

function App() {
	return (
		<div className="App">
			{/* <h1 className={styles.success}>SUCCESS</h1> */}
			{/* <Greeting />
			<Welcome name="tyvoiax" stars="5" />
			<Info>
				<Greeting />
				<p>How are you coping</p>
			</Info>
			<Hello name="emma" stars="5" />
			<Message /> */}
			{/* <Counter /> */}
			{/* <MyCounter countBy={5} /> */}
			{/* <User /> */}
			{/* <RefDemo /> */}
			{/* <FocusInput /> */}
			{/* <ErrorBoundary>
				<ForwardRefParentInput />
			</ErrorBoundary>
			<ErrorBoundary>
				<PortalDemo />
			</ErrorBoundary> */}
			{/* <ClickCounter name="ty" />
			<HoverCount /> */}
			{/* <Counter render={(count, incrementCount) => <ClickCounter count={count} incrementCount={incrementCount} />} />
			<Counter render={(count, incrementCount) => <HoverCounter count={count} incrementCount={incrementCount} />} /> */}
			<UserProvider value={{ name: "ty", age: 35 }}>
				<ComponentA />
			</UserProvider>
		</div>
	);
}

export default App;
