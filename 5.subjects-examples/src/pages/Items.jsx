import React from 'react'
import { items } from '../components/Data'

function Items() {
  return (
    <>
    <h2 className='item-title'>Ürünler</h2>
    <div className='items'>
        {items && items.map((item) => (
            <div className='item-container' key={item.id}>
                 <img src={item.image} alt="" />
                 <div className='items-text'>
                  <h3>{item.name}</h3>
                  <p>{item.title}</p>
                  <p>{item.price} TL</p>
                 </div>
                
            </div>
        ))}
        </div>
        </>
  )
}

export default Items