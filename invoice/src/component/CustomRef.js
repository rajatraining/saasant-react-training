import React from "react";
class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
      // create a ref to store the textInput DOM element
      this.textInput = React.createRef();
      this.nextInput = React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
      this.mybutton = React.createRef(); 
     
    }
  
    focusTextInput() {
      // Explicitly focus the text input using the raw DOM API
      // Note: we're accessing "current" to get the DOM node
      this.textInput.current.focus();

     // this.mybutton.current.focus();
     // this.nextInput.current.
    }
  
    render() {
      // tell React that we want to associate the <input> ref
      // with the `textInput` that we created in the constructor
      return (
        <div>
          <input
            type="text"
            ref={this.textInput} />
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          />
          <input
            type="text"
            ref={this.nextInput} />

          <button ref={this.mybutton}>This is my button</button>



        </div>
      );
    }
  }

  export default CustomTextInput; 