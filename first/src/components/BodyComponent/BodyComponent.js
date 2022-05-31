import React from "react";

 function BodyComponent(props){
    return (
        <div>
            <h1>This is Body Component name {props.name}</h1>
            <p> {props.dept}</p>
        </div>
        
    );

}

export default BodyComponent; 