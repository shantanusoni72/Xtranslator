import Menu from './Components/Menu/menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Menu } />
      </Switch>
    </Router>
  );
}

export default App;
