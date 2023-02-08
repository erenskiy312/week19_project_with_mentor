import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const EditProduct = () => {
  const {
    getCategories,
    categories,
    createProduct,
    getOneProduct,
    oneProduct,
    updateProduct,
  } = useProducts();

  useEffect(() => {
    getCategories();
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setDescription(oneProduct.description);
      setPrice(oneProduct.price);
      setCategory(oneProduct.category.id);
    }
  }, [oneProduct]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  //   console.log(categories);

  const { id } = useParams();
  const navigate = useNavigate();

  function handleSave() {
    console.log(title, description, price, category, image);
    let newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("description", description);
    newProduct.append("price", price);
    newProduct.append("category", category);
    if (image) {
      newProduct.append("image", image);
    }

    updateProduct(id, newProduct);
    navigate("/products");
  }

  //   console.log(title, description, price, category, image);
  console.log(oneProduct);
  return (
    <div className="d-flex flex-column w-50 m-auto">
      <h1 className="m-auto">Edit product</h1>

      <p>CATEGORY BEFORE: {oneProduct?.category.title} </p>

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

      <p>Image before</p>
      <img width={100} src={oneProduct?.image} alt="" />
      <input
        accept="image/*"
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button onClick={handleSave}>SAVE PRODUCT</button>
    </div>
  );
};

export default EditProduct;
