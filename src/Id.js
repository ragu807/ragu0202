import { useState } from 'react';
import React from 'react';
import './Id.css';

function JSForm() {
  const [user, setUser] = useState('');
  function handleChangeUserName(e) {
    console.log(e.target.value);
    setUser(e.target.value);
  }

  function handleChangePass(e) {
    console.log(e.target.value);
  }

  return (
    <> 
      <div className="form-container">
        <form className="form-box">
          <h2>Login Form</h2>
          <label>USERNAME:</label>
          <input type="text" name="username" onChange={handleChangeUserName} className='box'/>
          
          <label>PASSWORD:</label>
          <input type="password" name="pass" onChange={handleChangePass} />

          <button type="submit">Submit</button>
        </form>
        <h1 className="greet">Hi {user}</h1>
      </div>
    </>
  );
}

export default JSForm;