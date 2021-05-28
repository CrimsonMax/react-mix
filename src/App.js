import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Burger } from './components/Burger';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/burger' component={Burger} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
