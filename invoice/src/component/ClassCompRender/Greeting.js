
export default function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <h1> Login Success</h1>; 
    }
    return <h1> Logout Success</h1>; 
  }
