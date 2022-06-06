import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddItem from './components/AddItems';

function App() {
  return (
    <div className='container bg-white p-4 mt-5'>
      Redux Sample App
      <AddItem/>
    </div>
  );
}

export default App;
