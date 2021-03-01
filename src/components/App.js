import '../styles/App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Surreal Estate</h1>
      <Switch>
        <Route exact path="/">
          <Properties />
        </Route>
        <Route path="/add-property">
          <AddProperty />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
