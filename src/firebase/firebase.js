import firebase from 'firebase/app'
import 'firebase/storage'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDcatja5NSU6Zg-n7KeOsdeF9eht0hzISk",
    authDomain: "desk-clients.firebaseapp.com",
    databaseURL: "https://desk-clients.firebaseio.com",
    projectId: "desk-clients",
    storageBucket: "desk-clients.appspot.com",
    messagingSenderId: "69276065486",
    appId: "1:69276065486:web:9bbd382e0f8ecdf3bf3a9f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }