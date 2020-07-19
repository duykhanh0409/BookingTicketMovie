import firebase from 'firebase';

const config={
    apiKey: "AIzaSyAhaqYqedb3vLu2lLFONRX8VtyT6PcZlWE",
    authDomain: "reactjwebticket-firebase.firebaseapp.com",
    databaseURL: "https://reactjwebticket-firebase.firebaseio.com",
    projectId: "reactjwebticket-firebase",
    storageBucket: "reactjwebticket-firebase.appspot.com",
    messagingSenderId: "645884806408",
    appId: "1:645884806408:web:4434c2548c8d53ab2018bd",
    measurementId: "G-4ZSZ0PPSL9"
  
}

const fire=firebase.initializeApp(config);

export default fire;