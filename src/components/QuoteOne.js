import { useState, useEffect } from 'react';

function QuoteOne(props) {
  const [slider, setSlider] = useState('');
  useEffect(() => {
    if (window.innerWidth < 768   && props.offsetY > 125){
      setSlider('quote1')
    }
    else if(props.offsetY > 1300){
      setSlider('quote1')
    }
   }, [props.offsetY, slider])

   return ( 
      <div className='h-32 md:h-screen flex items-center justify-center'>
          <p className='w-5/6 text-center md:text-7xl '>
            “The only way to do a <span className={`text-pink-600 ${slider}`}>great work</span> is  to 
            <span className={`text-pink-600 ${slider}`}> love</span> what you do.”
          </p>
      </div>
    );
}

export default QuoteOne;