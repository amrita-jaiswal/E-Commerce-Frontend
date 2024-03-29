import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/AddProduct";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Nav from "./components/Nav";
import PrivateComponent from "./components/PrivateComponent";
import ProductList from "./components/ProductList";
import SignUp from "./components/SignUp";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ProductList/>} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/Update/:id" element={<UpdateProduct/>} />
            <Route path="/Logout" element={<h1>Logout</h1>} />
            <Route path="/Profile" element={<h1>Profile</h1>} />
          </Route>
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/login" element={<Login/>} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
