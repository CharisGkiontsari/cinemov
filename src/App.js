import logo from './logo.png';
import './App.css';
import Nav from './Nav'
import Home from './Home'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Home />
      </div>
    </Router>
  );
}

export default App;
