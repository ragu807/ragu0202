import React, { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [error, setError] = useState({});

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordRegex = /^[0-9]{9,}$/; // Password: numeric only, length > 8

  const handleSubmit = (e) => {
    e.preventDefault();
    let newError = {};

    if (username.length < 3) {
      newError.username = "Username must be more than 2 characters";
    }

    if (!email) {
      newError.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newError.email = "Invalid email format";
    }

    const ageNum = parseInt(age, 10);
    if (!age) {
      newError.age = "Age is required";
    } else if (isNaN(ageNum) || ageNum <= 16) {
      newError.age = "Age must be above 16";
    }

    if (!password) {
      newError.password = "Password is required";
    } else if (!passwordRegex.test(password)) {
      newError.password = "Password must be numeric and at least 9 digits";
    }

    if (password !== cpassword) {
      newError.cpassword = "Passwords do not match";
    }

    setError(newError);

    if (Object.keys(newError).length === 0) {
      alert(`Registration successful!
Username: ${username}
Email: ${email}
Age: ${age}
Password: ${password}`);
    }
  };

  const handleReset = () => {
    setUsername("");
    setEmail("");
    setAge("");
    setPassword("");
    setCpassword("");
    setError({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {error.username && <p style={{ color: "red" }}>{error.username}</p>}
      <br />
      <br />

      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error.email && <p style={{ color: "red" }}>{error.email}</p>}
      <br />
      <br />

      <input
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      {error.age && <p style={{ color: "red" }}>{error.age}</p>}
      <br />
      <br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error.password && <p style={{ color: "red" }}>{error.password}</p>}
      <br />
      <br />

      <input
        type="password"
        placeholder="Confirm Password"
        value={cpassword}
        onChange={(e) => setCpassword(e.target.value)}
      />
      {error.cpassword && <p style={{ color: "red" }}>{error.cpassword}</p>}
      <br />
      <br />

      <button type="submit">Register</button>
      <button type="button" onClick={handleReset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </form>
  );
}

export default Register;
