import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from '../components/Data';

function ItemDetails({ addToBasket }) {
  const {id} = useParams();
  const item = items.find((i) => i.id === Number(id));
  const [mainImage, setMainImage] = useState(item.images[0]);
  useEffect(() => {
    setMainImage(item.images[0]);
  },[id])
  
  return (
    <div className="itemdetails-container">
         <div className='items-data' key={item.id}>
            <div className='items-details-image'>
              <img className='main-image' src={mainImage} alt={item.name}/>
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
  )
}

export default ItemDetails