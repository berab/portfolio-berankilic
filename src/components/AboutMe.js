import { useState, useEffect } from 'react';

function AboutMe(props) {
  const [slider, setSlider] = useState('aboutme');

  useEffect(() => {
    if (window.innerWidth < 768){
      setSlider('aboutme-animation')
    }
    else if(props.offsetY > 320){
      setSlider('aboutme-animation')
    }
   }, [props.offsetY, slider])
   
   return (
   <section>
    <div className='h-96 md:h-screen grid'>
      <div>
        <p className={`${slider} md:opacity-10 md:mt-96 md:ml-0 ml-12 font-bold flex`}>ABOUT ME</p>
        <p className=' ml-12 md:ml-48 absolute subtitle md:-mt-36  md:text-4xl w-8/12'>Front-end developer who loves to design
        and implement for the best user experience. Deeply into machine learning algorithms and their efficiency
        in embedded platforms.</p>
      </div>
    </div>
    </section>
   );
}


export default AboutMe;