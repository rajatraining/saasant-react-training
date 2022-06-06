import React from 'react';
import { TypeContext } from '../App';


class StateComponent extends React.Component{

    // Before anything else
    constructor(props)
    {
        super(props);
        this.state={name:"Raja", dept:"IT"};

        // props is used for read only 
        // state is modifiable
    }


    render()
    {
       // this.state.name = "Joel";
       console.log(this.state);
        return(
            <div>

                <TypeContext.Consumer>
                    {value=> {
                       <>  This value from Parent {value['location']}</>
                    }}
                </TypeContext.Consumer>

                This is State Component.! {this.state.name} {this.state.dept}
            </div>
        );
    }


}

export default StateComponent;

