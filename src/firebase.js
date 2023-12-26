// import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAjMG_HPO0H-PUWJEsu3oaUs0dirYL5aCM",
    authDomain: "just-do-it-abade.firebaseapp.com",
    projectId: "just-do-it-abade",
    storageBucket: "just-do-it-abade.appspot.com",
    messagingSenderId: "756873786216",
    appId: "1:756873786216:web:febc01419b13a8f6835cdd"
};

const firebaseApp = initializeApp(firebaseConfig);
export default getFirestore()



