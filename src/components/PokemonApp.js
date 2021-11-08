import { useState, useEffect } from 'react';

function PokemonApp() {

   const [offsetY, setOffsetY] =  useState(0); // used to store scrolling amount data
   const pokemons = {
      balba: 'https://upload.wikimedia.org/wikipedia/en/2/28/Pok%C3%A9mon_Bulbasaur_art.png',
      char: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Pok%C3%A9mon_Charmander_art.png',
      pika: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_Pikachu_art.png',
      jiggly: 'https://upload.wikimedia.org/wikipedia/en/2/22/Pok%C3%A9mon_Jigglypuff_art.png'
  
    };

   const handleScroll = () => {
     setOffsetY(window.pageYOffset-2300)
   }

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll); // not to overdo! we dont want it to listen 
      // while not scrolling at all
    }, [])
  
   return (
      <section>
      <div className='h-96 md:h-screen flex relative'>
        <div className='relative mt-32 ml-12 md:ml-48'>
          <p className='2xl:text-5xl font-bold  '>Pokémon App</p>
          <p className='mt-6 2xl:text-4xl text-gray-700  '>Full-stack Developer, UI Designer</p>
          <p className='mt-12  2xl:text-3xl w-3/6'>Web app project that allows user to 
          examine Pokédex and catch/fav pokemons.</p>
      </div>
        
        <img className='hidden md:flex md:absolute right-0 top-0 mt-96 mr-16' style={{transform: `translateY(${-offsetY}px) scale(.75, .75)`}} 
          src='https://i.ibb.co/vcYJrRh/pokepoke.png' alt='ipad'></img>
        <div className='bottom-0 opacity-75 ml-48 mt-80 hidden md:flex md:absolute'>
          <img className='ml-12 mt-12 rounded-full w-32 h-32	' style={{ transform: `translateY(${-offsetY * 0.4}px)` }} alt='jiggly' src={pokemons.jiggly}></img>
          <img className='mt-72 ml-32 rounded-full w-32 h-32	' style={{ transform: `translateY(${-offsetY }px)` }} alt='pika' src={pokemons.pika}></img>
          <img className='ml-72 mt-96 rounded-full w-32 h-32	' style={{ transform: `translateY(${-offsetY * 0.9}px)` }} alt='char' src={pokemons.char}></img>
          <img className='-ml-16 rounded-full w-32 h-32	' style={{ transform: `translateY(${-offsetY * 0.6}px)` }} alt='balba' src={pokemons.balba}></img>
        </div>
      </div>
      </section>
      

   );
}


export default PokemonApp;