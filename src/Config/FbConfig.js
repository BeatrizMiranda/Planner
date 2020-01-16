import firebase from 'firebase/app';
import 'firebase/firestore' 
import 'firebase/auth' 


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDf1TEPaWB579NxJXZwCSUQYkxfcm_KwoY",
    authDomain: "planner-54b44.firebaseapp.com",
    databaseURL: "https://planner-54b44.firebaseio.com",
    projectId: "planner-54b44",
    storageBucket: "planner-54b44.appspot.com",
    messagingSenderId: "261752603637",
    appId: "1:261752603637:web:161ccd6056f1209d21d6bc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase