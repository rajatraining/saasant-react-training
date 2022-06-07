import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddItem from './components/AddItems';
import { ListItem } from './components/ListItems';

function App() {
  return (
    <div className='container bg-white p-4 mt-5'>
      Redux Sample App
      <div className='row'>
      <div className='col-lg-6'>
      <AddItem/>
      </div>
      <div className='col-lg-6'>
      <ListItem/>
      </div>
      </div>
      
     
    </div>
  );
}

export default App;
