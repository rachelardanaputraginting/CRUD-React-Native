// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfUTiiNxWE5aD_NBhtQG6dGIJi_QYS_g0",
  authDomain: "crud-react-native-20.firebaseapp.com",
  projectId: "crud-react-native-20",
  storageBucket: "crud-react-native-20.appspot.com",
  messagingSenderId: "7946811267",
  appId: "1:7946811267:web:66f9738486845acaef28b6"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);

export default Firebase