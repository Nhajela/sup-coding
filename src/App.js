
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from "./components/header/header.component"

import Hero from "./components/hero/hero.component"




function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
     
      <Router>

        <Switch></Switch>



      </Router>


    </div>
  );
}

export default App;
