import React, { useState } from "react";
import { app } from "../firebase";
import { getAuth, createUserWithEmailAndPassword ,GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("success")
    );
  };

  const SignupWithGoogle = () =>{
    signInWithPopup(auth,provider)
  }

  return (
    <div>
      <label>Email</label>
      <input
        type="email"
        placeholder="enter your email"
        onChange={(e) => setemail(e.target.value)}
        value={email}
      />

      <label>Password</label>
      <input
        type="password"
        placeholder="enter your password"
        onChange={(e) => setpassword(e.target.value)}
        value={password}
      />

      <button onClick={createUser}>Sign Up</button>
      <br />
      <button onClick={SignupWithGoogle}>SignUp with Google</button>
    </div>
  );
};

export default Signup;
