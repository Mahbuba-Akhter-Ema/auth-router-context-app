import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);


  const handleSignOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.error(error));
  }

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          daisyUI
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          LogIn
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/signup">
          SignUp
        </Link>
        {user?.email && <span>Welcome, {user.email}</span>}
        {
          user?.email ?
          <button onClick={handleSignOut} className="btn btn-sm mx-2">Sign Out</button>
          :
          <Link to='/login'>
            <button className="btn btn-sm mx-2">Log In</button>
          </Link>
        }
      </div>
    </div>
  );
};

export default Header;
