import Header from './container/Include/Header/Header';
import Footer from './container/Include/Footer/Footer';
import Home from './component/Home/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Switch>
            <Route path="/react_prinnovation" exact component={Home} />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
