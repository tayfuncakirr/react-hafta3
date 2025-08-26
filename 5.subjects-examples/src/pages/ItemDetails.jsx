import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from '../components/Data';
import { LiaTimesSolid } from "react-icons/lia";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

function ItemDetails({ addToBasket }) {
  const {id} = useParams();
  const item = items.find((i) => i.id === Number(id));
  const [mainImage, setMainImage] = useState(item.images[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    setMainImage(item.images[0]);
  },[id])
  
  return (
    <>
    {
        isModalOpen && (
        <div className='modal-overlay'>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="exit" onClick={() => setIsModalOpen(false)}><LiaTimesSolid/></button>
            <button className="prev" onClick={() => setCurrentIndex((prev) => (prev -1 + item.images.length) % item.images.length)}><GrPrevious/></button>
            <img src={item.images[currentIndex]} alt="fullscreen" className="modal-image" />
            <button className="next" onClick={() => setCurrentIndex((prev) =>(prev +1 ) % item.images.length)}><GrNext/></button>
          </div>
        </div>
      )}
    <div className="itemdetails-container">
         <div className='items-data' key={item.id}>
            <div className='items-details-image'>
              <div className='main-image'>
                <img
                 src={mainImage} 
                 alt={item.name}
                 onClick={()=> {
                  setIsModalOpen(true);
                  setCurrentIndex(item.images.indexOf(mainImage));
                 }}
                 />
              </div>
              <div className='items-details-slide-image' >
              {item.images.map((img,index) => (
              <img 
                key={index}
                src={img} 
                alt={`${item.name}-${index}`} 
                style={{border: mainImage === img ? "1px solid blueviolet" : "1px solid #fff"}}
                onClick={()=> setMainImage(img)} />
                
            ))}
            </div>
            </div>
            <div className='items-details-text'>
             <h2>{item.name}</h2>
             <h2>{item.title}</h2>
             <h2>{item.price} TL</h2>
             <button onClick={()=> addToBasket(item)} className='item-details-basket-btn'>Sepete Ekle</button>
            </div>
          </div>
    </div>
    </>
  )
}

export default ItemDetails