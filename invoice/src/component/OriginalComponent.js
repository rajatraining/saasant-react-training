import React from "react";
import "./App.css"
import EnhancedComponent from './Hoc'

class MyApp extends React.Component {
render() {
	// Call the props from originalComponent
	return <h1>{this.props.name}</h1>
}
}

// Passed the originalcomponent
export default EnhancedComponent(MyApp);
