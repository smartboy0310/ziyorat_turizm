import React ,{ useState} from 'react';

import './ProvinceHero.css';
import heroVideo from '../../../Assets/videos/video-2.mp4';

function ProvinceHero() {

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
		<section className="hero-province">
          <div className={video ? 'show-bg container' : 'container'}>
          <video className ={video ? 'disactive' : 'video'} src={heroVideo} autoPlay loop muted />
       </div>
       </section>
	);
}

export default ProvinceHero;
