import { useState, useEffect } from 'react';

function Qnn() {
   const [offsetQnnY, setOffsetQnnY] =  useState(0);

   const handleScroll = () => {
      setOffsetQnnY(window.pageYOffset-4500)
    }
   
   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll); // not to overdo! we dont want it to listen 
   // while not scrolling at all
   }, [])

   return (
      <section>
      <div className='h-96 md:h-screen flex'>
        
        <div className='relative mt-32 ml-12 md:ml-48 max-w-screen-sm	'>
          <p className='md:text-5xl font-bold  '>QNN Research Project</p>
          <p className='mt-6 md:text-4xl text-gray-700  '>Machine Learning Engineer</p>
          <p className='mt-12  md:text-3xl '>Research project about deploying mixed-precision 
          DNNs on Alveo U280 and benchmarking them.</p>
        </div>
        
        <div className='hidden md:flex'>
          <img className='mt-72 absolute rounded-full'  style={{ transform: `translateY(${-offsetQnnY * 0.6}px) scale(0.60, 0.60)` }} src='https://raw.githubusercontent.com/Xilinx/Vitis-AI/master/docs/images/Vitis-AI.png ' alt='vitisai'></img>
          <img className='mt-96 ml-48 ' style={{ transform: `translateY(${-offsetQnnY }px) scale(0.5, 0.5)` }} src='https://fastmachinelearning.org/hls4ml/_images/hls4ml_logo.png ' alt='hls4ml'></img>
        </div>
        
      </div>
      </section>

   );
}


export default Qnn;