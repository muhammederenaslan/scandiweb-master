import React, { useState } from 'react';

function ProductBox(props) {
  const { id, sku, name, price, selected, onSelectionChange } = props;

  const handleSelectionChange = (e) => {
    onSelectionChange(id, e.target.checked);
  };

  return (
    <div className="product-box">
      <input type="checkbox" checked={selected} onChange={handleSelectionChange} />
      <div className="product-sku">{sku}</div>
      <div className="product-name">{name}</div>
      <div className="product-price">{price}</div>
    </div>
  );
}

function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, sku: 'DVD-01', name: 'DVD', price: 10.99 },
    { id: 2, sku: 'FURN-01', name: 'Furniture', price: 99.99 },
    { id: 3, sku: 'BOOK-01', name: 'Book', price: 5.99 }
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelectionChange = (id, selected) => {
    if (selected) {
      setSelectedProducts([...selectedProducts, id]);
    } else {
      setSelectedProducts(selectedProducts.filter((selectedId) => selectedId !== id));
    }
  };

  const handleAddProduct = () => {
    // Redirect to the add product page
    window.location.href = '/add-product';
  };

  const handleMassDelete = () => {
    // Send the selected product IDs to the server to be deleted
    fetch('/delete-products.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productIds: selectedProducts })
    })
      .then(() => {
        // Remove the deleted products from the product list
        setProducts(products.filter((product) => !selectedProducts.includes(product.id)));

        // Clear the selected products array
        setSelectedProducts([]);
      })
      .catch((error) => {
        console.error('Error deleting products:', error);
      });
  };

  return (
    <div>
      <div className="button-bar">
        <button onClick={handleAddProduct}>Add</button>
        <button onClick={handleMassDelete}>Mass Delete</button>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <ProductBox
            key={product.id}
            id={product.id}
            sku={product.sku}
            name={product.name}
            price={product.price}
            selected={selectedProducts.includes(product.id)}
            onSelectionChange={handleSelectionChange}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
