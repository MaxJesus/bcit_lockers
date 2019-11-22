    // the web app's Firebase configuration
    //"bcit-lockers" is the project name
    var firebaseConfig = {
      apiKey: "AIzaSyASFWH5KsgmLDY3HcRUmDIwbFtYv5Ayf8o",
      authDomain: "bcit-lockers.firebaseapp.com",
      databaseURL: "https://bcit-lockers.firebaseio.com",
      projectId: "bcit-lockers",
      storageBucket: "bcit-lockers.appspot.com",
      messagingSenderId: "380958555512",
      appId: "1:380958555512:web:3a1928344614d15da51c8d",
      measurementId: "G-R8V8WMCJRB"
    };
    // Initialize Firebase

    firebase.initializeApp(firebaseConfig);
//  Do not know how it works yet.
//  firebase.analytics();
var db = firebase.firestore();
