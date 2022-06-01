import React from 'react'  
import { Route, Link } from 'react-router-dom'  
  
//const Contacts = ({ match }) => <p>{match.params.id}</p>  
  
class Contact extends React.Component {  


    constructor(props)
    {
        super(props);
    }

  render() {  
   // const { url } = this.props.match  
    return (  
      <div>  
        <h1>Welcome to Contact Page</h1>  
        <strong>Select contact Id</strong>  
         
      </div>  
    )  
  }  
}  
export default Contact  
