import {ReactComponent as Linked} from '../linkedin.svg';
import { ReactComponent as Git } from '../icons8-github.svg';
import { ReactComponent as Xing } from '../xing.svg';
import { useState, useEffect } from 'react';

function Skills(props) {
  const [slider, setSlider] = useState('aboutme');

  useEffect(() => {
    if (window.innerWidth < 768   && props.offsetY > 1450){
      setSlider('aboutme-animation')
    }
    else if(props.offsetY >4800){
      setSlider('aboutme-animation ')
    }
   }, [props.offsetY, slider])

  const linkedinHandler = () => {
      var windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
      window.open("http://www.linkedin.com/", "linkedin", windowFeatures);
    }
  const xingHandler = () => {
    var windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
    window.open("http://www.xing.com/", "xing", windowFeatures);
  }
  const gitHandler = () => {
    var windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
    window.open("http://www.github.com/", "github", windowFeatures);
  }

    
   return (     
   <section className=' relative h-96 md:h-screen'>
   <p className={` ${slider} relative  md:opacity-10 ml-12 md:ml-48  md:text-7xl font-bold flex justify-right`}>SKILLS</p>

   <div className=" ml-12 md:ml-48 md:-mt-32 absolute grid grid-cols-2 gap-4">
     <div>
       <p className=' md:text-6xl  flex justify-right'>React</p>
       <p className=' md:text-6xl  flex justify-right'>Node.js</p>
     </div>
     <div>
       <p className=' md:text-6xl  flex justify-right'>PyTorch</p>
       <p className=' md:text-6xl  flex justify-right'>OpenCV</p>
     </div>
     <div>
       <p className=' mt-16 md:text-6xl  flex justify-right'>Responsive Design</p>
       <p className=' md:text-6xl  flex justify-right'>User Experience</p>
     </div>
     <div>
       <p className=' mt-16 md:text-6xl  flex justify-right'>ML Algorithms</p>
       <p className=' md:text-6xl  flex justify-right'>Embedded Systems</p>
     </div>
   </div>
   <div className=' mt-60 absolute md:left-0 ml-12 md:ml-48'>
   <div className=' mb-0 md:mb-12 md:mt-96 flex'>
     <Linked onClick={linkedinHandler} className='logos w-6 h-6  md:w-32  md:h-32'/>
     <Xing onClick={xingHandler} className='logos w-6 h-6 ml-16  md:w-32  md:h-32'/>
     <Git onClick={gitHandler} className='logos w-6 h-6 ml-16  md:w-32  md:h-32'/>

   </div>
   </div>
  

   </section>
  );
}

export default Skills;