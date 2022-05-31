import React from "react";
import ReactDOM from 'react-dom/client';
import FirstComponent from "./FirstComponent";

class Sample extends React.Component{


    constructor(props)
    {
        super(props);
    }



    render()
    {
       return (
           <div>
               This is Sample Component {this.props.name}

               <FirstComponent/>
           </div>
       ); 
    }
}

export default Sample;