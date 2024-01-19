import React, { useState } from "react";
import "../Programs/styles.css";
import "../Programs/login.css";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import Loader from "../Programs/Loader";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <>
      <Loader />
      <nav>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </nav>
      <div className="contact-section">
        <section className="tildmeddig">
          <div className="wrapper">
            <form onSubmit={handleSubmit} className="cf custom-form">
              <h1>Login</h1>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                  className="rounded-0"
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                  className="rounded-0"
                  required
                />
              </div>
              <div class="remember-forgot">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#">Forgot password</a>
              </div>
              <button type="submit" className="btn">
                Login
              </button>
              <div class="register-link">
                <p>
                  Dont't have an account <a href="#">Register</a>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
