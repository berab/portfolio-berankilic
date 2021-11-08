import './App.css';

import Name from './components/Name';
import AboutMe from './components/AboutMe';
import PokemonApp from './components/PokemonApp';
import Qnn from './components/Qnn';
import Skills from './components/Skills';
import QuoteOne from './components/QuoteOne';
import QuoteTwo from './components/QuoteTwo';
import { useState, useEffect } from 'react';

function App() {

  const [offsetY, setOffsetY] =  useState(0); // used to store scrolling amount data
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll); // not to overdo! we dont want it to listen 
     // while not scrolling at all
   }, [])

   console.log(window.innerWidth)
   console.log(window.pageYOffset)

  
  return (
    <>
    <Name/>
    <AboutMe offsetY = {offsetY}/>

    <QuoteOne offsetY = {offsetY}/>
    <PokemonApp offsetY = {offsetY}/>

    <QuoteTwo offsetY = {offsetY}/>
    <Qnn offsetY = {offsetY}/>
    
    <Skills offsetY = {offsetY}/>
    </>
  );
}

export default App;