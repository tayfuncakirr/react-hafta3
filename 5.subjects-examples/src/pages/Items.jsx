import React from 'react'
import { items } from '../components/Data'

function Items() {
  return (
    <>
    <div className='items'>
        {items && items.map((item) => (
            <div className='item-container' key={item.id}>
                 <img src={item.image} alt="" />
                 <div className='items-text'>
                  <h3>{item.name}</h3>
                  <p>{item.title}</p>
                  <h3>{item.price} TL</h3>
                 </div>
                
            </div>
        ))}
        </div>
        </>
  )
}

export default Items