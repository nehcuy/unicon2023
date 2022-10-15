import logo from "./logo.svg";
import React, { useRef, useState, useEffect, useMemo } from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Agenda from "./pages/agenda/Agenda"
import Pricing from "./pages/pricing/Pricing";
import ContactUsPage from "./pages/contact-us/ContactUs";
import SpeakersPage from "./pages/speakers/SpeakersPage";
import TigerLaunchPage from "./pages/tigerlaunch/Tigerlaunch";
import PrivacyPage from "./pages/privacy/PrivacyPage";
import TermsOfUsePage from "./pages/terms-of-use/TermsOfUse";
import TestShootStars from "./pages/test/testShootingStars/TestShootStars";
import StartupBooth from "./pages/startup-booth/StartupBooth";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
function App() {
  // https://stackoverflow.com/questions/39435395/reactjs-how-to-determine-if-the-application-is-being-viewed-on-mobile-or-desktohttps://stackoverflow.com/questions/39435395/reactjs-how-to-determine-if-the-application-is-being-viewed-on-mobile-or-deskto
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [isMobile, setIsMobile] = useState(false)

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight)
  }

  useEffect(()=>{
    console.log(`isMobile? ${isMobile}`)
    setIsMobile(width <= 768);
    // if (isMobile == true){
    //   document.addEventListener('touchstart', touchstart);
    //   document.addEventListener('touchmove', touchmove);

    //   function touchstart(e) {
    //       e.preventDefault()
    //   }

    //   function touchmove(e) {
    //       e.preventDefault()
    //   }
    // }
  },[height,width])

  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  

  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home win_width = {width} win_height = {height}  is_mobile={isMobile} />
        </Route>
        <Route path ="/about">
          <About win_width = {width} win_height = {height}  is_mobile={isMobile} />
        </Route>
        <Route path ="/agenda">
          <Agenda win_width = {width} win_height = {height}  is_mobile={isMobile} />
        </Route>
        <Route path ="/pricing">
          <Pricing win_width = {width} win_height = {height}  is_mobile={isMobile} />
        </Route>
        <Route path ="/tigerlaunch">
          <TigerLaunchPage win_width = {width} win_height = {height}  is_mobile={isMobile} />
        </Route>
        <Route path ="/contact">
          <ContactUsPage win_width = {width} win_height = {height}  is_mobile={isMobile} />
        </Route>
        <Route path ="/speakers/:id">
          <SpeakersPage win_width = {width} win_height = {height}  is_mobile={isMobile} has_id={true} />
        </Route>
        <Route path ="/speakers">
          <SpeakersPage win_width = {width} win_height = {height}  is_mobile={isMobile} has_id={false}/>
        </Route>
        <Route path ="/privacy">
          <PrivacyPage win_width = {width} win_height = {height}  is_mobile={isMobile} />
        </Route>
        <Route path="/terms">
          <TermsOfUsePage win_width = {width} win_height = {height}  is_mobile={isMobile} />
        </Route>
        <Route path="/startup-booth">
          <StartupBooth win_width = {width} win_height = {height}  is_mobile={isMobile} />
        </Route>
        <Route path = "/TestShootingStars">
          <TestShootStars />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
