import './App.css';
import Header from "./navBar/navBar";
import React from 'react';
import Home from "./hero/hero";
import Intro from "./introPage/introPage";
import Rules from "./rulesPage/rulesPage";
import FQAs from './fQAs/fQAs.jsx';
import Judge from './judging/judging';
import Price from './Price&Award/price';
import Partners from './partners&s/partners&s';
import Privacy from './privacyPage/privacy';
import Footer from './footer/footer';


function App() {
  return (
    <div className="App">
        <Header/>
        <Home/>
        <Intro/>
        <Rules/>
        <Judge/>
        <FQAs/>
        <Price/>
        <Partners/>
        <Privacy/>
        <Footer/>
    </div>
  );
}

export default App;
