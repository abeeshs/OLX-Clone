import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxj8LtPqDwgKukSz9gpD5TzdqhbNpDSiU",
    authDomain: "fir-627b6.firebaseapp.com",
    projectId: "fir-627b6",
    storageBucket: "fir-627b6.appspot.com",
    messagingSenderId: "458410442053",
    appId: "1:458410442053:web:31c7eebc4a8a1f32f9d22c",
    measurementId: "G-0454J1QSNN"
  };
 export default firebase.initializeApp(firebaseConfig)