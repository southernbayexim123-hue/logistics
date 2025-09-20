import React, { useState } from 'react';
import '../App.css';

function Products() {
  // State to track which product category is expanded
  const [expandedProduct, setExpandedProduct] = useState(null);

  // Function to toggle product expansion
  const toggleProduct = (productName) => {
    if (expandedProduct === productName) {
      setExpandedProduct(null); // collapse if already expanded
    } else {
      setExpandedProduct(productName); // expand this one, collapse others
    }
  };

  return (
    <div className="page-container">
      <section className="products-section" id="products">
        <div className="container">
          <h2>Our Products</h2>
          <p>
            Southern Bay offers a diverse range of premium products sourced from trusted suppliers across the globe. 
            Browse our categories below to learn more about our offerings.
          </p>
          
          <div className="product-categories">
            {/* Spices Category */}
            <div className={`product-category ${expandedProduct === 'spices' ? 'expanded' : ''}`}>
              <div className="category-header" onClick={() => toggleProduct('spices')}>
                <h3>Spices</h3>
                <span className="expand-icon">{expandedProduct === 'spices' ? '−' : '+'}</span>
              </div>
              
              {expandedProduct === 'spices' && (
                <div className="category-content">
                  <div className="category-details">
                    <p>We offer a rich variety of premium quality spices sourced directly from the finest growing regions. Our spices are known for their authentic flavor, aroma, and freshness.</p>
                    <ul>
                      <li>Black Pepper</li>
                      <li>Cardamom</li>
                      <li>Cinnamon</li>
                      <li>Cloves</li>
                      <li>Turmeric</li>
                      <li>Cumin</li>
                    </ul>
                  </div>
                  <div className="category-contact">
                    <h4>Interested in our Spices?</h4>
                    <button className="contact-btn" onClick={() => window.location.href = 'mailto:info@southernbay.com?subject=Inquiry about Spices'}>
                      Contact Us About Spices
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Coir & Coir Products */}
            <div className={`product-category ${expandedProduct === 'coir' ? 'expanded' : ''}`}>
              <div className="category-header" onClick={() => toggleProduct('coir')}>
                <h3>Coir & Coir Products</h3>
                <span className="expand-icon">{expandedProduct === 'coir' ? '−' : '+'}</span>
              </div>
              
              {expandedProduct === 'coir' && (
                <div className="category-content">
                  <div className="category-details">
                    <p>Our eco-friendly coir products are made from coconut fiber and are known for their durability and sustainability.</p>
                    <ul>
                      <li>Coir Mats</li>
                      <li>Coir Geotextiles</li>
                      <li>Coir Pots</li>
                      <li>Coir Rugs</li>
                      <li>Coir Yarn</li>
                    </ul>
                  </div>
                  <div className="category-contact">
                    <h4>Interested in our Coir Products?</h4>
                    <button className="contact-btn" onClick={() => window.location.href = 'mailto:info@southernbay.com?subject=Inquiry about Coir Products'}>
                      Contact Us About Coir Products
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Handicrafts & Home Décor */}
            <div className={`product-category ${expandedProduct === 'handicrafts' ? 'expanded' : ''}`}>
              <div className="category-header" onClick={() => toggleProduct('handicrafts')}>
                <h3>Handicrafts & Home Décor</h3>
                <span className="expand-icon">{expandedProduct === 'handicrafts' ? '−' : '+'}</span>
              </div>
              
              {expandedProduct === 'handicrafts' && (
                <div className="category-content">
                  <div className="category-details">
                    <p>Our exquisite collection of handcrafted items celebrates traditional craftsmanship with contemporary designs.</p>
                    <ul>
                      <li>Wooden Artifacts</li>
                      <li>Brass Decor Items</li>
                      <li>Handloom Textiles</li>
                      <li>Ceramic Art Pieces</li>
                      <li>Decorative Lighting</li>
                    </ul>
                  </div>
                  <div className="category-contact">
                    <h4>Interested in our Handicrafts?</h4>
                    <button className="contact-btn" onClick={() => window.location.href = 'mailto:info@southernbay.com?subject=Inquiry about Handicrafts'}>
                      Contact Us About Handicrafts
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Leather Accessories */}
            <div className={`product-category ${expandedProduct === 'leather' ? 'expanded' : ''}`}>
              <div className="category-header" onClick={() => toggleProduct('leather')}>
                <h3>Leather Accessories</h3>
                <span className="expand-icon">{expandedProduct === 'leather' ? '−' : '+'}</span>
              </div>
              
              {expandedProduct === 'leather' && (
                <div className="category-content">
                  <div className="category-details">
                    <p>Our premium leather goods combine quality materials with expert craftsmanship for durability and style.</p>
                    <ul>
                      <li>Leather Bags</li>
                      <li>Wallets & Purses</li>
                      <li>Belts</li>
                      <li>Journal Covers</li>
                      <li>Corporate Gifts</li>
                    </ul>
                  </div>
                  <div className="category-contact">
                    <h4>Interested in our Leather Accessories?</h4>
                    <button className="contact-btn" onClick={() => window.location.href = 'mailto:info@southernbay.com?subject=Inquiry about Leather Accessories'}>
                      Contact Us About Leather Products
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Toys & Gift Items */}
            <div className={`product-category ${expandedProduct === 'toys' ? 'expanded' : ''}`}>
              <div className="category-header" onClick={() => toggleProduct('toys')}>
                <h3>Toys & Gift Items</h3>
                <span className="expand-icon">{expandedProduct === 'toys' ? '−' : '+'}</span>
              </div>
              
              {expandedProduct === 'toys' && (
                <div className="category-content">
                  <div className="category-details">
                    <p>Our collection of toys and gift items combines fun, education, and craftsmanship.</p>
                    <ul>
                      <li>Wooden Toys</li>
                      <li>Educational Games</li>
                      <li>Handmade Dolls</li>
                      <li>Corporate Gift Sets</li>
                      <li>Festive Gift Hampers</li>
                    </ul>
                  </div>
                  <div className="category-contact">
                    <h4>Interested in our Toys & Gift Items?</h4>
                    <button className="contact-btn" onClick={() => window.location.href = 'mailto:info@southernbay.com?subject=Inquiry about Toys and Gifts'}>
                      Contact Us About Toys & Gifts
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;