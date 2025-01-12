import {initializeApp  } from "firebase/app";



const firebaseConfig = {
    apiKey: "AIzaSyDvoNJSAM7NSR13J4T8mRNQ4IaI4da1afQ",
    authDomain: "fir-app-4295a.firebaseapp.com",
    databaseURL: "https://fir-app-4295a-default-rtdb.firebaseio.com",
    projectId: "fir-app-4295a",
    storageBucket: "fir-app-4295a.firebasestorage.app",
    messagingSenderId: "837168237332",
    appId: "1:837168237332:web:3be9b2ad936d51f7ab1001",
  
  };

  
  export const app =  initializeApp(firebaseConfig);