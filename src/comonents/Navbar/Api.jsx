import React, { useState, useEffect } from 'react';

const Api = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      console.log('Fetched products:', data); // Log the fetched products
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchProductDetail = async (productId) => {
    try {
      const response = await fetch(`https://dummyjson.com/product/${productId}`);
      const data = await response.json();
      setSelectedProduct(data);
    } catch (error) {
      console.error('Error fetching product detail:', error);
    }
  };

  useEffect(() => {
    // Fetch products when the component mounts
    fetchProducts();
  }, []);

  const handleProductClick = (productId) => {
    fetchProductDetail(productId);
  };

  return (
    <div>
      <button onClick={fetchProducts}>Display Products</button>
      <h2>Products</h2>
      <ul>
        {Array.isArray(products) && products.map((product) => (
          <li key={product.id} onClick={() => handleProductClick(product.id)}>
            {product.name}
          </li>
        ))}
      </ul>
      {selectedProduct && (
        <div>
          <h2>Selected Product</h2>
          <p>Name: {selectedProduct.name}</p>
          <p>Description: {selectedProduct.description}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default Api;
