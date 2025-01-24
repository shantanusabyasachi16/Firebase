import { useEffect, useState } from "react";
import "./App.css";
import { getDatabase, query, ref, set } from "firebase/database";
import { app } from "./firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth"; // authetication
import Signup from "./Pages/Signup";
import SignIn from "./Pages/SignIn";
import {  addDoc, collection, doc, getDoc, getDocs, getFirestore, updateDoc, where} from "firebase/firestore";


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



//cloud firestore
const cloudFirestore = getFirestore(app);
function App() {
  const [user, setuser] = useState("");

  // //cloud firestore
  const writeData = async()=>{
 const result= await addDoc(collection(cloudFirestore,'cities'),{
    Location:"cuttcak",
   PinCode:768908,
   lat:344,
   long:4554
  })
console.log(result);
};
//puting the sub data in main data

const Subdata = async()=>{
  const data1 = await addDoc(collection(cloudFirestore,'cities/Eo8q02rT2FI6M79bWBpt/places'),{
    name:"this bbsr",
    desc: "this is description",
    date: Date.now(),
  })
};

//to get the data from the collection

const getddocument  = async ()=>{
  //create a reference
  const ref =  doc(cloudFirestore,"cities","Eo8q02rT2FI6M79bWBpt");
  const snap = await  getDoc(ref);
  console.log(snap.data());
  
};

//to get the docummets from query
const getDocumentbyQuery = async ()=>{
  //create the refrence
  const collectionRef= collection(cloudFirestore,"Users");
  const q = query(collectionRef, where("isFemale" ,"==", true));

  const snapShot = await getDocs(q);//to get all the documents
//we have to ittrate for aall the docs
snapShot.forEach((data)=>console.log(data.data()));
}
//to update the document

const updatedata = async()=>{
  const docref = doc(cloudFirestore,'cities','Eo8q02rT2FI6M79bWBpt');
  await updateDoc(docref,{
    Location:'Kolkata'
  })
}

  {/*const auth = getAuth(app);*/}
 /* useEffect(() => {
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
  }*/

  return (
    <>
    {/*database*/}
      {/* <h1> Firebase Project</h1>
      <button onClick={putData}>send Data</button>*/}

      {/*<p> hello {user.email}</p>
      <button onClick={()=>signOut(auth)}>logout</button>*/}

    <p>cloudstore</p>
    <button onClick={writeData}>Send Data</button>
    <button onClick={Subdata}>Send Sub Data</button>
    <button onClick={getddocument}>get Data</button>
    <button onClick={getDocumentbyQuery}>get Data by query</button>
    <button onClick={updatedata }>update</button>
    </>
  );
}

export default App;
