import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Clients/Home";
import AboutUs from "./pages/Clients/AboutUs";
import Blog from "./pages/Clients/Blog";
import Cart from "./pages/Clients/Cart";
import Footer from "./components/Footer/Footer";
import DetailProduct from "./pages/Clients/DetailProduct";
import AuthForm from "./pages/Clients/AuthForm";
import ListProduct from "./pages/Admins/ListProduct";
import ProductForm from "./pages/Admins/ProductForm";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/products/:id" element={<DetailProduct/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/add" element={<ProductForm/>}/>
        <Route path="/edit/:id" element={<ProductForm/>}/>
        <Route path="/register" element={<AuthForm/>}/>
        <Route path="/login" element={<AuthForm/>}/>
        <Route path="/admin" element={<ListProduct/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
