import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyA0RxdcD7Ozx0_i785D-qKM_Lz5-Y8ZaiY",
    authDomain: "markdown-editor-cab8b.firebaseapp.com",
    projectId: "markdown-editor-cab8b",
    storageBucket: "markdown-editor-cab8b.appspot.com",
    messagingSenderId: "166447706500",
    appId: "1:166447706500:web:68788cca114cd0bca66dd1"
  };

  // Initial ize Firebase
 const fire =  firebase.initializeApp(firebaseConfig);

 export default fire;
