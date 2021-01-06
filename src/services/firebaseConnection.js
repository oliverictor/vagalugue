import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


let firebaseConfig = {
    apiKey: "AIzaSyAETtRSK6pUpwAsNV7c56q80WuYwm_qdyo",
    authDomain: "meuapp-af46e.firebaseapp.com",
    databaseURL: "https://meuapp-af46e.firebaseio.com",
    projectId: "meuapp-af46e",
    storageBucket: "meuapp-af46e.appspot.com",
    messagingSenderId: "377426288673",
    appId: "1:377426288673:web:633cf812c45832d52c4360",
    measurementId: "G-K789C55QPY"
};

if (!firebase.apps.length) {
    //Abrir minha conexão
    firebase.initializeApp(firebaseConfig);
}

export default firebase; 
