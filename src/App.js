import Home from './components/Home'
import "./App.css";
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Details from './components/Details';
import Pagelogin from './components/Pagelogin';
import Details2 from './components/Details2';
import Listservices from './components/Listservices';
import Offres from './components/Offres';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/service1" component={Details} />
        <Route path="/service2" component={Details2} />
        <Route path="/Listservices" component={Listservices} />
        <Route path="/Pagelogin" component={Pagelogin} />
        <Route path="/Offres" component={Offres} />
      </Switch>
    </Router>

  );
}

export default App;
