import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBhgJqwxYLNYqBO46d2T2GyUn1wFBIcJkg",
    authDomain: "todoapp-9df75.firebaseapp.com",
    projectId: "todoapp-9df75",
    storageBucket: "todoapp-9df75.appspot.com",
    messagingSenderId: "826310572260",
    appId: "1:826310572260:web:9b874d5ecc33bbf54994f1",
    measurementId: "G-L6JH82NFFX"
  };

  firebase.initializeApp(config);
  export default firebase;