import React, { useState } from "react";

const Product = () => {
  const [productNames, setProductNames] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.restful-api.dev/objects");
      const data = await response.json();
      const names = [];
      for (let i = 0; i < data.length; i++) {
        names.push(data[i].name);
      }
      setProductNames(names);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Product List</h1>
      <button onClick={fetchData}>Fetch Product Names</button>
      <ol>
        {productNames.length > 0 ? (
          productNames.map((name, index) => <li key={index}>{name}</li>)
        ) : (
          <p>No products to display.</p>
        )}
      </ol>
    </div>
  );
};

export default Product;
