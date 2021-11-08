import { useState, useEffect } from 'react';

function QuoteTwo(props) {
   const [slider, setSlider] = useState('');

   useEffect(() => {
    if (window.innerWidth < 768   && props.offsetY > 775){
      setSlider('quote1')
    }
    else if(props.offsetY > 3290){
      setSlider('quote2')
    }
    }, [props.offsetY, slider])
 
   return (  
      <div className='h-96 md:h-screen flex items-center justify-center'>
          <p className='w-9/12 text-center 2xl:text-7xl '>
            “People who are serious about <span className={`text-purple-600 ${slider}`}>software</span> should make their 
            <span className={`text-purple-600 ${slider}`}> own hardware</span>.”
          </p>
      </div>
   );
}

export default QuoteTwo;