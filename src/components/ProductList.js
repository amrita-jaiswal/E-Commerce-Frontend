import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    displayList();
  }, []);

  const displayList = async () => {
    let result = await fetch("http://localhost:5000/product-list");
    result = await result.json();
    setProducts(result);
    console.log(result);
  };

  const deleteRow = async (id) => {
    let result = await fetch(`http://localhost:5000/delete/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      displayList();
    }
  };
  return (
    <div className="product-list">
      <h3>Product List</h3>
      <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Ram</li>
        <li>Category</li>
        <li>Brand</li>
        <li>Actions</li>
      </ul>
      {products.map((item, index) => (
        <ul key={item._id}>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.ram}</li>
          <li>{item.category}</li>
          <li>{item.brand}</li>
          <li>
            <button onClick={() => deleteRow(item._id)}>Delete</button>
            <Link to={`/update/${item._id}`}>Update</Link>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default ProductList;
