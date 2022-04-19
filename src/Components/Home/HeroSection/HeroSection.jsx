import React ,{ useState} from 'react';

import './HeroSection.css';
import heroVideo from '../../../Assets/videos/video-1.mp4';

function HeroSection() {

   const [video, setVideo] = useState(false)

   const videoShow = () => {
     if(window.scrollY >=1000 ) {
       setVideo(true)
     } else {
       setVideo(false)
     }
   }
 
   window.addEventListener('scroll', videoShow)
 
    return (
       <section className="hero">
          <div className={video ? 'show-bg container' : 'container'}>
          <video className ={video ? 'disactive' : 'video'} src={heroVideo} autoPlay loop muted />
          <h1 className='hero__heading'>WELCOME TO UZBEKISTAN</h1>
          <p className='hero__paragraph'>What are you waiting for?</p>
       </div>
       </section>
    );
}

export default HeroSection
