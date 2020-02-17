import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home.component";
import Services from "./components/services.component";
import About from "./components/about.component";
import Contacts from "./components/contact.component";
import Navbar from "./components/navbar.component";
import Success from "./components/success.component";
import Fail from "./components/fail.component";
import Message from "./components/message.component";
import Footer from "./components/footer.component";
import { threading, waxing, hairServices, bodyWaxing, color, facial, specialOccasions, makeup, missionStatement } from "./data-1"

const Main = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services
        threading={threading}
        waxing={waxing}
        hairServices={hairServices}
        bodyWaxing={bodyWaxing}
        color={color}
        facial={facial}
        specialOccasions={specialOccasions}
        makeup={makeup} />
      <About missionStatement={missionStatement} />
      <Contacts />
      <Footer />
    </div>
  )
}


function App() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route path="/success" component={Success} />
      <Route path="/fail" component={Fail} />
      <Route path="/message" component={Message} />
    </Router>
  );
}

export default App;
