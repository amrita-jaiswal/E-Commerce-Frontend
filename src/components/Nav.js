import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div>
      {auth ? (
        <ul className="nav-ui nav-ul">
          <li>
            <Link to={"/"}>Products</Link>
          </li>
          <li>
            <Link to={"/add"}>Add Product</Link>
          </li>
          <li>
            <Link to={"/update/:id"}>Update Product</Link>
          </li>
          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>
          <li>
            <Link onClick={logout} to={"/signup"}>
              Logout
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ui nav-ul">
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/signup"}>SignUp</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
