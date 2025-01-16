import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from "../firebase";

const auth = getAuth(app); // instance is created ensuring that Firebase Authentication is tied to the specific Firebase project/account associated with your app configuration.

const SignIn = () => {
const [email,setemail] = useState("");
const [password, setpassword] = useState("");

const Signin = () => { signInWithEmailAndPassword
    (auth,email,password

    ).then(value => console.log("Signin sucessfull")).catch((err)=>console.log("error") );
}


  return (
    <div>
        <h1> SignIn page</h1>
         <label> Enter your Email</label>
      <input
        type="email"
        placeholder="enter your email"
        onChange={(e) => setemail(e.target.value)}
        value={email}
      />
<br />
      <label>Enter your Password</label>
      <input
        type="password"
        placeholder="enter your password"
        onChange={(e) => setpassword(e.target.value)}
        value={password}
      />
<br />
      <button onClick={Signin }>Sign in</button>
    </div>
  )
}

export default SignIn