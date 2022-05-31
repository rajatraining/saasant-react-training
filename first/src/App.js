import logo from './logo.svg';
import './App.css';
import FirstComponent from  './components/FirstComponent';
import BodyComponent from './components/BodyComponent/BodyComponent';
import Sample from './components/MySampleComponent';

function App() {

  var product_master = [
      {id:101, name:"milk", price:20},
      {id:102, name:"Ice Cream", price:50},
      {id:103, name:"Curd", price:35}
  ]
  


  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Sample name="Shiva"/>

         {product_master.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}

      {product_master[0].id}
         

        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


          <FirstComponent/>
          <BodyComponent name="Archana" dept="CSE" />
          <BodyComponent name="Swathi"/>
          <BodyComponent name="Cibi"/>
          <BodyComponent name="Joel"/>

      </header>
    </div>
  );
}

export default App;
