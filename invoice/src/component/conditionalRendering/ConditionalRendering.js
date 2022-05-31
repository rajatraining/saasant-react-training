import Login from './Login';
import Logout from './Logout';

export default function ConditionalRendering(props)
{

    const isLoggedIn = props.loggedin;

    console.log(props.loggedin);

    if(isLoggedIn == "true"){
      return <Login />
    }
    else{
      return  <Logout />
    }
    
    
}