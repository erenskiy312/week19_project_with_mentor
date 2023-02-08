import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import RegisterSuccess from "./components/Auth/RegisterSuccess";
import Home from "./components/Home/Home";
import NavScrollExample from "./components/Navbar/Navbar";
import AddProduct from "./components/product/AddProduct";
import EditProduct from "./components/product/EditProduct";
import ProductList from "./components/product/ProductList";

function App() {
  return (
    <>
      <NavScrollExample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-success" element={<RegisterSuccess />} />

        <Route path="/add" element={<AddProduct />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/edit/:id" element={<EditProduct />} />

        <Route path="*" element={<h1>NOT FOUND PAGE</h1>} />
      </Routes>
    </>
  );
}

export default App;
