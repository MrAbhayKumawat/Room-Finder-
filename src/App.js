import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Rooms from './components/Rooms';
import Room from './components/Room';
import About from './components/About';
import Page100 from './components/Page100';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import Login from './auth/login/login';
import Register from './auth/register/register';

function App() {
  const token = localStorage.getItem("token");

  return (
    <div className="App">
      <MyNavbar />
      <Switch>
        <Route path="/rooms/:id">
          {token ? <Room /> : <Redirect to="/" />}
        </Route>
        <Route path="/rooms">
          {token ? <Rooms /> : <Redirect to="/" />}
        </Route>
        <Route path="/about">
          {token ? <About /> : <Redirect to="/" />}
        </Route>
        <Route path="/home" exact>
          {token ? <Home /> : <Redirect to="/" />}
        </Route>
        <Route path="/login" exact>
          {token ? <Redirect to="/home" /> : <Login />}
        </Route>
        <Route path="/register" exact>
          {token ? <Redirect to="/home" /> : <Register />}
        </Route>
        <Route path="*">
          <Page100 />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
