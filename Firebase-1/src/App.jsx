import { useEffect, useState } from "react";
import "./App.css";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth"; // authetication
import Signup from "./Pages/Signup";
import SignIn from "./Pages/SignIn";
//realtimedatabase===

/*get an instance of database

const db = getDatabase(app);

const putData = () => {
  //put the data in the database

  set(ref(db, "users/Shantanu"), {
    id: 1,
    name: "shantanu sabyasachi",
    age: 21,
  }); // in set function we have to pass an refrence of database.In 1st parameter a refrence of database and 2nd parameter is your name of your root where the data is been stored
};*/

const auth = getAuth(app);

function App() {
  const [user, setuser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("hello", user);
        setuser(user);
      } else {
        console.log("user not logged in");
        setuser(null);
      }
    });
  }, []);
  //conditonal renderring
  if (user === null) {
    return (
      <>
        <Signup />
        <SignIn />
      </>
    );
  }

  return (
    <>
      {/* <h1> Firebase Project</h1>
      <button onClick={putData}>send Data</button>*/}

      <p> hello {user.email}</p>
      <button onClick={()=>signOut(auth)}>logout</button>
    </>
  );
}

export default App;
