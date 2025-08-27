import React from 'react'
import { items } from './Data';

function SearchPage({searchTerm}) {
    if (!searchTerm.trim()) return null;

    const filtered = items.filter((item) => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    <div className='search-wrapper'>
        <div className="search-container">
                {
                    filtered.length > 0 ? (
                        filtered.map((item) => (
                            <div key={item.id} className="search-box">
                            <img src={item.images[0]} alt={item.name} />
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            </div>
                        ))
                    ): ( <p>Sonuç bulunamadı</p> )
                }
        </div>
    </div>
  )
}

export default SearchPage