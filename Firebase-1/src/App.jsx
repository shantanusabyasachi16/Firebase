import { useState } from "react";
import "./App.css";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";// authetication
import Signup from "./Pages/Signup";
import SignIn from "./Pages/SignIn";

//get an instance for authentication

{/*const auth = getAuth(app);

const signUp = () =>{createUserWithEmailAndPassword(
  auth,"shanatnu@gmail.com",
  "shantanu123344"
).then(value => console.log(value) //it returns an promise
)}
;*/}



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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     {/* <h1> Firebase Project</h1>
      <button onClick={putData}>send Data</button>*/}


{/*<h1> Firebase Project</h1>
<button onClick={signUp}>create user email</button>
    */}  
<Signup/>
<SignIn/>
    
    </>
  );
}

export default App;
