import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyA9XKTfvO9pj4TNP5gPdKO858pEpGxoCgg",
    authDomain: "login-fbf6f.firebaseapp.com",
    projectId: "login-fbf6f",
    storageBucket: "login-fbf6f.appspot.com",
    messagingSenderId: "313266270059",
    appId: "1:313266270059:web:039e64dd6f6e4443a4662e"
  };


  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;