import React, { useEffect, useState } from 'react'
import slider1 from "../components/images/slider1.png"
import slider2 from "../components/images/slider2.png"
import slider3 from "../components/images/slider3.png"


function Home() {
  const images = [slider1, slider2, slider3];
  const [current, setCurrent] = useState(0);

  useEffect(() =>{
    console.log("interval kuruldu");
    const interval = setInterval(()=>{
        setCurrent((prev) => (prev + 1 === images.length ? 0 : prev + 1));
    }, 5000);
    return () => {
      console.log("interval temizlendi.");
      clearInterval(interval);
    }
  },[])
  return (
    <div className='slider-container'>
      {
        images.map((img,index) =>(
          <img 
          src={img}
          key={index} 
          className='slider-image'
          data-active={index === current} />
        ) )
      }

    </div>
  )
}

export default Home