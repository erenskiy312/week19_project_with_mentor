import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";

const AddProduct = () => {
  const { getCategories, categories, createProduct } = useProducts();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  //   console.log(categories);

  useEffect(() => {
    getCategories();
  }, []);

  function handleSave() {
    console.log(title, description, price, category, image);
    let newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("description", description);
    newProduct.append("price", price);
    newProduct.append("category", category);
    newProduct.append("image", image);
    createProduct(newProduct);
  }

  //   console.log(title, description, price, category, image);

  return (
    <div className="d-flex flex-column w-50 m-auto">
      <h1 className="m-auto">Add product</h1>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">choose category</option>

        {categories.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="price"
      />
      <input
        accept="image/*"
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button onClick={handleSave}>ADD PRODUCT</button>
    </div>
  );
};

export default AddProduct;
