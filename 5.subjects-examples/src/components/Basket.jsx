import React, { useState } from 'react'
import { items } from './Data'
import { FaBasketShopping } from "react-icons/fa6";

function Basket({basket}) {


  return (
          <>
          <div className='basket-icon-container'>
            <span className="basket-icon"><FaBasketShopping/></span>
            <span>{basket.length}</span>
          </div>
           
          <div className="basket-container">
                <div className='basket-header'><p>Sepetteki ürünler</p> <p>{basket.length}</p></div>
                {basket && basket.length > 0 ? (
                 basket.map((item) => (
                <div className='basket-box'>
                <div className='basket-items' key={item.id}>
                 <img src={item.image} alt={item.name} />
                <p>{item.name} </p>
                <p>{item.price} TL </p>
                </div>
                 <div className='basket-item-btn'>
                  <div><span>-</span>0<span>+</span> </div>
                  <span className='basket-delete-btn'>Temizle</span>
                 </div>
                </div>
            ))
            ) : ( <p>Sepetiniz boş</p>
            )}
          </div>
            
          </>
  )
}

export default Basket