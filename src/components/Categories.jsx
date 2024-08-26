import React, { useState } from 'react';

const Categories = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleSubcategories = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  const showAlert = (categoryName, subcategory) => {
    alert(`Category: ${categoryName}\nSubcategory ID: ${subcategory.id}\nSubcategory Name: ${subcategory.name}`);
  };

  return (
    <div className="d-flex">
      {/* Category List */}
      <div>
        {categories.map(category => (
          <div 
            key={category.id} 
            className="card mb-3 shadow-sm"
            
            onClick={() => toggleSubcategories(category.id)}
          >
            <div className="card-body">
              <p 
                className="card-title" 
                
              >
                {category.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Subcategory List */}
      <div>
        {activeCategory !== null && (
          <div>
            <h5 className="mb-3 text-center" style={{ color: '#2874f0' }}>
              Subcategories
            </h5>
            <ul>
              {categories.find(category => category.id === activeCategory)?.subcategories.map(subcategory => (
                <li 
                  key={subcategory.id} 
                  className="list-group-item"
                  
                  onClick={() => showAlert(categories.find(category => category.id === activeCategory).name, subcategory)}
                >
                  {subcategory.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
