import './App.css'
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Rooms from './components/Rooms'
import Room from './components/Room'
import About from './components/About'
import Page100 from './components/Page100'
import MyNavbar from './components/MyNavbar'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <MyNavbar />

      <Switch>
        <Route path="/rooms/:id" > <Room /> </Route>
        <Route path="/rooms" > <Rooms /> </Route>
        <Route path="/about" > <About /> </Route>
        <Route path="/" exact> <Home /> </Route>
        <Route path="*" > <Page100 /> </Route>
      </Switch>

    <Footer />
    </div>
  );
}

export default App;
