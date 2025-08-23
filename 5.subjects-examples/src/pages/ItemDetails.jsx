import React from 'react'
import { useParams } from 'react-router-dom'
import { items } from '../components/Data';

function ItemDetails({ addToBasket }) {
  const {id} = useParams();
  return (
    <div>
      {items && items.map((i) =>{
        if (i.id == id) { 
          return (
          <div key={i.id}>
            <p>{i.name}</p>
            <p>{i.title}</p>
            <p>{i.price} TL</p>
          </div>
        )
        }
      })}
    </div>
  )
}

export default ItemDetails