import React, { useEffect, useRef, useState } from 'react'
import { items } from './Data'
import { FaBasketShopping } from "react-icons/fa6";

function Basket({basket, setBasket}) {
    const [isOpen, setIsOpen] = useState(false);
    const totalPrice = basket.reduce((acc,item) => acc + item.price*item.quantity, 0);
    const totalItems = basket.reduce((acc,item) => acc + item.quantity, 0);
    
  return (
          <>
          <div className='basket-icon-container' 
           onClick={()=> setIsOpen((prev) => !prev)}>
            <span className="basket-icon"><FaBasketShopping/></span>
            <span>{totalItems}</span>
          </div>
           
           {isOpen && <div className="basket-container">
                <div className='basket-header'><p>Sepetteki ürünler</p> <p>{totalItems}</p></div>
                {basket && basket.length > 0 ? (
                 basket.map((item, index) => (
                <div className='basket-box' key={item.id}>
                <div className='basket-items'>
                 <img src={item.images[0]} alt={item.name} />
                <p>{item.name} </p>
                <p>{item.price} TL </p>
                </div>
                 <div className='basket-item-btn'>
                  <div>
                    <span onClick={()=> {
                      const newBasket = basket.map(b =>
                        b.id === item.id ? {...b, quantity: b.quantity -1} :b
                      ).filter (b => b.quantity > 0)
                    setBasket(newBasket) }}> - </span>
                    {item.quantity}
                    <span onClick={() => {
                      const newBasket = basket.map(b =>
                        b.id === item.id ? {...b, quantity: b.quantity +1} :b
                       );
                       setBasket(newBasket)
                    }}>+</span> </div>
                  <span className='basket-delete-btn' onClick={()=> {
                    const newBasket =basket.filter(b => b.id !== item.id);
                    setBasket(newBasket);
                  }}>Temizle</span>
                 </div>
                </div>
            ))
            ) : ( <p style={{textAlign:"center", padding:"10px", color:"blueviolet"}}>Sepetiniz boş</p>
            )}
              {basket.length > 1 && ( <button className='basket-clear-all' onClick={()=>
               { if (window.confirm("Tüm Ürünleri Silmek İstediğinizden Emin Misiniz?")) {setBasket([])}
              }}
              >
                Tümünü Sil</button>)}
             <p className='total-price'>Toplam Sepet: {totalPrice} TL</p>
          </div>}
            
          </>
  )
}

export default Basket