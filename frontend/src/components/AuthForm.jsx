import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import { apiCall } from "../services/api";
import { useUser } from "./UserContext";
import useStoredToken from "../services/useStoredToken";

const AuthForm = ({ signIn }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setToken } = useStoredToken("jwtToken");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [error, setError] = useState("");
  const [inputErrors, setInputErrors] = useState("");
  const { updateUser } = useUser();

  const onChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setInputErrors({
          ...inputErrors,
          [name]: isEmail(value) ? "" : "Email is not valid!",
        });
        setEmail(value);
        console.log(`inputErrors =`);
        console.log(inputErrors);
        break;
      case "password":
        setInputErrors({
          ...inputErrors,
          [name]:
            value.length < 6 || value.length > 10
              ? "Password must be 4 to 10 characters long!"
              : "",
        });
        setPassword(value);
        break;
      case "username": {
        let usernameError = "";
        if (/\W/.test(value))
          usernameError = "Username contains illegal charaters!";
        if (value.length < 4 || value.length > 10) {
          usernameError = "Username must be 4 to 10 characters long!";
        }
        setInputErrors({
          ...inputErrors,
          [name]: usernameError,
        });
        setInputUsername(value);
        break;
      }
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!signIn && password != confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    console.log(`XXX username = ${inputUsername}`);

    try {
      // Send login request to the backend

      // // fetch data without using axios
      // const response = await fetch("http://localhost:3000/api/auth/signin", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email, password }),
      // });

      // if (!response.ok) {
      //   throw new Error("Invalid credentails");
      // }

      // // Handle successful login
      // const data = await response.json();

      const authType = signIn ? "signin" : "signup";
      // const apiCallUrl = `http://localhost:3000/api/auth/${authType}`;
      const apiCallUrl = `/api/auth/${authType}`;
      console.log(`apiCallUrl = ${apiCallUrl}`);
      console.log(`username = ${inputUsername} ??`);
      const data = await apiCall("post", apiCallUrl, {
        email,
        password,
        username: inputUsername,
      });

      console.log(`data = `);
      console.log(data);

      const { username, token } = data;
      setToken(token);
      updateUser(username);
      setEmail("");
      setPassword("");
      const redirectPath = location.state?.from || "/";
      navigate(redirectPath, { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={onChange}
          required
        />
      </div>
      {!signIn && email.length > 0 && (
        <div className="alert alert-danger">{inputErrors.email}</div>
      )}
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onChange}
          required
        />
      </div>
      {!signIn && password.length > 0 && (
        <div className="alert alert-danger">{inputErrors.password}</div>
      )}
      {!signIn && (
        <>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              name="username"
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              type="text"
              required
            />
          </div>
        </>
      )}
      <button type="submit">{signIn ? "Login" : "Sign Up"}</button>
    </form>
  );
};

export default AuthForm;
