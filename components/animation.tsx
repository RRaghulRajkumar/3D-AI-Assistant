// components/EmbeddedVideo.js https://www.kapwing.com/e/658cf88b52be84ea2087be43
/*allow="autoplay; gyroscope;"
        allowFullScreen  src="https://www.kapwing.com/e/658e55b37cab593b95163573" h-[385.89px] w-[270px]
        relative h-[600px]  w-[600px] rounded-lg 
        */
import React from 'react';
                
const EmbeddedVideo = () => {
return (
<div className="relative h-[500px]  w-[500px] rounded-lg">
<iframe
    height="100%"
    referrerPolicy="strict-origin"
    src="https://www.kapwing.com/e/6594f42875cd47b1ed40f0f6"
    style={{ border: 0, height: '100%', left: 0, overflow: 'hidden', position: 'absolute', top: 0, width: '100%' }}
    width="100%">
  </iframe>
</div>);};
                
                          
export default EmbeddedVideo;
                          
                          
                
        