import React from 'react'
import {useParams} from "react-router-dom"
import { products } from '../components/Data';


function ProductDetails() {
    const { id } = useParams (); 
    
  return (
    <div className='details-container'>
        <h2 className="product-title">Products Details</h2>
        {
            products.map((product)=>{
                if (product.id == id) {
                    return (
                        <div key={product.id} className='product'>
                    <p><b>{product.name}</b></p>
                    <hr />
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <h4>{`${product.price} TL`} </h4>
                    </div>
                    )
                }
            })
        }
        </div>
  )
}

export default ProductDetails