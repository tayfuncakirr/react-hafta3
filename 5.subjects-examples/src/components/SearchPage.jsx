import React, { useEffect, useState } from 'react'
import { items } from './Data';
import { useNavigate } from 'react-router-dom';

function SearchPage({searchTerm, setIsOpen}) { 
    const navigate = useNavigate ();
    if (!searchTerm.trim()) return null;

    const filtered = items.filter((item) => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
);

     
     
  return (
             
           <div className="search-container" onMouseLeave={() => setIsOpen(false)}>
                {
                    filtered.length > 0  ? (
                        filtered.map((item) => (
                            <div key={item.id} className="search-box" onClick={()=> {navigate(`/item-details/${item.id}`); setIsOpen(false)}}>
                            <img src={item.images[0]} alt={item.name} />
                            <h5>{item.name}</h5>
                            </div>
                        ))
                    ): ( <p>Sonuç bulunamadı</p> )
                }
        </div>
  )
}

export default SearchPage