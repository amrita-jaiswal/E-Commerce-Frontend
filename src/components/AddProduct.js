import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [ram, setRam] = useState("");
  const [brand, setBrand] = useState("");
  const [err, setErr] = useState(false);
  const navigate = useNavigate()

  async function addDetails() {
    if (!name || !category || !price || !ram || !brand) {
      setErr(true);
      return false;
    }
    let userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, ram, brand, userId }),
      headers: {
        "content-type": "application/JSON",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();

    navigate("/")

  }

  return (
    <div>
      <h1> Add Product</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {err && !name && <span className="invalid-input">Enter Name</span>}
      <input
        type="text"
        className="inputBox"
        placeholder="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      {err && !price && <span className="invalid-input">Enter price</span>}

      <input
        type="text"
        className="inputBox"
        placeholder="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      {err && !category && <span className="invalid-input">Enter category</span>}

      <input
        type="number"
        className="inputBox"
        placeholder="ram"
        value={ram}
        onChange={(e) => setRam(e.target.value)}
      />
      {err && !ram && <span className="invalid-input">Enter ram</span>}

      <input
        type="text"
        className="inputBox"
        placeholder="brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      {err && !brand && <span className="invalid-input">Enter brand</span>}

      <button className="appButton" onClick={addDetails}>
        Add Product
      </button>
    </div>
  );
}

export default AddProduct;
