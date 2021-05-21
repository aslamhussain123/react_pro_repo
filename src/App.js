import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './components/pages/home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Signup from './components/pages/Signup';
import Footer from './components/Footer';
import Shop from './components/Shop';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={ home } />
          <Route path="/services" exact component={ Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/signup" exact component={ Signup } />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
