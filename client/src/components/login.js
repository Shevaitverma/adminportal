import React, { useState } from "react";

const Login =({setisLogin})=> {
  // React States
  const [errorMessages, setErrorMessages] = useState({});

  // User Login info
  const database = [
    {
      username: "admin",
      password: "admin"
    },
    {
      username: "user1",
      password: "user1"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        if(userData.username === "admin"){
          setisLogin({userType: "admin", state: true})
        }
        else{
          setisLogin({userType: "user1", state: true})
        }
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


 

  return (
    <div>
      <div>
        <div>Login</div>
        <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
      </div>
    </div>
  );
}

export default Login;