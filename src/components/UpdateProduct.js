import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [ram, setRam] = useState("");
  const [brand, setBrand] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUpdateDetails();
  }, []);

  async function getUpdateDetails() {
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setRam(result.ram);
    setBrand(result.brand);
  }


  const updateDetails = async () =>{
    let update = await fetch(`http://localhost:5000/product/${params.id}`,{
      method:"put",
      body: JSON.stringify({name,brand,ram, price,category}),
      headers:{
        "Content-Type": "application/json"
      }
    })
    update = await update.json()
    console.log(update);
    navigate("/")
  }
  return (
    <div>
      <h1> Update Product</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="inputBox"
        placeholder="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="text"
        className="inputBox"
        placeholder="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="number"
        className="inputBox"
        placeholder="ram"
        value={ram}
        onChange={(e) => setRam(e.target.value)}
      />

      <input
        type="text"
        className="inputBox"
        placeholder="brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />

      <button className="appButton" onClick={updateDetails}>
        Update Product
      </button>
    </div>
  );
}

export default UpdateProduct;
