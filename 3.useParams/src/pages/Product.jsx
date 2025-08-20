import React from 'react'
import {useNavigate} from "react-router-dom"
import { products } from '../components/Data';

function Product() {
    

 
    const navigate = useNavigate();
  return (
    <>
    <h2 className="product-title">Products</h2>
    <div className='product-container'>
        
        {
            products.map((product)=>(
                <div key={product.id} className='product'>
                    <p><b>{product.name}</b></p>
                    <hr />
                    <p>{product.description}</p>
                    <h4>{`${product.price} TL`} </h4>
                    <button onClick={()=> navigate(`/product-details/${product.id}`)}>Go To Details</button>
                    
                </div>
            ))
        }
    </div>
    </>
  )
}

export default Product