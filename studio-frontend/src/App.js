import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home.component";
import Services from "./components/services.component";
import Contacts from "./components/contact.component";
import Navigation from "./components/navbar.component";
import Success from "./components/success.component";
import Fail from "./components/fail.component";
import Message from "./components/message.component";
import Footer from "./components/footer.component";
import { missionStatement } from "./data-1"
import Hours from './components/Hours';
import Who from './components/Who';
import Contact from './components/contact.component';
import MidBanner from './components/MidBanner';
import Map from './components/Map';



const Main = () =>{
  return (
    <div>
    <Home/>
    <Hours/>
    <Who/>
    <Contact/>
    <MidBanner/>
    <Map/>
    </div>
   
  )
}


function App() {
  return (
    <div className="App">
    <Router>
      <Navigation />
      <Route exact path="/" component={Main} />
      <Route path="/success" component={Success} />
      <Route path="/fail" component={Fail} />
      <Route path="/message" component={Message} />
      <Route path="/services" component={Services}/>
      <Route path="/about" component={() =>{
        return(
          <>
        <Hours/>
        <Who/>
        </>
      )}}/>
      <Route path="/contact" component={() =>{
        return(
          <>
          <Contact/>
          <Map/>
          </>
        )
        }}/>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
