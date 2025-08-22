import React, { useState } from 'react'
import { categories, items } from './Data'


function Category() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (id) => {
        if (selectedCategory === id) {
            setSelectedCategory(null)
        }
        else (
            setSelectedCategory(id)
        )
    }

    const filteredItems = selectedCategory
    ? items.filter((i) => i.categoryId === selectedCategory)
    : [];
  return (
    <>
    <div className='category-container'>
       {categories.map((cat) => (
           <div key={cat.id} className='category-wrapper' onClick={() => handleCategoryClick(cat.id)}>
          <img className='category-image'
           src={cat.image}
            alt={cat.name} 
              data-selected={selectedCategory === cat.id}
               
             />
           <h4>{cat.name}</h4>
           </div>
           ))} 
    </div>

       {selectedCategory && (
        <div className='filtered-item-container'>
    <div className="filtered-item-list" onMouseLeave={()=> handleCategoryClick(null)}>
        { filteredItems.map(item => (
          <div key={item.id} className="filtered-item-product">
            <img src={item.image} alt={item.name} />
            <h5>{item.name}</h5>
            <button className='add-btn'>Sepete Ekle</button>
          </div>
        ))}
      </div>
      </div>
       )}
      </>
  )
}

export default Category