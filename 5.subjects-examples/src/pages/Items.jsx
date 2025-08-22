import React from 'react'
import { items } from '../components/Data'
import { useNavigate } from 'react-router-dom'

function Items() {
  const navigate = useNavigate();
  return (
    <>
    <div className='items'>
        {items && items.map((item) => (
            <div className='item-container' key={item.id}
            onClick={() =>navigate(`/item-details/${item.id}`)} >
                 <img src={item.image} alt="" />
                 <div className='items-text'>
                  <h3>{item.name}</h3>
                  <p>{item.title}</p>
                  <h3>{item.price} TL</h3>
                  <button className='add-btn'>Sepete Ekle</button>
                 </div>
                
            </div>
        ))}
        </div>
        </>
  )
}

export default Items