import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Burger } from './components/Burger';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Pagination } from './components/Pagination';
import { Popup } from './components/Popup';
import { Dragndrop } from './components/Dragndrop';
import { DragndropAdvance } from './components/DragndropAdvance';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/burger' component={Burger} />
          <Route path='/popup' component={Popup} />
          <Route path='/pagination' component={Pagination} />
          <Route path='/dragndrop' component={Dragndrop} />
          <Route path='/dragndropadvance' component={DragndropAdvance} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
