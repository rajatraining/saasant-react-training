import logo from './logo.svg';
import './App.css';
import { ListItem } from './components/ListItems';
import AddItem from './components/AddItems';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
     <Provider store={store}>
    <div className="App">
      <ListItem />
      <AddItem />
    </div>
    </Provider>
  );
}

export default App;
