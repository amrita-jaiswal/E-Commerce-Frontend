import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Nav from "./components/Nav";
import PrivateComponent from "./components/PrivateComponent";
import SignUp from "./components/SignUp";

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1>Product List</h1>} />
            <Route path="/add" element={<h1>Add Product</h1>} />
            <Route path="/Update" element={<h1>Update Product</h1>} />
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
